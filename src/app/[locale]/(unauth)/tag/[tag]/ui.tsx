'use client';

import './font.css';

import AddBoxIcon from '@mui/icons-material/AddBox';
import MessageIcon from '@mui/icons-material/Message';
import { SvgIcon } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchFood, fetchTags } from '@/features/tagsReducer';

const TagIdPage = ({ params }: { params: { tag: string } }) => {
  const { tag } = params;
  const dispatch = useDispatch();
  const { Food, bangruk, status, error } = useSelector((state) => state.tags); // Include status and error in the selector

  const [page, setPage] = useState(1);
  const perPage = 10; // Define perPage

  useEffect(() => {
    if (tag) {
      dispatch(fetchTags({ page: 1, perPage, reset: true }));
      dispatch(fetchFood(tag));
    }
  }, [dispatch, tag, perPage]);

  const displayData = tag === 'bangruk' ? bangruk : tag === 'Food' ? Food : [];

  const loadMore = () => {
    setPage((prevPage) => {
      const nextPage = prevPage + 1;
      dispatch(fetchTags({ page: nextPage, perPage }));
      return nextPage;
    });
  };

  return (
    <div>
      <div className="copmain" style={{ width: '1078px' }}>
        <div
          className="mt-3"
          style={{
            background: '#7f99ff',
            display: 'flex',
            minHeight: '43px',
            padding: '12px 16px',
            position: 'relative',
            whiteSpace: 'normal',
            width: '1078px',
          }}
        >
          <h3>Pantip Trend</h3>
        </div>

        {status === 'loading' && <p>Loading...</p>}
        {status === 'failed' && <p>Error: {error}</p>}
        {status === 'succeeded' && (
          <div>
            {tag === 'Food' && (
              <section
                className="dw container mx-auto"
                style={{
                  height: '418px',
                  background: 'aliceblue',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '1078px',
                  overflow: 'hidden',
                }}
              >
                {displayData.length ? (
                  <ul className="flex flex-wrap" style={{ width: '1080px' }}>
                    {displayData.map((item) => (
                      <li
                        key={item.id}
                        className="boxslie flex items-start border p-2"
                        style={{ width: '50%' }}
                      >
                        <img
                          src={item.url}
                          alt="Placeholder Image"
                          className="mr-2 size-12"
                          style={{ width: '86px', height: '64px' }}
                        />

                        <div
                          className="flex h-full flex-col justify-between"
                          style={{ width: '428px' }}
                        >
                          <div className="mb-4">
                            <h2>{item.title}</h2>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-end">
                              <h5 className="text-center">
                                สมาชิกหมายเลข 7793648
                              </h5>
                              <h5
                                className="text-center"
                                style={{ marginLeft: '6px' }}
                              >
                                21 ชั่วโมง
                              </h5>
                            </div>

                            <div className="pt-list-item__stats flex">
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
                                  style={{
                                    fontSize: '1rem',
                                    marginRight: '8px',
                                  }}
                                />
                                29
                              </span>

                              <span
                                style={{
                                  fontSize: '.75rem',
                                  marginRight: '16px',
                                  display: 'flex',
                                  alignItems: 'center',
                                }}
                              >
                                <SvgIcon
                                  component={AddBoxIcon}
                                  style={{
                                    fontSize: '1rem',
                                    marginRight: '8px',
                                  }}
                                />
                                7
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>Loading Pantip data...</p>
                )}
              </section>
            )}
            <button onClick={loadMore}>Load More</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TagIdPage;

{
  /** 
</// pantip Trend
<///component TagIdPage
<// pantip real
*/
}
{
  /*
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
  */
}
