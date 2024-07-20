import { getTranslations } from 'next-intl/server';
import ClientComponent from '../page';

export async function generateMetadata(props) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function ServerComponent(props) {
  return (
    <>
      <ClientComponent />
    </>
  );
}
