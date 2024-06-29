import React, { useEffect } from 'react';
import { useGetSuggestedTopicsQuery } from './redux/redux'; // ต้องแก้ที่อยู่ตามตัวอย่าง

const App = () => {
  const { data, error, isLoading } = useGetSuggestedTopicsQuery();

  useEffect(() => {
    // เรียกใช้ fetch หรือทำอย่างอื่นที่ต้องการทำงานกับข้อมูล
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <h1>Suggested Topics</h1>
      {data && Array.isArray(data) && (
        <ul>
          {data.map((topic) => (
            <li key={topic.id}>
              <h2>{topic.title}</h2>
              {/* แสดงข้อมูลอื่น ๆ ตามต้องการ */}
            </li>
          ))}
        </ul>
      )}
      {/* Console log to inspect data */}
      {console.log('Data from API:', data)}
    </div>
  );
}

export default App;
