import dotenv from 'dotenv';
dotenv.config()

import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI || 'Not Found!',
})

import express from 'express';
import cors from 'cors';

const app = express()
app.use(cors())
app.use(express.json())

app.post('/image', async (req, res) => {
    const prompt = req.body.prompt;

    const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: prompt ?? "a white siamese cat",
        n: 1,
        size: "1024x1024",
      });
    const imageUrl = response.data[0].url;
    console.log(imageUrl)
    res.send({imageUrl})
})

app.listen(process.env.PORT, () => {
  console.log(`\n\nServer running on http://localhost:${process.env.PORT}/image/\n`)
})

// .env
// PORT, OPENAI
