'use client';

import MessageIcon from '@mui/icons-material/Message';
import { SvgIcon } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchData, incrementPage } from '@/features/forTagWithIcon/itemsSlice';
import type { RootState } from '@/features/store/store';

// tag = currentTags

const PantipSecondary = ({ tag }) => {
  const dispatch = useDispatch();
  const { items, status, error, pages, totalPages } = useSelector(
    (state: RootState) => state.data,
  );

  const [perPage, setPerPage] = useState(1);

  // items / keep in store // pull store
  // pull api

  // start = tag{pagarams}

  useEffect(() => {
    if (tag.length > 0) {
      console.log(`Fetching data for tag: ${tag}`);
      dispatch(fetchData({ tagX: tag, page: 1, perPage }));
    }
  }, [dispatch, tag, perPage]);
  // tag = sting param fetchData{loop} * api
  //

  /// /
  useEffect(() => {
    console.log('Data changed', { items, status, error, pages, totalPages });
  }, [items, status, error, pages, totalPages]);

  const loadMoreData = (tag: string) => {
    const currentPage = pages[tag] || 1;
    console.log(`Loading more data for tag: ${tag}`, {
      currentPage,
      totalPages: totalPages[tag],
    });
    if (currentPage < (totalPages[tag] || 1)) {
      dispatch(incrementPage(tag));
      dispatch(fetchData({ tagX: [tag], page: currentPage + 1, perPage }));
    }
  };

  const shouldShowLoadMoreButton = (tag: string) => {
    const currentPage = pages[tag] || 1;
    const totalPagesForTag = totalPages[tag] || 1;
    // Check if more pages are available to load
    return currentPage < totalPagesForTag;
  };

  // item  = api
  // tag = parm
  // item + tag = http send
  const itemsForTag = items[tag] || [];
  //  console.log('Items for tag:', tag, itemsForTag);

  return (
    <div style={{ width: '711px' }}>
      {/* main container */}
      <section
        className="dw container mx-auto"
        style={{
          height: '418px',
          background: 'aliceblue',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '711px',
          overflow: 'hidden',
        }}
      >
        <ul
          className="flex flex-col"
          style={{
            display: 'flex',
            flexDirection: 'column', // Stack items vertically
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
              style={{ width: '100%' }} // Full width and space between items
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
                      <h2 className="list_font_tag">
                        {tagItem.tag_title || ''}
                      </h2>
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
        {shouldShowLoadMoreButton(tag) && (
          <button
            onClick={() => loadMoreData(tag)}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Loading more...' : 'Load More'}
          </button>
        )}
      </section>
    </div>
  );
};

export default PantipSecondary;
