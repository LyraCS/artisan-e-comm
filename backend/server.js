const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
const cors = require("cors"); // Add this line

dotenv.config();

const app = express();
const port = 5001;

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        model: "gpt-3.5-turbo", // or "gpt-3.5-turbo" depending on the model you choose
        prompt: message,
        max_tokens: 150,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const botReply = response.data.choices[0].text.trim();
    res.json({ reply: botReply });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ reply: "Sorry, there was an error processing your request." });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
