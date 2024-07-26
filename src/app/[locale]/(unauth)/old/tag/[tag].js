// pages/tag/[tag].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function TagPage() {
    const router = useRouter();
    const { tag } = router.query;
    const [data, setData] = useState(null);

    useEffect(() => {
        if (tag) {
            // ทำการ fetch ข้อมูลจาก API โดยใช้ tag จาก query parameter
            fetch(``)
                .then(response => response.json())
                .then(data => setData(data))
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [tag]);

    if (!data) {
        return <p>Loading...</p>;
    }

    if (data.error) {
        return <p>Error: {data.error}</p>;
    }

    return (
        <div>
            <h2>{data.tag}</h2>
            <ul>
                {data.items.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default TagPage;
