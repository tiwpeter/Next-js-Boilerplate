'use client';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchData } from '@/features/forTagWithIcon/itemsSlice';

// tag = currentTags

const PantipRealtime = ({ tag }) => {
  const dispatch = useDispatch();
  const { items, page, status, error } = useSelector((state) => state.data);
  // items / keep in store // pull store
  // pull api

  // start = tag{pagarams}

  useEffect(() => {
    if (tag) {
      console.log(`Fetching data for tag: ${tag}`);
      dispatch(fetchData({ tagX: [tag], page: 1, perPage: 10 }));
    }
  }, [dispatch, tag]);
  // tag = sting param fetchData{loop} * api
  //

  // item  = api
  // tag = parm
  // item + tag = http send
  const itemsForTag = items[tag] || [];
  //  console.log('Items for tag:', tag, itemsForTag);

  return (
    <div>
      {status === 'loading' && <p>กำลังโหลด...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {itemsForTag.length === 0 && status === 'succeeded' && (
        <p>No data found for tag: {tag}</p>
      )}
      <ul>
        {itemsForTag.map((item, index) => (
          <li key={`${item.text_title}-${index}`}>{item.text_title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PantipRealtime;
// index
