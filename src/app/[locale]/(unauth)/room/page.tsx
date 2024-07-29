import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Announce from './componet/Announce';
import KatooPage from './componet/katoo';
import PantipPickTag from '@/components/pantipink/page';
import Katooreatime from './componet/katooreatime/page';

// use redux

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'About',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function About() {
  const t = useTranslations('About');

  return (
    <>
     <div>
          Layout Link
          <Announce/>
          <KatooPage/>
          <Katooreatime/>
     </div>
    </>
  );
}
