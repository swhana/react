import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('기본문구');
  const onClickEnter = () => setMessage('안녕하세요');
  const onClickLeave = () => setMessage('안녕히가세요');

  const [color, setColor] = useState('black');

  return (
    <div>
      <h1 style={{ color }}>{message}</h1>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>

      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        빨
      </button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        초
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        파
      </button>
    </div>
  );
};

export default Say;
