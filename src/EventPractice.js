import React, { useState } from 'react';

const EventPractice = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onClick = () => {
    alert(username + ': ' + message);
    setUsername(''); //username state 초기화
    setMessage(''); //message state 초기화
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === 'Space') {
      onClick();
    }
  };

  return (
    <div>
      <h1>Event Practice</h1>
    </div>
  );
};

export default EventPractice;
