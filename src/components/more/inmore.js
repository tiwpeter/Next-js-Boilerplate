// src/components/DetailPage.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, increaseVisibleCount } from '../features/moretag';

const DetailPage = ({ tag }) => {
  const dispatch = useDispatch();
  const { items, page, status, error } = useSelector((state) => state.data);

  useEffect(() => {
    if (tag) {
      dispatch(fetchData({ tag, page }));
    }
  }, [tag, page, dispatch]);

  const loadMoreData = () => {
    dispatch(increaseVisibleCount());
    dispatch(fetchData({ tag, page: page + 1 }));
  };

  return (
    <div>
      <h1>รายละเอียด</h1>
      {status === 'loading' && <p>กำลังโหลด...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      <ul>
        {items.map((item, index) => (
          <li key={`${item.title}-${index}`}>{item.title}</li>
        ))}
      </ul>
      {status !== 'loading' && (
        <button onClick={loadMoreData}>โหลดข้อมูลเพิ่มเติม</button>
      )}
    </div>
  );
};

export default DetailPage;
