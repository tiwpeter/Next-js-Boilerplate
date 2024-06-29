"use client"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSuggestedTopic } from './redux/actions.tsx';

const ExampleComponent = () => {
  const dispatch = useDispatch();
  const suggestedTopic = useSelector(state => state.suggestedTopic);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'POST',
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:127.0) Gecko/20100101 Firefox/127.0',
            Accept: 'application/json, text/plain, */*',
            'Accept-Language': 'th,en-US;q=0.7,en;q=0.3',
            'Accept-Encoding': 'gzip, deflate, br, zstd',
            'Content-Type': 'application/x-www-form-urlencoded',
            ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
            Origin: 'https://pantip.com',
            Connection: 'keep-alive',
            Referer: 'https://pantip.com/',
            Cookie: 'pantip_visitc=sfglicghiyjIFpxRyx61; rlr=35740193; ka_iid=3gUUQSNbZBFacGApvzGnhk; freq.5f73e63e47e7040e00000000=1; ka_sid=JGauAzhC3YmyEh6aVsqVQ2; _ga_ZMC2WGXL4Z=GS1.1.1719601234.1.1.1719601249.45.0.0; _ga=GA1.2.806725891.1719601235; iUUID=45e0af85f00a25b38689d326f75b5f93; innity.dmp.254.sess=2.1719601234903.1719601234903.1719601249748; innity.dmp.254.sess.id=244544192.254.1719601234903; innity.dmp.cks.innity=1; _gid=GA1.2.1541569432.1719601235; _dc_gtm_UA-10478864-2=1',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            TE: 'trailers'
          },
          body: new URLSearchParams({type: 'room', limit: '1'})
        };

        const response = await fetch('https://pantip.com/api/forum-service/home/get_suggest_topic_popular', options);
        const data = await response.json();
        
        // dispatch action เพื่อเก็บข้อมูลลงใน Redux store
        dispatch(setSuggestedTopic(data));
      } catch (error) {
        console.error('Error fetching suggested topic:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      {suggestedTopic && (
        <div>
          <h2>{suggestedTopic.title}</h2>
          <p>{suggestedTopic.views} views</p>
          {/* เพิ่มการแสดงข้อมูลอื่นๆ ตามที่ได้รับมาจาก API */}
        </div>
      )}
    </div>
  );
};

export default ExampleComponent;
