
import React, { useState } from "react";
import axios from "axios";

function AskChatGPT() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = { prompt };

    try {
      const response = await axios.post("/chat", data);
      setResponse(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          How can we help you?:
          <input
            type="text"
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {response && <p>Response: {response}</p>}
    </div>
  );
}

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
    <div className="container-fluid">
      <Navbar />
      <div className="container mt-3" style={{ backgroundColor: 'white', height: '45rem' }}>
        <div className="row p-5 text-center">
          <h5 className="col-12 mb-3" id="helpChatGPT">Feeling stuck? Ask Chat GPT for help</h5>

          <form onSubmit={handleSubmit}>
            <textarea className="form-control col-12 mb-3"
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button type="submit" className="col-12 btn btn-main">
              Ask
            </button>

          </form>
          <br />
          <p>{response}</p>
        </div>
      </div>

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