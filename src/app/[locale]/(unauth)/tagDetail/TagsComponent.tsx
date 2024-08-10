'use client';

import AddBoxIcon from '@mui/icons-material/AddBox';
import MessageIcon from '@mui/icons-material/Message';
import { SvgIcon } from '@mui/material';
import { index } from 'drizzle-orm/mysql-core';
import React from 'react';

const TagsComponent = ({}) => {
  return (
    <div style={{ width: '713px' }}>
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
            <li
              key={index}
              className="boxslie border p-2"
              style={{ width: '100%', height: '86px' }}
            >
              <img
                src=""
                alt="Placeholder Image"
                className="mr-2 size-12"
                style={{ width: '86px', height: '64px', float: 'left' }}
              />
              <div className="ml-2">
                <div>
                  <h2>
                    dswasx
                    <div className="pt-list-item__title">
                      <a className="pick-link" href="">
                        <i className="pantip-icon" />
                        60 years
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
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TagsComponent;
