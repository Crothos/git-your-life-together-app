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

export default AskChatGPT;