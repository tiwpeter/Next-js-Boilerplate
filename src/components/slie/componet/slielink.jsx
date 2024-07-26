"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ProductButton({ id }) {
    return (
        <Link href={`/products/${id}`} style={{ textDecoration: 'none' }}>
            <a style={{ cursor: 'pointer', padding: '10px 20px', border: '1px solid black', borderRadius: '5px', backgroundColor: 'black', color: 'white', textAlign: 'center' }}>
                View Product
            </a>
        </Link>
    );
}
