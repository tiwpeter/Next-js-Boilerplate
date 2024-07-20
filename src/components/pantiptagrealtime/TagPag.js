import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, increaseVisibleCount } from '../../features/moretag';
import LoadMoreButton from '../more/more';

const TagPage = ({ tag }) => {
  const dispatch = useDispatch();
  const { items, page, status, error } = useSelector((state) => state.data);

  useEffect(() => {
    console.log('Fetching data for tag:', tag);
    const currentPage = page[tag] || 1;
    console.log('Current page for tag:', tag, currentPage);
    if (tag) {
      dispatch(fetchData({ tag, page: currentPage }));
    }
  }, [dispatch, tag, page[tag]]);

  const loadMoreData = () => {
    console.log('Load more data for tag:', tag);
    const currentPage = page[tag] || 1;
    console.log('Current page before dispatch:', currentPage);
    if (tag) {
      dispatch(fetchData({ tag, page: currentPage + 1 }));
      dispatch(increaseVisibleCount(tag));
    } else {
      console.error('Tag is undefined or invalid');
    }
  };

  const itemsForTag = items[tag] || [];
  console.log('Items for tag:', tag, itemsForTag);

  return (
    <div>
      {status === 'loading' && <p>กำลังโหลด...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      <ul>
        {itemsForTag.map((item, index) => (
          <li key={`${item.title}-${index}`}>{item.title}</li>
        ))}
      </ul>
      {status !== 'loading' && (
        <LoadMoreButton onClick={loadMoreData} />
      )}
    </div>
  );
};

export default TagPage;