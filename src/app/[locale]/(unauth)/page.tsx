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
        {/**
         border เพิ่มเส้นขอบให้กับ div
border-gray-500 กำหนดสีของเส้นขอบเป็นสีเทา (สามารถเปลี่ยนสีตามต้องการ)
rounded-lg ทำให้ขอบของ div มีความโค้งมน
p-4 เพิ่ม padding รอบ ๆ เนื้อหาใน div
         */}
        <ul>
          <li className='border border-gray-500 rounded-lg p-2'>asdas</li>
          <li className='border border-gray-500 rounded-lg p-2'>asdas</li>
          <li className='border border-gray-500 rounded-lg p-2'>asdas</li>
        </ul>
      </div>
      
    </>
  );
}
