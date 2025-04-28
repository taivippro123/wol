import React from 'react';
import './App.css';
function App() {
  const handleWakePC = async () => {
    // Gửi yêu cầu tới backend để gửi tín hiệu WoL
    const response = await fetch('https://wol-r5y9.onrender.com/wake-pc');
    if (response.ok) {
      alert('PC is waking up!');
    } else {
      alert('Failed to wake up PC');
    }
  };

  return (
    <div className='container'>
      <h1 className='title'>Wake PC from Remote</h1>
      <button className='cta-btn' onClick={handleWakePC}>Wake Up PC</button>
    </div>
  );
}

export default App;
