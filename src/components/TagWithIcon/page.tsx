'use client';

import MessageIcon from '@mui/icons-material/Message';
import { SvgIcon } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchIconData } from '@/features/forTagWithIcon/IconTag';
import { fetchData } from '@/features/forTagWithIcon/TagSlice';
import { selectAllIcons } from '@/store/select/selectIconData';
import { selectData } from '@/store/select/selectors';
import type { RootState } from '@/store/store';

const CombinedComponent: React.FC<{ tags: string[] }> = ({ tags }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { items, status, error } = useSelector(selectData);
  const icons = useSelector(selectAllIcons);

  // Safeguard to ensure the selector does not fail
  const iconData = useSelector((state: RootState) => {
    const data = state.iconfortag?.data || {}; // Ensure data is defined
    return tags.reduce(
      (acc, tag) => {
        acc[tag] = data[tag] || []; // Safeguard for undefined tag
        return acc;
      },
      {} as Record<string, any[]>,
    );
  });

  useEffect(() => {
    if (tags.length > 0) {
      dispatch(fetchData({ tagX: tags }));
      tags.forEach((tag) => {
        dispatch(fetchIconData(tag));
      });
    }
  }, [dispatch, tags]);

  const handleTagClick = (tag: string) => {
    router.push(`/tag/${tag}`);
  };

  const renderContent = (tag: string) => {
    const iconfortag =
      icons[tag] && icons[tag].length > 0 ? icons[tag][0] : null;
    const tagItems = items[tag] || [];

    return (
      <div style={{ width: '711px' }}>
        {/* nav tag */}
        <div style={{ background: '#7f99ff' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '711px',
            }}
          >
            <section
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              {iconfortag ? (
                <img
                  src={iconfortag.background_image_url}
                  alt={`Icon for ${iconfortag.text_eng}`}
                  style={{ width: '100px', height: '60px' }}
                />
              ) : (
                <div>No icon available</div>
              )}
            </section>
            <div style={{ width: '100%' }}>
              <h2 style={{ margin: 0 }}>{tag}</h2>
            </div>
          </div>
        </div>
        {/* title tag */}
        <section
          className="dw container mx-auto"
          style={{
            height: '418px',
            background: 'aliceblue',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '711px',
            overflow: 'hidden',
          }}
        >
          <ul
            className="flex flex-col"
            style={{
              display: 'flex',
              flexDirection: 'column',
              margin: 0,
              padding: 0,
              listStyleType: 'none',
              width: '100%',
            }}
          >
            {tagItems.length > 0 ? (
              tagItems.map((item) => (
                <li
                  key={item.id}
                  className="boxslie flex items-start border p-2"
                  style={{ width: '100%' }}
                >
                  {item.img_url && item.img_url !== 'not found url' ? (
                    <img
                      src={item.img_url}
                      alt="Pantip item"
                      className="mr-2 size-12"
                      style={{ width: '86px', height: '64px' }}
                    />
                  ) : null}{' '}
                  {/* Render nothing if no image URL */}
                  <div
                    className="flex h-full flex-col justify-between"
                    style={{ width: 'calc(100% - 0px)' }}
                  >
                    <div>
                      <h2 className="mainPageTag" style={{ marginTop: '-7px' }}>
                        {item.text_title}
                      </h2>
                    </div>
                    <div
                      className="flex items-center"
                      style={{ gap: '5px', marginTop: '3px' }}
                    >
                      {(item.tags || []).map((tagItem, index) => (
                        <a
                          key={index}
                          href={tagItem.link_tag}
                          className="tag-link"
                        >
                          <h2 className="list_font_tag">
                            {tagItem.tag_title || ''}
                          </h2>
                        </a>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-end" style={{ gap: '0px' }}>
                        {(item.User || []).map((userItem, index) => (
                          <a
                            key={index}
                            href={userItem.link_user}
                            className="text-center"
                            style={{
                              margin: '0',
                              textDecoration: 'none',
                              color: 'inherit',
                            }}
                          >
                            <h5 style={{ margin: '0' }}>
                              {userItem.text_user}
                            </h5>
                          </a>
                        ))}
                        <h5
                          style={{ margin: '0', marginLeft: '6px' }}
                          className="text-center"
                        >
                          {item.info}
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
                            style={{ fontSize: '1rem', marginRight: '8px' }}
                          />
                          {item.comments && item.comments.length > 0
                            ? item.comments.map((comment, index) => (
                                <span
                                  key={index}
                                  style={{ marginRight: '4px' }}
                                >
                                  {comment.message}
                                </span>
                              ))
                            : '0'}
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <div>No items available for this tag</div>
            )}
          </ul>
        </section>
      </div>
    );
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {tags.map((tag) => (
        <div key={tag}>
          {renderContent(tag)}
          <button onClick={() => handleTagClick(tag)}>Go to Tag Page</button>
        </div>
      ))}
    </div>
  );
};

export default CombinedComponent;
