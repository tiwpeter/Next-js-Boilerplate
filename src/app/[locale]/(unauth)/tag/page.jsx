'use client';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTags, resetTags } from '@/features/tagsReducer';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const TagsComponent = ({ tagId }) => {
  const dispatch = useDispatch();
  const {
    bangrak,
    bangruk,
    asmr,
    sukui,
    sme,
    status,
    error,
    page,
    perPage,
    hasMoreBangrak,
    hasMoreBangruk,
    hasMoreAsmr,
    hasMoreSukui,
    hasMoreSme,
  } = useSelector((state) => state.tagId);

  useEffect(() => {
    // Reset tags when the component mounts or the tag changes
    dispatch(resetTags());
    dispatch(fetchTags({ page: 1, perPage, reset: true }));
  }, [dispatch, tagId, perPage]);

  const loadMore = () => {
    const nextPage = page + 1;
    dispatch(fetchTags({ page: nextPage, perPage }));
  };

  // pull tag on gruop
  const displayData =
    tag === 'bangruk'
      ? bangruk
      : tag === 'bangrak'
        ? bangrak
        : tag === 'asmr'
          ? asmr
          : tag === 'sukui'
            ? sukui
            : tag === 'sme'
              ? sme
              : [];

  const router = useRouter();

  const handleClick = () => {
    router.push(`/tag/${tagId}`);
  };

  return (
    <div>
      {/* prothan */}
      <button onClick={handleClick}>Go to {tagId} Details</button>

      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && (
        <div>
          <ul>
            {displayData.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.title}</a> - {item.text}
              </li>
            ))}
          </ul>
          {tag === 'bangruk' && hasMoreBangruk && (
            <button onClick={loadMore}>Load More</button>
          )}
          {tag === 'bangrak' && hasMoreBangrak && (
            <button onClick={loadMore}>Load More</button>
          )}
          {tag === 'asmr' && hasMoreAsmr && (
            <button onClick={loadMore}>Load More</button>
          )}
          {tag === 'sukui' && hasMoreSukui && (
            <button onClick={loadMore}>Load More</button>
          )}
          {tag === 'sme' && hasMoreSme && (
            <button onClick={loadMore}>Load More</button>
          )}
        </div>
      )}
    </div>
  );
};

export default TagsComponent;
