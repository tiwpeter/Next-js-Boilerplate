'use client';

import './font.css';

import AddBoxIcon from '@mui/icons-material/AddBox';
import MessageIcon from '@mui/icons-material/Message';
import { SvgIcon } from '@mui/material';
import { title } from 'process';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCamera, fetchFood, fetchTags } from '@/features/tagsReducerId';

const perPage = 10; // Example value

const TagIdPage = ({ params }: { params: { tag: string } }) => {
  const { tag } = params;
  const dispatch = useDispatch();
  const { Fooddata, Cameradata } = useSelector((state) => state.tags);

  // Loading and error states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true); // Set loading to true at the start
    setError(null); // Clear any previous errors

    const fetchData = async () => {
      try {
        dispatch(fetchTags({ page: 1, perPage, reset: true }));

        if (tag === 'Food') {
          await dispatch(fetchFood(tag));
        } else if (tag === 'Camera') {
          await dispatch(fetchCamera(tag));
        }
      } catch (err) {
        setError(`Failed to fetch ${tag.toLowerCase()} data`);
        console.error(`Error fetching ${tag.toLowerCase()} data:`, err);
      } finally {
        setLoading(false);
      }
    };

    if (tag) {
      fetchData();
    } else {
      setLoading(false); // No tag, stop loading
    }
  }, [dispatch, tag]);

  // Log Fooddata and Cameradata during render
  // Uncomment these lines for debugging
  // console.log('Fooddata during render:', Fooddata);
  // console.log('Cameradata during render:', Cameradata);

  // Ensure displayData is always an array
  const displayData =
    tag === 'Food'
      ? Fooddata && Array.isArray(Fooddata)
        ? Fooddata
        : []
      : tag === 'Camera'
        ? Cameradata && Array.isArray(Cameradata)
          ? Cameradata
          : []
        : [];

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
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && displayData.length > 0 && (
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
            <ul className="flex flex-wrap" style={{ width: '1080px' }}>
              {displayData.map((item, index) => (
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
                        <h5 className="text-center">{item.user - title}</h5>
                        <h5
                          className="text-center"
                          style={{ marginLeft: '6px' }}
                        >
                          {item.time}
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
          </section>
        )}
      </div>
    </div>
  );
};

export default TagIdPage;
