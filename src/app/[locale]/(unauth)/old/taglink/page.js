"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';

const TagsPage = () => {
  return (
    <div>
        <Link href="/tag/tag1">
            Tag 1
        </Link>
        <Link href="/tag/tag2">
           Tag 2
        </Link>
        {/* เพิ่มเพจอื่นๆ ตามต้องการ */}
    </div>
);
}

export default TagsPage;
