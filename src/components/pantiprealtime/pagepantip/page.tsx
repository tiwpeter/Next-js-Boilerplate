'use client';

import MessageIcon from '@mui/icons-material/Message';
import { SvgIcon } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPantip } from '@/features/pantipSlie';

const PantipRealtime: React.FC<{ tag: string }> = ({ tag }) => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state: any) => state.pantip);

  useEffect(() => {
    if (tag) {
      console.log(`Fetching data for tag: ${tag}`);
      dispatch(fetchPantip({ tagX: [tag], page: 1, perPage: 10 }));
    }
  }, [dispatch, tag]);

  // Get the items for the specific tag
  const itemsForTag = items[tag] || [];

  return (
    <section
      className="dw container mx-auto"
      style={{
        height: '430px',
        background: 'aliceblue',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '1078px',
      }}
    >
      <ul className="flex flex-wrap" style={{ width: '1080px' }}>
        {itemsForTag.map((item: any, index: number) => (
          <li
            key={item.id}
            className="boxslie flex items-start border p-2"
            style={{ width: '50%', height: '86px' }}
          >
            {/* Conditional rendering for image */}
            {item.img_url && item.img_url !== 'not found url' ? (
              <img
                src={item.img_url}
                alt="Pantip item"
                className="mr-2 size-12"
                style={{ width: '86px', height: '64px' }}
              />
            ) : null}{' '}
            {/* Render <img> only if item.img_url exists and is not 'not found url' */}
            <div
              className="flex h-full flex-col justify-between"
              style={{ width: item.img_url ? 'calc(100% - 86px)' : '100%' }} // Adjust width based on image presence
            >
              <div>
                <h2 className="mainPageTag" style={{ marginTop: '-7px' }}>
                  {item.text_title}
                </h2>
              </div>
              <div
                className="flex items-center"
                style={{ gap: '5px', marginTop: '3px' }}
              >
                {(item.tags || []).map((tagItem: any, index: number) => (
                  <a key={index} href={tagItem.link_tag} className="tag-link">
                    <h2 className="list_font_tag">{tagItem.tag_title || ''}</h2>
                  </a>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-end" style={{ gap: '0px' }}>
                  {(item.User || []).map((userItem: any, index: number) => (
                    <a
                      key={index}
                      href={userItem.link_user}
                      className="text-center"
                      style={{
                        margin: '0',
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                    >
                      <h5 style={{ margin: '0' }}>{userItem.text_user}</h5>
                    </a>
                  ))}
                  <h5
                    style={{ margin: '0', marginLeft: '6px' }}
                    className="text-center"
                  >
                    {item.info}
                  </h5>
                </div>
                <div className="pt-list-item__stats flex">
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
                    {item.comments && item.comments.length > 0
                      ? item.comments.map((comment: any, index: number) => (
                          <span key={index} style={{ marginRight: '4px' }}>
                            {comment.message}
                          </span>
                        ))
                      : '0'}
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PantipRealtime;
