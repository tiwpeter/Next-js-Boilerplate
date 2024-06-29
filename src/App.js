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

//เราใช้ data.data.map เนื่องจากข้อมูลจะถูกจัดเก็บภายใต้ property data ซึ่งเป็นลำดับที่เราต้องการเข้าถึง.
//สำหรับแต่ละห้อง (room) เราแสดงชื่อห้องทั้งภาษาไทยและภาษาอังกฤษ.
//สำหรับแต่ละหัวข้อ (topic) ภายในห้องนั้น ๆ เราแสดงหัวข้อ (topic_title) พร้อมกับข้อมูลเพิ่มเติมเช่นจำนวนวิว (views) และจำนวนความคิดเห็น (comments) ตามต้องการ.

return (
  <div className="App">
    <h1>Suggested Topics</h1>
    {data && (
      <ul>
        {data.data.map((room) => {
          console.log('Room:', room); // แสดงข้อมูลของแต่ละห้อง
          return (
            <li key={room.room_id}>
              <h2>{room.room_name_th}</h2>
              <ul>
                {room.topics.map((topic) => {
                  console.log('Topic:', topic); // แสดงข้อมูลของแต่ละหัวข้อ
                  return (
                    <li key={topic.topic_id}>
                      <h3>{topic.topic_title}</h3>
                      <p>Views: {topic.views}</p>
                      <p>Comments: {topic.comments}</p>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    )}
  </div>
);

};


export default App;
