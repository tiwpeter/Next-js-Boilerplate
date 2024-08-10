// src/app/[locale]/(unauth)/tagDetail/page.tsx
import './icon.css';

import AddBoxIcon from '@mui/icons-material/AddBox';
import MessageIcon from '@mui/icons-material/Message';
import { SvgIcon } from '@mui/material';
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
    <div style={{ height: '430px', width: '713px' }}>
      <div
        className="tags-container"
        style={{
          height: '430px',
          background: 'aliceblue',
          display: 'flex',
          flexDirection: 'column',
          // alignItems: 'center',
          width: '100%', // Adjusted to fit the parent container's width
        }}
      >
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
            <div className="mt-3" style={{
  background: "#7f99ff",
  display: "flex",
  minHeight: "43px",
  padding: "12px 16px",
  position: "relative",
  whiteSpace: "normal",
  width: "1078px"
}}>
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
            </div>
            {/* end header */}

            <div className="titles-container">
              <ul className="titles-list">
                {currentTagData.titles.map((item, index) => (
                  <li
                    key={index}
                    className="boxslie border p-2"
                    style={{ width: '100%', height: '86px' }}
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="ml-2">
                        <div>
                          <h2>
                            {item.text_title}
                            <div className="pt-list-item__title">
                              <a className="pick-link" href="">
                                <i className="pantip-icon" />
                                45 years
                              </a>
                            </div>
                          </h2>
                        </div>

                        <div className="list_tag">
                          <a className="pick-link" href="">
                            <i className="pantip-icon" />
                            tag
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <h5 className="flex items-center text-center">
                          <span>สมาชิกหมายเลข 7793648</span>
                          <span style={{ marginLeft: '6px' }}>21 ชั่วโมง</span>
                        </h5>

                        <div className="flex items-center">
                          <span
                            style={{
                              fontSize: '.75rem',
                              marginRight: '16px',
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            <SvgIcon
                              component={MessageIcon}
                              style={{ fontSize: '1rem', marginRight: '8px' }}
                            />
                            29
                          </span>
                          <span
                            style={{
                              fontSize: '.75rem',
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            <SvgIcon
                              component={AddBoxIcon}
                              style={{ fontSize: '1rem', marginRight: '8px' }}
                            />
                            7
                          </span>
                        </div>
                      </div>
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
