"use client";
import Link from "next/link";

export default function ProductButton({ tag }) {
    return (
        <Link href={`/room/taginslie/${tag}`} style={{ 
            display: 'inline-block', 
            padding: '10px 20px', 
            border: '1px solid black', 
            borderRadius: '5px', 
            backgroundColor: 'black', 
            color: 'white', 
            textAlign: 'center', 
            textDecoration: 'none'
        }}>
            View Product
        </Link>
    );
}