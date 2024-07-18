import React from 'react';
// Import your CSS file here import './Pagepantip.css'; 
import './font.css'; 

const Pagepantip = () => {
  // Define your images array
  const data = [
    { id: 1, url: 'https://ptcdn.info/doodle/2024/66668549caac0a7c9b16ead7_8t0jwfcpbp.png', name: '[Pantip Point] น้องเพี้ยนชวนแชร์ภาพไอเทมรับหน้าฝน ที่ต้องพกติดกระเป๋า! 🌧️💧☂️' },
    { id: 2, url: 'https://ptcdn.info/home_highlight/2022-10/633b8e4a00d01f12500f33e6_hvzb60o1p0_400.jpg', name: 'ต้อนรับฟุตบอลยูโร 2024 ด้วย “เกมบอล”' },
    { id: 3, url: 'https://ptcdn.info/home_highlight/2024-07/668646c5caac0af78631fad8_1osl902uzv_400.png', name: '🎧 PANTIP PODCAST 🎧 3 อันดับกระทู้ฮิตบนพันทิปประจำวัน 📊' },
    { id: 4, url: 'https://f.ptcdn.info/770/084/000/lyekkvfciohloZSbA1b-s.jpg', name: 'ชวนโชว์พื้นที่นั่งเล่นในบ้าน ลุ้นรับ pantip point 50 คะแนน 🌿🪑' },
    { id: 5, url: 'https://example.com/image5.jpg', name: 'Image 5' },
    { id: 6, url: 'https://example.com/image6.jpg', name: 'Image 6' },
    { id: 7, url: 'https://example.com/image7.jpg', name: 'Image 7' },
    { id: 8, url: 'https://example.com/image8.jpg', name: 'Image 8' },
    { id: 9, url: 'https://example.com/image9.jpg', name: 'Image 9' },
  ];

  return (
    <section
  className="dw container mx-auto"
  style={{
    height: '430px',
    background: 'aliceblue',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width:'1078px'
  }}
>
      <ul className="flex flex-wrap" style={{ width: '1080px' }}>
        {data.map(item => (
          <li key={item.id} className="boxslie border p-2 flex items-start" style={{ width: '50%' }}>
            <img src={item.url} alt="Placeholder Image" className="mr-2 w-12 h-12" style={{ width: '86px', height: '64px' }} />

            <div className="flex flex-col justify-between h-full" style={{width: "428px"}}>
                
              <div className="mb-4"> {/* Adjust the margin-bottom as needed */}
                <h2>{item.name}</h2>
              </div>

              <div className="flex justify-between items-center">
  <div className="flex">
    <h5 className="text-center">สมาชิกหมายเลข 7793648</h5>
    <h5 className="text-center" style={{ marginLeft: '6px' }}>
      21 ชั่วโมง
    </h5>
  </div>

  <div className="pt-list-item__stats">
    <span style={{ fontSize: '.75rem', marginRight: '16px' }}>
      <i className="">message</i>
      29
    </span>

    <span style={{ fontSize: '.75rem' }}>
      <i className="">add_box</i>
      7
    </span>
  </div>
</div>

            </div>

          </li>
        ))}
      </ul>
    </section>
  );
};

export default Pagepantip;

/*
<section class="dw container mx-auto" style="height: 430px;background: aliceblue;">
            <table class="table-auto w-full border-collapse border border-black">
                <!-- First few rows -->
                <tr>
                    <td class="boxslie border  p-2" style="width: 539px;">
                        <div class="flex ">
                            <img src="https://ptcdn.info/bingsu/upload/202406/jtoud1j6d4pb.png" alt="Placeholder Image" class="mr-2 w-12 h-12" style="width: 86px;height: 64px;">
                            <span>ต้อนรับฟุตบอลยูโร 2024 ด้วย “เกมบอล” ขวัญใจแฟนบอลตลอดการแข่งขัน</span>
                        </div>
                    </td>
                    <td class="boxslie border  p-2">
                        <div class="flex ">
                            <img src="https://f.ptcdn.info/721/084/000/ly7h0s9giFu6J8D3a6E-s.jpg" alt="Placeholder Image" class="mr-2 w-12 h-12" style="width: 86px;height: 64px;">
                            <span>ข้าราชการกระทรวง ยุติธรรมระดับสูง พยายามปล้ำ ข้าราชการหญิง ที่มีลูก2  บนรถไฟนอน ขณะไปสัมนา พังทั้งระบบ-เงินภาษีจ่าย
                                
                            </span>
                        </div>
                    </td>
                </tr>
                <!-- Hidden rows -->

*/