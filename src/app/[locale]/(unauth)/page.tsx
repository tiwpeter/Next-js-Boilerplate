import { getTranslations } from 'next-intl/server';

// Import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import './scoll.css';
<script src='./scoll.js'></script>

// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index() {
  return (
    <>
    
      <div className='bg-red-500' style={{ width: '1080px', height:'185px' }}>
        <div className='border border-gray-500 rounded-lg p-2'>
          <h1>Announce</h1>
        </div>
        <ul>
          <li className='border border-gray-500 rounded-lg p-2'>asdas</li>
          <li className='border border-gray-500 rounded-lg p-2'>asdas</li>
          <li className='border border-gray-500 rounded-lg p-2'>asdas</li>
        </ul>
        {/*เลือกห้อง mt-4 top */}
        <div className='border border-gray-500 rounded-lg p-2 mt-6'>
          <h1>เลือกห้อง</h1>
        </div>
        <div>
        <div className="relative overflow-x-auto flex" style={{ width: '1080px', height: '120px' }}>
    {/* เนื้อหาของคุณที่ต้องการให้เกินพอร์ตวิว */}
    <div className='flex-shrink-0 bg-red-500 rounded-lg p-2 mb-2 mr-2' style={{ width: '500px', height: '99px', border: '2px solid black', zIndex: '1' }}>ssw</div>
    <div className='flex-shrink-0 bg-red-500 rounded-lg p-2 mb-2 mr-2' style={{ width: '88px', height: '99px', border: '2px solid black', zIndex: '1' }}>ssw</div>
    <div className='flex-shrink-0 bg-red-500 rounded-lg p-2 mb-2 mr-2' style={{ width: '88px', height: '99px', border: '2px solid black', zIndex: '1' }}>ssw</div>

    {/* ปุ่มเลื่อนไปทางขวา */}
    <div className="absolute inset-y-0 right-0 flex items-center justify-center bg-white shadow-md" style={{ zIndex: '2', width: '300px' }}>
    <div className="flex items-center gap-4">
        <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </button>

        <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-6 w-6 mr-2 stroke-current">
                <path fill="none" d="M7 16H3m26 0H15M29 6h-4m-8 0H3m26 20h-4M7 16a4 4 0 1 0 8 0 4 4 0 0 0-8 0zM17 6a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 20a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 0H3"></path>
            </svg>
            ตัวกรอง
        </button>
    </div>
</div>
</div>
  
        </div>

        {/*Highlight */}
        <div className="slide-contianer swiper">
          <div className="slide-content">
            <div className="card-wrapper swiper-wrapper">
              <div className="card swiper-slide">
              <div className="img-content">
                <span className='ovelay'></span>

                <div className="card-image">
                  <img src="https://ptcdn.info/home_highlight/2024-06/665e86cecaac0a8d7a784b57_ftj2m89oih_400.png" alt="" className="card-img" />
                </div>
              </div>

              <div className="card-content">
                <h2 className='name'>Dep</h2>
                <p className='des'>sadasdwsfww</p>
                <button className="button">View More</button>
              </div>

              </div>
            </div>
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-pagination"></div>
        </div>

        {/*Highlight */}




        {/*Pantip Realtime */}
        <div className='border border-gray-500 rounded-lg p-2 mt-6'>
          <h1>Pantip Realtime</h1>
        </div>

        <div className='flex bg-red-500 h-[285.7px] w-[1080px] border border-black'>
          <div className='bg-red-500 rounded-lg p-2 border border-black' style={{ width: '539px', height:'99px' }}>ssw</div>
          <div className='bg-red-500 rounded-lg p-2 border border-black' style={{ width: '539px', height:'99px' }}>ssw</div>
        </div>

        {/*Pantip Pick */}
        <div className='border border-gray-500 rounded-lg p-2 mt-6'>
          <h1>Pantip Pick </h1>
       </div>

       <div className='flex justify-between'>
      <div className='flex flex-col'>
        <div className='border border-black'>l</div>
        <div className='border border-black'>l</div>
      </div>
      <div className='border border-black'>r</div>
    </div>


      </div>
     
    </>
  );
}
