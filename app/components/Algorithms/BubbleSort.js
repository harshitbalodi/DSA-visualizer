'use client'; // Required for state and event handlers

import { useState, useEffect } from 'react';

const BubbleSort = ({ data }) => {
  const [array, setArray] = useState([...data]);

  useEffect(() => {
    const timer = setInterval(() => {
      let newArray = [...array];
      for (let i = 0; i < newArray.length - 1; i++) {
        if (newArray[i] > newArray[i + 1]) {
          [newArray[i], newArray[i + 1]] = [newArray[i + 1], newArray[i]];
          break;
        }
      }
      setArray(newArray);
    }, 500);

    return () => clearInterval(timer);
  }, [array]);

  return (
    <div>
      <h3>Bubble Sort</h3>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {array.map((val, idx) => (
          <div key={idx} style={{ margin: '0 5px', height: val * 10, width: '20px', backgroundColor: 'teal' }} />
        ))}
      </div>
    </div>
  );
};

export default BubbleSort;
