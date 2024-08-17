'use client';

'use client';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LoadMoreButton from '@/components/more/more';
import { fetchIconData } from '@/features/forTagWithIcon/IconTag';
import { fetchData, incrementPage } from '@/features/forTagWithIcon/itemsSlice';
import type { RootState } from '@/features/store/store';

import styles from './CombinedComponent.module.css'; // ใช้ CSS Modules

const CombinedComponent: React.FC<{ tags: string[] }> = ({ tags }) => {
  const dispatch = useDispatch();

  const { items, status, error, pages, totalPages } = useSelector(
    (state: RootState) => state.data,
  );
  const iconData = useSelector((state: RootState) => {
    return tags.reduce(
      (acc, tag) => {
        acc[tag] = state.icons.data[tag] || [];
        return acc;
      },
      {} as Record<string, any[]>,
    );
  });

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
    const icons = iconData[tag] || [];
    const tagItems = items[tag] || [];

    if (icons.length > 0 && tagItems.length > 0) {
      return (
        <>
          <h3>Icons</h3>
          {icons.map((item, index) => (
            <img
              key={index}
              src={item.background_image_url}
              alt={`Icon for ${item.text_eng}`}
              className={styles.iconImage}
            />
          ))}
          <h3>Tags</h3>
          {tagItems.map((item, index) => (
            <li key={index} className={styles.tagItem}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </>
      );
    }

    if (icons.length > 0) {
      return icons.map((item, index) => (
        <li key={index} className={styles.tagItem}>
          <a href={item.link}>{item.title}</a>
        </li>
      ));
    }

    if (tagItems.length > 0) {
      return tagItems.map((item, index) => (
        <li key={index} className={styles.tagItem}>
          <a href={item.link}>{item.title}</a>
        </li>
      ));
    }

    return <li>No items available for this tag</li>;
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.container}>
      {tags.map((tag) => (
        <div key={tag} className={styles.tagContainer}>
          <h2>{tag}</h2>
          <ul className={styles.itemList}>{renderContent(tag)}</ul>
          {shouldShowLoadMoreButton(tag) && (
            <LoadMoreButton
              onClick={() => loadMoreData(tag)}
              loading={status === 'loading'}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default CombinedComponent;
