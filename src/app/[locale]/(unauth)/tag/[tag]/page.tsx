import React from 'react';

import AnnouncePage from '@/app/[locale]/(unauth)/RoomDetail/componet/DetailAnuo';

import TagIdPage from './TagIdPage';

const TagIdLayout = ({ params }: { params: { tag: string } }) => {
  return (
    <div className="tag-id-layout">
      Layout Link
      <AnnouncePage />
      <TagIdPage params={params} /> {/* ส่ง params ไปยัง TagIdPage */}
    </div>
  );
};

export default TagIdLayout;
