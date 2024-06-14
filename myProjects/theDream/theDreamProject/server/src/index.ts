import dotenv from "dotenv";
dotenv.config();

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI || "Not Found!",
});

import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Image Generation API...");
});

function sleep(time, callback) {
  const stop = new Date().getTime();
  while (new Date().getTime() < stop + time) {
    console.log("Intentional delay...\n");
  }
  callback();
}

app.post("/test", (req, res) => {
  try {
    const prompt = req.body.prompt;
    const imageUrl =
      "https://cdna.artstation.com/p/assets/images/images/076/708/342/4k/luis-omar-jinxrender-0010.jpg?1717601087";

    console.log("\n...Incoming Request: ", prompt);

    // mimic API response: add delay
    sleep(5000, function () {
      res.send({ imageUrl });
    });
  } catch (error) {
    if (error.response) {
      res.send(error.response.status);
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      res.send(error.message);
      console.log(error.message);
    }
  }
});

app.post("/image", async (req, res) => {
  try {
    const prompt = req.body.prompt;

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt ?? "a starboy",
      n: 1,
      size: "1024x1024",
    });
    const imageUrl = response.data[0].url;
    console.log(imageUrl);
    res.send({ imageUrl });
  } catch (error) {
    if (error.response) {
      res.send(error.response.status);
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      res.send(error.message);
      console.log(error.message);
    }
  }
});

app.listen(process.env.PORT, () => {
  console.log(`\n\nServer running on http://localhost:${process.env.PORT}/\n`);
});

// .env
// PORT, OPENAI

// npm run build ; node .
