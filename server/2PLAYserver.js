const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require('axios');
const port = 3000;
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(cors())

// Endpoint to handle chat requests
app.post('/api/chat', async (req, res) => {
  const inputText = req.body.inputText;
  const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
    prompt: inputText,
    max_tokens: 100,
    n: 1,
    stop: ["\n"]
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    }
  });
  const outputText = response.data.choices[0].text.trim();
  res.json({ outputText: outputText });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});