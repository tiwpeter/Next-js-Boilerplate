'use client';

// TagTrend.js หรือคอมโพเนนต์ที่คุณต้องการใช้
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { RootState } from '@/features/store/store';
import { fetchfood } from '@/features/tagsReducerId';

const TestID = ({ params }: { params: { tag: string } }) => {
  const dispatch = useDispatch();
  const { tag } = params; // Extract tag from props
  const [localData, setLocalData] = useState<{
    header: string;
    titles: any[];
  } | null>(null);
  const fetchStatus = useSelector((state: RootState) => state.tags.status); // Access fetch status
  const fetchError = useSelector((state: RootState) => state.tags.error); // Access fetch error

  useEffect(() => {
    if (tag) {
      dispatch(fetchfood(tag))
        .unwrap()
        .then((data) => {
          console.log('fetchfood data:', data); // Log fetched data
          setLocalData(data); // Set the local state with fetched data
        })
        .catch((error) => {
          console.error('fetchfood error:', error); // Log error
        });
    }
  }, [dispatch, tag]);

  return (
    <div>
      {fetchStatus === 'loading' && <p>Loading...</p>}
      {fetchStatus === 'failed' && <p>Error: {fetchError}</p>}
      {fetchStatus === 'succeeded' && localData && (
        <>
          <h2>{localData.header}</h2>
          <ul>
            {localData.titles.map((item, index) => (
              <li key={index}>
                <a href={item.img_url || '#'}>{item['Title-Topic']}</a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default TestID;
