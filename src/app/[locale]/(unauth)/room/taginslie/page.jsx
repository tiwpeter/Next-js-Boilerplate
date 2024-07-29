"use client"
import React, { useEffect, useState } from 'react';

async function getProducts() {
  try {
      const res = await fetch('http://localhost:5000/api/data');
      if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      console.log("Raw API response:", data); // ดูข้อมูลที่ได้รับจาก API
      return data; // คืนค่าข้อมูลตรงจาก API
  } catch (error) {
      console.error("Error fetching products:", error);
      return []; // คืนค่าหมายถึงไม่มีข้อมูลในกรณีที่เกิดข้อผิดพลาด
  }
}

export default function Products() {
  async function getProducts() {
    try {
        const res = await fetch('http://localhost:5000/api/data');
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log("Raw API response:", data); // ดูข้อมูลดิบที่ได้รับจาก API
        return data.products;
    } catch (error) {
        console.error("Error fetching products:", error);
        return []; // คืนค่าหมายถึงไม่มีข้อมูลในกรณีที่เกิดข้อผิดพลาด
    }
}

    //console.log({products})
    return (
        <>
            <h1>ProductsID</h1>
            
        </>
    );
}
