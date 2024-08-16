'use client';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchIconData } from '@/features/forTagWithIcon/IconTag';
import { fetchData, incrementPage } from '@/features/forTagWithIcon/itemsSlice';
import type { RootState } from '@/features/store/store';

const CombinedComponent: React.FC<{ tags: string[] }> = ({ tags }) => {
  const dispatch = useDispatch();

  // Extract data from Redux store
  const { items, status, error, pages, totalPages } = useSelector(
    (state: RootState) => state.data,
  );
  const iconData = useSelector((state: RootState) => {
    return tags.reduce(
      (acc, tag) => {
        acc[tag] = state.iconfortag.data[tag] || [];
        // tags{ราชดำเนิน}  => find api data[tag] =   api data[ราชดำเนิน]
        return acc;
      },
      {} as Record<string, any[]>,
    );
  });
  // useSelector ซึ่งเป็น hook ของ react-redux เพื่อดึงข้อมูลจาก store ของ Redux
  /*
  โดยรวม, โค้ดนี้จะสร้าง object ที่มี key เป็น tag จาก array tags และ value 
  เป็นข้อมูลที่ดึงมาจาก state.iconfortag.data ตาม tag นั้น ๆ หรือจะเป็น array เปล่าถ้าข้อมูลไม่พบ.
  */

  const [perPage] = useState(1); // Page size; adjust if needed

  useEffect(() => {
    if (tags.length > 0) {
      // console.log('Fetching data for tags:', tags);
      dispatch(fetchData({ tagX: tags, page: 1, perPage }));
      // tagX{api ราชดำเนิน} = tags={ราชดำเนิน}
      tags.forEach((tag) => {
        // tags{ราชดำเนิน} find => apiIcon
        dispatch(fetchIconData(tag));
      });
    }
  }, [dispatch, tags, perPage]);

  useEffect(() => {
    console.log('Data changed', { items, status, error, pages, totalPages });
  }, [items, status, error, pages, totalPages]);

  const loadMoreData = (tag: string) => {
    const currentPage = pages[tag] || 1;

    // incrementPage =  action.payload +1 =+ 1 perPage
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
    // tagItems = item{ราชดำเนิน}

    if (iconfortag.length > 0 && tagItems.length > 0) {
      return (
        <>
          <h3>iconfortag</h3>
          {iconfortag.map((item, index) => (
            <img
              key={index}
              src={item.background_image_url}
              alt={`Icon for ${item.text_eng}`}
              style={{ width: '100px', height: '60px' }} // You can adjust the styling as needed
            />
          ))}
          <h3>Tags</h3>
          {tagItems.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </>
      );
    }

    if (iconfortag.length > 0) {
      return iconfortag.map((item, index) => (
        <li key={index}>
          <a href={item.link}>{item.title}</a>
        </li>
      ));
    }

    if (tagItems.length > 0) {
      return tagItems.map((item, index) => (
        <li key={index}>
          <a href={item.link}>{item.title}</a>
        </li>
      ));
    }

    return <li>No items available for this tag</li>;
  };

  if (status === 'loading') {
    console.log('Loading data...');
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    console.log('Error occurred', { error });
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {tags.map((tag) => (
        <div key={tag}>
          <h2>{tag}</h2>
          <ul>{renderContent(tag)}</ul>
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

export default CombinedComponent;
