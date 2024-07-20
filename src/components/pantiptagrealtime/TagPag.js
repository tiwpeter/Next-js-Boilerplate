import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, increaseVisibleCount } from '../../features/moretag';
import LoadMoreButton from '../more/more';

const TagPage = ({ tag }) => {
  const dispatch = useDispatch();
  const { items, page, status, error, visibleCount } = useSelector((state) => state.data);

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

  // Calculate section height based on number of items
  const sectionHeight = `${itemsForTag.length * 82}px`; // Assuming each item height is 110px

  return (
    <div>
      {status === 'loading' && <p>กำลังโหลด...</p>}
      {status === 'failed' && <p>Error: {error}</p>}

      <section className="dw container mx-auto" style={{ height: sectionHeight, background: 'aliceblue', overflow: 'hidden' }}>
        <table className="table-auto w-full border-collapse border border-black">
          <tbody>
            <tr style={{ display: 'grid' }}>
              {itemsForTag.map((item, index) => (
                <td key={item.id} className="boxslie border p-2" style={{height:"82px"}}>
                  <div className="flex">
                    {/* Uncomment the image tag if needed */}
                     <img src={item.url} alt="Placeholder Image" className="mr-2 w-12 h-12" style={{ width: '86px', height: '64px' }} />
                    <h2 className='font-h2' key={`${item.title}-${index}`}>{item.title}</h2>
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
        
      </section>
      {status !== 'loading' && (
          <LoadMoreButton onClick={loadMoreData} />
        )}
    </div>
  );
};

export default TagPage;
