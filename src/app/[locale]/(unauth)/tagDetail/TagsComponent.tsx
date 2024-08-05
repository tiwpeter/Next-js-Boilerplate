'use client';

import AddBoxIcon from '@mui/icons-material/AddBox';
import MessageIcon from '@mui/icons-material/Message';
import { SvgIcon } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchTags, resetTags } from '../../../../features/tagsReducer';

const TagsComponent = ({ tag }) => {
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
  } = useSelector((state) => state.tags);
  const router = useRouter();

  useEffect(() => {
    dispatch(resetTags());
    dispatch(fetchTags({ page: 1, perPage, reset: true }));
  }, [dispatch, tag, perPage]);

  const loadMore = () => {
    const nextPage = page + 1;
    dispatch(fetchTags({ page: nextPage, perPage }));
  };

  const handleClick = () => {
    router.push(`/tag/${tag}`);
  };

  // Dynamically determine which tag data to use
  const tagData =
    {
      bangrak,
      bangruk,
      asmr,
      sukui,
      sme,
    }[tag] || [];

  // Dynamically determine if there's more data
  const hasMore = {
    bangrak: hasMoreBangrak,
    bangruk: hasMoreBangruk,
    asmr: hasMoreAsmr,
    sukui: hasMoreSukui,
    sme: hasMoreSme,
  }[tag];

  return (
    <div style={{ width: '713px' }}>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && (
        <div>
          <section
            className="dw container mx-auto"
            style={{
              background: 'aliceblue',
              overflow: 'hidden',
            }}
          >
            <ul
              className="flex flex-wrap"
              style={{ width: '100%', padding: '0', listStyle: 'none' }}
            >
              {tagData.map((item, index) => (
                <li
                  key={index}
                  className="boxslie border p-2"
                  style={{ width: '100%', height: '86px' }}
                >
                  <img
                    src={item.url}
                    alt="Placeholder Image"
                    className="mr-2 size-12"
                    style={{ width: '86px', height: '64px', float: 'left' }}
                  />
                  <div className="ml-2">
                    <div>
                      <h2>
                        {item.title}
                        <div className="pt-list-item__title">
                          <a className="pick-link" href="">
                            <i className="pantip-icon" />
                            45 years
                          </a>
                        </div>
                      </h2>
                    </div>

                    <div className="list_tag">
                      <a className="pick-link" href="">
                        <i className="pantip-icon" />
                        tag
                      </a>
                    </div>

                    <div className="flex items-center justify-between">
                      <h5 className="flex items-center text-center">
                        <span>สมาชิกหมายเลข 7793648</span>
                        <span style={{ marginLeft: '6px' }}>21 ชั่วโมง</span>
                      </h5>

                      <div className="flex items-center">
                        <span
                          style={{
                            fontSize: '.75rem',
                            marginRight: '16px',
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          <SvgIcon
                            component={MessageIcon}
                            style={{ fontSize: '1rem', marginRight: '8px' }}
                          />
                          29
                        </span>
                        <span
                          style={{
                            fontSize: '.75rem',
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          <SvgIcon
                            component={AddBoxIcon}
                            style={{ fontSize: '1rem', marginRight: '8px' }}
                          />
                          7
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
          {hasMore && <button onClick={loadMore}>Load More</button>}
        </div>
      )}
    </div>
  );
};

export default TagsComponent;
