'use client';

import MessageIcon from '@mui/icons-material/Message';
import { SvgIcon } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchData, incrementPage } from '@/features/forTagWithIcon/itemsSlice';

import LoadMoreButton from './more';
import styles from './PantipSecondary.module.css'; // Assuming you have some CSS module for styling

const PantipSecondary = ({ tag }) => {
  const dispatch = useDispatch();
  const { items, pages, totalPages, status } = useSelector(
    (state) => state.data,
  );

  useEffect(() => {
    if (tag) {
      console.log(`Fetching data for tag: ${tag}`);
      dispatch(fetchData({ tagX: [tag], page: 1, perPage: 5 }));
    }
  }, [dispatch, tag]);

  const itemsForTag = items[tag] || [];

  const loadMoreData = (tag) => {
    const currentPage = pages[tag] || 1;
    if (currentPage < (totalPages[tag] || 1)) {
      dispatch(incrementPage(tag));
      dispatch(fetchData({ tagX: [tag], page: currentPage + 1, perPage: 5 }));
    }
  };

  const shouldShowLoadMoreButton = (tag) => {
    const currentPage = pages[tag] || 1;
    const totalPagesForTag = totalPages[tag] || 1;
    return currentPage < totalPagesForTag;
  };

  return (
    <div className={styles.container}>
      <section
        className="dw container mx-auto"
        style={{
          height: '100%',
          background: 'aliceblue',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '711px',
        }}
      >
        <ul
          className="flex flex-col"
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: 0,
            padding: 0,
            listStyleType: 'none',
            width: '100%',
          }}
        >
          {itemsForTag.map((item, index) => (
            <li
              key={item.id}
              className="boxslie flex items-start border p-2"
              style={{ width: '100%' }}
            >
              {item.img_url ? (
                <img
                  src={item.img_url}
                  alt=""
                  className="mr-2 size-12"
                  style={{ width: '86px', height: '64px' }}
                />
              ) : (
                <div className="" />
              )}
              <div
                className="flex h-full flex-col justify-between"
                style={{ width: 'calc(100% - 0px)' }}
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
                  {(item.tags || []).map((tagItem, index) => (
                    <a key={index} href={tagItem.link_tag} className="tag-link">
                      <h2 className="list_font_tag">
                        {tagItem.tag_title || ''}
                      </h2>
                    </a>
                  ))}
                </div>
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
                        ? item.comments.map((comment, index) => (
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
        {shouldShowLoadMoreButton(tag) && (
          <LoadMoreButton
            onClick={() => loadMoreData(tag)}
            loading={status === 'loading'}
          />
        )}
      </section>
    </div>
  );
};

export default PantipSecondary;
