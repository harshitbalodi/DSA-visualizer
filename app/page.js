'use client'; 

import { Button } from 'antd';
import { useState } from 'react';
import Visualizer from './components/Visualizer';

export default function Home() {
  const [showVisualizer, setShowVisualizer] = useState(false);

  const handleStart = () => {
    setShowVisualizer(true);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Data Structure & Algorithm Visualizer</h1>
      {!showVisualizer && <Button type="primary" onClick={handleStart}>Start Visualizing</Button>}
      {showVisualizer && <Visualizer />}
    </div>
  );
}
