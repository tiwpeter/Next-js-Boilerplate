import { getTranslations } from 'next-intl/server';

import { Sponsors } from '@/components/Sponsors';

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
        <div className="relative overflow-x-auto flex" style={{ width: '1200px', height: '120px' }}>
    {/* เนื้อหาของคุณที่ต้องการให้เกินพอร์ตวิว */}
    <div className='flex-shrink-0 bg-red-500 rounded-lg p-2 mb-2 mr-2' style={{ width: '500px', height: '99px', border: '2px solid black', zIndex: '1' }}>ssw</div>
    <div className='flex-shrink-0 bg-red-500 rounded-lg p-2 mb-2 mr-2' style={{ width: '88px', height: '99px', border: '2px solid black', zIndex: '1' }}>ssw</div>
    <div className='flex-shrink-0 bg-red-500 rounded-lg p-2 mb-2 mr-2' style={{ width: '88px', height: '99px', border: '2px solid black', zIndex: '1' }}>ssw</div>
    <div className='flex-shrink-0 bg-red-500 rounded-lg p-2 mb-2 mr-2' style={{ width: '88px', height: '99px', border: '2px solid black', zIndex: '1' }}>ssw</div>
    <div className='flex-shrink-0 bg-red-500 rounded-lg p-2 mb-2 mr-2' style={{ width: '88px', height: '99px', border: '2px solid black', zIndex: '1' }}>ssw</div>
    <div className='flex-shrink-0 bg-red-500 rounded-lg p-2 mb-2 mr-2' style={{ width: '88px', height: '99px', border: '2px solid black', zIndex: '1' }}>ssw</div>
    <div className='flex-shrink-0 bg-red-500 rounded-lg p-2 mb-2 mr-2' style={{ width: '88px', height: '99px', border: '2px solid black', zIndex: '1' }}>ssw</div>
    <div className='flex-shrink-0 bg-red-500 rounded-lg p-2 mb-2 mr-2' style={{ width: '88px', height: '99px', border: '2px solid black', zIndex: '1' }}>ssw</div>
    <div className='flex-shrink-0 bg-red-500 rounded-lg p-2 mb-2 mr-2' style={{ width: '88px', height: '99px', border: '2px solid black', zIndex: '1' }}>ssw</div>
    <div className='flex-shrink-0 bg-red-500 rounded-lg p-2 mb-2 mr-2' style={{ width: '88px', height: '99px', border: '2px solid black', zIndex: '1' }}>ssw</div>
    <div className='flex-shrink-0 bg-red-500 rounded-lg p-2 mb-2 mr-2' style={{ width: '88px', height: '99px', border: '2px solid black', zIndex: '1' }}>ssw</div>
    <div className='flex-shrink-0 bg-red-500 rounded-lg p-2 mb-2 mr-2' style={{ width: '88px', height: '99px', border: '2px solid black', zIndex: '1' }}>ssw</div>
    <div className='flex-shrink-0 bg-red-500 rounded-lg p-2 mb-2 mr-2' style={{ width: '88px', height: '99px', border: '2px solid black', zIndex: '1' }}>ssw</div>
    <div className='flex-shrink-0 bg-red-500 rounded-lg p-2 mb-2 mr-2' style={{ width: '88px', height: '99px', border: '2px solid black', zIndex: '1' }}>ssw</div>
    <div className='flex-shrink-0 bg-red-500 rounded-lg p-2 mb-2 mr-2' style={{ width: '88px', height: '99px', border: '2px solid black', zIndex: '1' }}>ssw</div>
    <div className='flex-shrink-0 bg-red-500 rounded-lg p-2 mb-2 mr-2' style={{ width: '88px', height: '99px', border: '2px solid black', zIndex: '1' }}>ssw</div>

    {/* ปุ่มเลื่อนไปทางขวา */}
    <div className="absolute inset-y-0 right-0 flex items-center justify-center bg-white shadow-md" style={{ zIndex: '2' }}>
        <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </button>
    </div>
</div>
  
        </div>
        {/*Highlight */}
        <div className='border border-gray-500 rounded-lg p-2 mt-6'>
          <h1>Highlight</h1>
        </div>

        <div  className='bg-red-500 h-[285.7px] w-[1080px]">'>

        </div>

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
