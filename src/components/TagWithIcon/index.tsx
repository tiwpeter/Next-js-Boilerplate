import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import CombinedComponent from './page';

const LIMIT = 10; // Adjust the number of items per load as needed

export default function MainpageGroupScrollTag() {
  const [tags, setTags] = useState<string[]>([]);
  const [start, setStart] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false); // Define the loading state
  const { ref, inView } = useInView();

  const loadItems = useCallback(async () => {
    if (!hasMore || loading) return;

    setLoading(true); // Set loading to true when fetching data

    try {
      const response = await axios.get('http://localhost:3000/api/name-header');
      const { data } = response;

      // ตรวจสอบว่า response.data และ response.data.items มีอยู่จริง
      if (data && Array.isArray(data.items)) {
        setTags((prevTags) => [...prevTags, ...data.items]);
        setHasMore(data.hasMore); // ใช้ข้อมูล hasMore จาก API
        setStart((prevStart) => prevStart + LIMIT); // Move the increment here
      } else {
        console.error('Invalid response structure:', data);
        setHasMore(false); // หยุดการโหลดหากข้อมูลมีปัญหา
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Reset loading state after data fetching
    }
  }, [hasMore, loading]);

  useEffect(() => {
    if (inView && hasMore && !loading) {
      loadItems();
    }
  }, [inView, hasMore, loading, loadItems]);

  return (
    <div
      className="App"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <h1>My App</h1>
      <CombinedComponent tags={tags} />
      {loading && <div>Loading...</div>} {/* Show loading indicator */}
      {!hasMore && !loading && <div>No more items</div>}{' '}
      {/* Optional: Show a message when no more items */}
      {hasMore && !loading && (
        <div ref={ref} style={{ height: '20px', background: 'transparent' }} />
      )}{' '}
      {/* Sentinel */}
    </div>
  );
}
