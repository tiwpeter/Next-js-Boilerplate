'use client';

import MessageIcon from '@mui/icons-material/Message';
import { SvgIcon } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchIconData } from '@/features/forTagWithIcon/IconTag';
import { fetchData, incrementPage } from '@/features/forTagWithIcon/itemsSlice';
import type { RootState } from '@/features/store/store';

const CombinedComponent: React.FC<{ tags: string[] }> = ({ tags }) => {
  const dispatch = useDispatch();
  const { items, status, error, pages, totalPages, spanHeaders } = useSelector(
    (state: RootState) => state.data,
  );

  const iconData = useSelector((state: RootState) =>
    tags.reduce(
      (acc, tag) => {
        acc[tag] = state.iconfortag.data[tag] || [];
        return acc;
      },
      {} as Record<string, any[]>,
    ),
  );

  const [perPage] = useState(1);

  useEffect(() => {
    if (tags.length > 0) {
      dispatch(fetchData({ tagX: tags, page: 1, perPage }));
      tags.forEach((tag) => {
        dispatch(fetchIconData(tag));
      });
    }
  }, [dispatch, tags, perPage]);

  useEffect(() => {
    console.log('Data changed', { items, status, error, pages, totalPages });
    console.log('tagItems:', items);
  }, [items, status, error, pages, totalPages]);

  const loadMoreData = (tag: string) => {
    const currentPage = pages[tag] || 1;
    if (currentPage < (totalPages[tag] || 1)) {
      dispatch(incrementPage(tag));
      dispatch(fetchData({ tagX: [tag], page: currentPage + 1, perPage }));
    }
  };

  const shouldShowLoadMoreButton = (tag: string) => {
    const currentPage = pages[tag] || 1;
    const totalPagesForTag = totalPages[tag] || 1;
    return currentPage < totalPagesForTag;
  };

  const renderContent = (tag: string, spanHeader: string[]) => {
    const iconfortag = iconData[tag] || [];
    const tagItems = items[tag] || [];

    return (
      <div style={{ width: '711px' }}>
        {/* nav tag */}
        <div style={{ background: '#7f99ff' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '711px',
            }}
          >
            <section
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              {iconfortag.map((item, index) => (
                <img
                  key={index}
                  src={item.background_image_url}
                  alt={`Icon for ${item.text_eng}`}
                  style={{ width: '100px', height: '60px' }}
                />
              ))}
            </section>
            <div style={{ width: '100%' }}>
              <h2 style={{ margin: 0 }}>{tag}</h2>
              {/* Displaying span_header if available */}
              {spanHeader.length > 0 && (
                <div className="font_TagSecod">{spanHeader.join(', ')}</div>
              )}
            </div>
          </div>
        </div>
        {/* nav tag */}
        {/* title tag */}
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
            {tagItems.length > 0 ? (
              tagItems.map((item, index) => (
                <li
                  key={item.id}
                  className="boxslie flex items-start border p-2"
                  style={{ width: '100%', marginBottom: '8px' }} // Full width and space between items
                >
                  <img
                    src={item.img_url}
                    alt="Placeholder Image"
                    className="mr-2 size-12"
                    style={{ width: '86px', height: '64px' }}
                  />
                  <div
                    className="flex h-full flex-col justify-between"
                    style={{ width: 'calc(100% - 96px)' }} // Adjust width based on image size
                  >
                    <div>
                      <h2 className="mainPageTag" style={{ marginTop: '-7px' }}>
                        {item.title}
                      </h2>
                    </div>
                    {/* tag */}
                    <div
                      className="flex items-center"
                      style={{ gap: '5px', marginTop: '3px' }}
                    >
                      {' '}
                      {(item.tagsDetail || []).map((tag, index) => (
                        <a key={index} href={tag.href} className="tag-link">
                          <h2 className="list_font_tag">
                            {tag.text || 'No text'}
                          </h2>
                        </a>
                      ))}
                    </div>

                    {/* end point */}
                    <div className="flex items-center justify-between">
                      {/* User Info */}
                      <div className="flex items-end" style={{ gap: '0px' }}>
                        <h5 style={{ margin: '0' }} className="text-center">
                          {item.user}
                        </h5>
                        <h5
                          style={{ margin: '0', marginLeft: '6px' }} // Corrected inline styles
                          className="text-center"
                        >
                          {item.timePost}
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
                          {(item.comments && item.comments.message) ||
                            'No comments'}
                          {/* Access nested message */}
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <div>No items available for this tag</div>
            )}
          </ul>
        </section>
      </div>
    );
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {tags.map((tag) => {
        const spanHeader = spanHeaders[tag] || [];
        return (
          <div key={tag}>
            {renderContent(tag, spanHeader)}
            {shouldShowLoadMoreButton(tag) && (
              <button
                onClick={() => loadMoreData(tag)}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Loading more...' : 'Load More'}
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CombinedComponent;
/*
<ul className="flex flex-wrap" style={{ width: '1080px' }}>
            {tagItems.length > 0 ? (
              tagItems.map((item, index) => (
                <li
                  key={index}
                  className="boxslie border p-2"
                  style={{ width: '100%', height: '86px' }}
                >
                  <img
                    src={item.url}
                    alt="Placeholder Image"
                    className="mr-2 size-12"
                    style={{ width: '86px', height: '64px' }}
                  />
                  <div className="ml-2">
                    <h2>
                      {item.title}{' '}
                      <div className="pt-list-item__title">
                        <a className="pick-link" href="">
                          <i className="pantip-icon" />
                          45 years
                        </a>
                      </div>
                    </h2>
                    <div className="list_tag">
                      {/* Adjust this part if needed 
                      {item.tags &&
                        item.tags.map((tag, index) => (
                          <a key={index} className="pick-link" href={item.link}>
                            <i className="pantip-icon" />
                            {tag}
                          </a>
                        ))}
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <div>No items available for this tag</div>
            )}
          </ul>
*/
