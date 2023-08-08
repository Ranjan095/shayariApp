/** @format */

let express = require("express");
const { Configuration, OpenAIApi } = require("openai");
const readlineSync = require("readline-sync");
require("dotenv").config();
let shayariRoute = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

shayariRoute.post("/", async (req, res) => {
  let { topic } = req.body;
  try {
    ChatGptPrompt(topic, res);
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

async function ChatGptPrompt(message, res) {
  try {
    const propmt = `Create Shayari on the topic of ${message} within in 100 words in Hindi lagauge`;
    const defaultData = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: propmt,
      max_tokens: 500,
    });
    console.log(defaultData.data.choices[0].text);
    res.status(200).send(defaultData.data.choices[0].text);
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
}
module.exports = { shayariRoute };
