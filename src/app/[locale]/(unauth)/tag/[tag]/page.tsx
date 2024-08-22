import React from 'react';

import AnnouncePage from '@/app/[locale]/(unauth)/RoomDetail/componet/DetailAnuo';

import Recommendations from './Recommendations/Recommendations';
import TredPage from './TredPage/TredPage';

const TagIdLayout = ({ params }: { params: { tag: string } }) => {
  return (
    <div className="tag-id-layout">
      Layout Link
      <AnnouncePage />
      {/* <TagIdPage params={params} />  ส่ง params ไปยัง TagIdPage */}
      <Recommendations params={params} />
      <TredPage params={params} />
    </div>
  );
};

export default TagIdLayout;
