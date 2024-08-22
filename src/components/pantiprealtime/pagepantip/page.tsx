'use client';

import MessageIcon from '@mui/icons-material/Message';
import { SvgIcon } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPantip } from '@/features/pantipSlie';

// tag = currentTags

const PantipRealtime = ({ tag }) => {
  const dispatch = useDispatch();
  const { items, page, status, error } = useSelector((state) => state.pantip);
  // items / keep in store // pull store
  // pull api

  // start = tag{pagarams}

  useEffect(() => {
    if (tag) {
      console.log(`Fetching data for tag: ${tag}`);
      dispatch(fetchPantip({ tagX: [tag], page: 1, perPage: 10 }));
    }
  }, [dispatch, tag]);
  // tag = sting param fetchData{loop} * api
  //

  // item  = api
  // tag = parm
  // item + tag = http send
  const itemsForTag = items[tag] || [];
  //  console.log('Items for tag:', tag, itemsForTag);

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
        {itemsForTag.map((item, index) => (
          <li
            key={item.id}
            className="boxslie flex items-start border p-2"
            style={{ width: '50%', height: '86px' }}
          >
            {item.img_url ? (
              <img
                src={item.img_url}
                alt=""
                className="mr-2 size-12"
                style={{ width: '86px', height: '64px' }}
              />
            ) : (
              <div className="" /> // Placeholder if no image
            )}
            <div
              className="flex h-full flex-col justify-between"
              style={{ width: 'calc(100% - 0px)' }} // Adjust width based on image size
            >
              <div>
                <h2 className="mainPageTag" style={{ marginTop: '-7px' }}>
                  {item.text_title}
                </h2>
              </div>
              {/* tag */}
              <div
                className="flex items-center"
                style={{ gap: '5px', marginTop: '3px' }}
              >
                {' '}
                {(item.tags || []).map((tagItem, index) => (
                  <a key={index} href={tagItem.link_tag} className="tag-link">
                    <h2 className="list_font_tag">{tagItem.tag_title || ''}</h2>
                  </a>
                ))}
              </div>
              {/* end point */}
              <div className="flex items-center justify-between">
                <div className="flex items-end" style={{ gap: '0px' }}>
                  {(item.User || []).map((userItem, index) => (
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
                  {/* User Info */}
                  <h5
                    style={{ margin: '0', marginLeft: '6px' }} // Corrected inline styles
                    className="text-center"
                  >
                    {item.info}
                  </h5>
                </div>
                {/* User Stats */}
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
                      ? item.comments.map((comment, index) => (
                          <span key={index} style={{ marginRight: '4px' }}>
                            {comment.message}
                          </span>
                        ))
                      : '0'}
                    {/* Access nested message */}
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
/*
 <ul>
        {itemsForTag.map((item, index) => (
          <li key={`${item.text_title}-${index}`}>{item.text_title}</li>
        ))}
      </ul>
*/
