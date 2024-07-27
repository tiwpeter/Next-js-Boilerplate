import ProductButton from './slielink'; // แก้ไขชื่อไฟล์ให้ถูกต้อง

export default function Product({ tag, title, price, noButton = false }) {
    return (
        <div style={{ border: '1px solid white', margin: '20px', padding: '20px' }}>
            <h4>{title}</h4>
            <p>{price}</p>
            {
                !noButton && <ProductButton tag={tag} /> // ส่ง `tag` แทน `id`
            }
        </div>
    );
}
