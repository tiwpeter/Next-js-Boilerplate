'use client';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchIconData } from '@/features/forTagWithIcon/IconTag';
import { fetchData, incrementPage } from '@/features/forTagWithIcon/itemsSlice';
import type { RootState } from '@/features/store/store';

const CombinedComponent: React.FC<{ tags: string[] }> = ({ tags }) => {
  const dispatch = useDispatch();
  const { items, status, error, pages, totalPages } = useSelector(
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

  const renderContent = (tag: string) => {
    const iconfortag = iconData[tag] || [];
    const tagItems = items[tag] || [];

    return (
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            // marginBottom: '20px',  Spacing below the heading
            width: '150px',
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
          <div>
            <h2 style={{ margin: 0 }}>{tag}</h2>
          </div>
        </div>
        {tagItems.length > 0 && (
          <div style={{ marginTop: '20px' }}>
            <h3>Tags</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {tagItems.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
        {iconfortag.length === 0 && tagItems.length === 0 && (
          <div>No items available for this tag</div>
        )}
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
      {tags.map((tag) => (
        <div key={tag}>
          {renderContent(tag)}
          {shouldShowLoadMoreButton(tag) && (
            <button
              onClick={() => loadMoreData(tag)}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Loading more...' : 'Load More'}
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

// If you need to export combined data
export const getCombinedData = (state: RootState) => {
  return tags.reduce(
    (acc, tag) => {
      acc[tag] = {
        icons: state.iconfortag.data[tag] || [],
        items: state.data.items[tag] || [],
      };
      return acc;
    },
    {} as Record<string, { icons: any[]; items: any[] }>,
  );
};

export default CombinedComponent;
