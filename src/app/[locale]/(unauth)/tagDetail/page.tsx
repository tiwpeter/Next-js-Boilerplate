import './icon.css';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchIconData } from '../../../../features/Icontag';
import { fetchTags } from '../../../../features/tagsReducer';

const TagsComponent = ({ tagname }) => {
  const dispatch = useDispatch();
  const [hasItems, setHasItems] = useState(false);

  const tagData = useSelector((state) => state.icontag.data[tagname] || []); // เข้าถึงข้อมูลตาม tagname
  const status = useSelector((state) => state.icontag.status);
  const error = useSelector((state) => state.icontag.error);

  const tags = useSelector((state) => state.tags.tags);
  const tagsStatus = useSelector((state) => state.tags.status);
  const tagsError = useSelector((state) => state.tags.error);

  // Log ข้อมูลที่เกี่ยวข้องกับการโหลดข้อมูล
  useEffect(() => {
    // console.log("Fetching tags...");
    dispatch(fetchTags({ page: 1, perPage: 10, reset: true }));
  }, [dispatch]);

  useEffect(() => {
    if (tagname) {
      // console.log(`Fetching icon data for tag: ${tagname}`);
      dispatch(fetchIconData(tagname));
    }
  }, [dispatch, tagname]);

  useEffect(() => {
    setHasItems(tagData.length > 0);
  }, [tagData]);

  useEffect(() => {
    console.log('Tag data:', tagData);
    console.log('Current tag data:', tags[tagname]);
  }, [tagData, tagname, tags]);

  if (tagsStatus === 'loading') return <p>Loading tags...</p>;
  if (tagsStatus === 'failed') return <p>Error loading tags: {tagsError}</p>;

  if (!tags || typeof tags !== 'object') {
    return <p>Unexpected data format for tags</p>;
  }

  const currentTagData = tags[tagname] || null;

  if (status === 'loading') return <p>Loading icon data...</p>;
  if (status === 'failed') return <p>Error loading icon data: {error}</p>;

  return (
    <div style={{ height: '430px' }}>
      <div className="tags-container">
        <div className="icon-data">
          {tagData.length > 0 &&
            tagData.map((item) => (
              <div key={item.id} className="icon-item">
                <img
                  src={item.background_image_url}
                  alt=""
                  className="iconImage"
                />
              </div>
            ))}
        </div>
        {currentTagData && (
          <div className="tag-details">
            <div
              className="header-title"
              style={{ left: hasItems ? '75px' : '22px' }}
            >
              <h2 className="h2textIcon">{currentTagData.header_title}</h2>
            </div>

            <div className="titles-container">
              <ul className="titles-list">
                {currentTagData.titles.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.text_title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TagsComponent;
