"use client"
import { useState, useEffect } from 'react';

const getRandomSubset = (array, size) => {
  const shuffled = array.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, size);
};

export default function MainpageIcon() {
  const [data, setData] = useState([]);
  const [subset, setSubset] = useState([]);

  useEffect(() => {
    // Load data from localStorage
    const storedData = JSON.parse(localStorage.getItem('myData'));
    if (storedData && Array.isArray(storedData) && storedData.length > 0) {
      setData(storedData);
    } else {
      // If no data is found, use default data
      const defaultData = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];
      localStorage.setItem('myData', JSON.stringify(defaultData));
      setData(defaultData);
    }
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      // Generate a new random subset of 3 items
      setSubset(getRandomSubset(data, 3));
    }
  }, [data]);

  return (
    <div>
      <h1>Random Data Viewer</h1>
      <ul>
        {subset.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}