'use client';

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
                <p style={{ marginTop: '0rem', marginBottom: '0rem' }}>
                  {spanHeader.join(', ')}
                </p>
              )}
            </div>
          </div>
        </div>
        {/* nav tag */}
        <div className="titles-container">
          <ul className="titles-list">
            {tagItems.length > 0 ? (
              tagItems.map((item, index) => (
                <li
                  key={index}
                  className="boxslie border p-2"
                  style={{ width: '100%', height: '86px' }}
                >
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
                      {/* Adjust this part if needed */}
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
        </div>
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
