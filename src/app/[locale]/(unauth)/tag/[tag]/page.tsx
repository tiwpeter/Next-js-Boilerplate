import React from 'react';

import AnnouncePage from '../../room/componet/Announce';
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
