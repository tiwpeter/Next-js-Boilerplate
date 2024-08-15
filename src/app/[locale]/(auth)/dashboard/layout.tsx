import { useTranslations } from 'next-intl';

import { BaseTemplate } from '@/templates/BaseTemplate';

export default function DashboardLayout(props: { children: React.ReactNode }) {
  const t = useTranslations('DashboardLayout');

  return <BaseTemplate>{props.children}</BaseTemplate>;
}
