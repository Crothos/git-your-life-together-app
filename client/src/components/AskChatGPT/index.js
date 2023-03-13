import React, { useState } from 'react';
//import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar';

const AskChatGPT = () => {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      axios
        .post("/chat", { prompt })
        .then((res) => {
          setResponse(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };
  
    return (
      <div>
        <Navbar />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{response}</p>
      </div>
    );

//   //const location = useLocation();
//   //const navigate = useNavigate();
//   return (
//     <div>
//     <h1>Need help coming up with steps? Ask ChatGPT!</h1>
//     <div id="chat-container"></div>
//     </div>
//   );
};

export default AskChatGPT;