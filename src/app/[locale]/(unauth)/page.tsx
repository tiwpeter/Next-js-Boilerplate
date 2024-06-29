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
        <div className='border border-gray-500 rounded-lg p-4'>
          <h1>home</h1>
        </div>
        <ul>
          <li className='border border-gray-500 rounded-lg p-4'>asdas</li>
          <li className='border border-gray-500 rounded-lg p-4'>asdas</li>
          <li className='border border-gray-500 rounded-lg p-4'>asdas</li>
        </ul>
      </div>
      
    </>
  );
}
