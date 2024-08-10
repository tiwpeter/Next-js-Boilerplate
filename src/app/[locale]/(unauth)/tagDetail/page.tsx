// src/app/[locale]/(unauth)/tagDetail/page.tsx
import './icon.css';

// Import useRouter from next/router
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchIconData } from '../../../../features/Icontag'; // Ensure the path is correct
import { fetchTags } from '../../../../features/tagsReducer';

const TagsComponent = ({ tagname }) => {
  const dispatch = useDispatch();
  const [hasItems, setHasItems] = useState(false);

  const tagData = useSelector((state) => state.icontag.data[tagname] || []);
  const status = useSelector((state) => state.icontag.status);
  const error = useSelector((state) => state.icontag.error);

  const tags = useSelector((state) => state.tags.tags);
  const tagsStatus = useSelector((state) => state.tags.status);
  const tagsError = useSelector((state) => state.tags.error);
  useEffect(() => {
    // console.log('Tag Data:', tagData); // Log the data to verify its content
  }, [tagData]);

  useEffect(() => {
    dispatch(fetchTags({ page: 1, perPage: 10, reset: true }));
  }, [dispatch]);

  useEffect(() => {
    if (tagname) {
      dispatch(fetchIconData(tagname));
    }
  }, [dispatch, tagname]);

  useEffect(() => {
    setHasItems(tagData.length > 0);
  }, [tagData]);

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
              <h2>{currentTagData.header_title}</h2>

              <h2
                style={{
                  position: 'relative',
                  top: '-8px',
                }}
              >
                {currentTagData.span_header}
              </h2>
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
