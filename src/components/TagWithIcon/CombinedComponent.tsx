'use client';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchIconData } from '@/features/forTagWithIcon/IconTag';
import { fetchData, incrementPage } from '@/features/forTagWithIcon/itemsSlice';
import type { RootState } from '@/features/store/store';

// CombinedComponent with logging
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

  useEffect(() => {
    if (tags.length > 0) {
      console.log('Dispatching fetchData for tags:', tags); // Logging the tags before fetching data
      dispatch(fetchData({ tagX: tags, page: 1, perPage: 10 })); // Adjust `perPage` as needed
      tags.forEach((tag) => {
        dispatch(fetchIconData(tag));
      });
    }
  }, [dispatch, tags]);

  const loadMoreData = (tag: string) => {
    const currentPage = pages[tag] || 1;
    console.log(`Loading more data for tag: ${tag}, page: ${currentPage + 1}`); // Logging pagination details
    if (currentPage < (totalPages[tag] || 1)) {
      dispatch(incrementPage(tag));
      dispatch(fetchData({ tagX: [tag], page: currentPage + 1, perPage: 10 }));
    }
  };

  const renderContent = (tag: string, spanHeader: string[]) => {
    const iconfortag = iconData[tag] || [];
    const tagItems = items[tag] || [];
    console.log(`Rendering content for tag: ${tag}`, {
      iconfortag,
      tagItems,
      spanHeader,
    }); // Logging the data used for rendering

    return (
      <div key={tag} style={{ width: '711px' }}>
        {/* Render your content here */}
        {tagItems.map((item, index) => (
          <div key={`${tag}-${item.id}-${index}`}>{item.name}</div> // Ensure unique key for each item
        ))}
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
        return <div key={tag}>{renderContent(tag, spanHeader)}</div>;
      })}
    </div>
  );
};

export default CombinedComponent;
