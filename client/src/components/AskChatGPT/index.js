import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AskChatGPT = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div>
    <h1>Welcome to ChatGPT Integration Example</h1>
    <div id="chat-container"></div>
    </div>
  );
};

export default AskChatGPT;
