import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { InferenceClient } from '@huggingface/inference';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new InferenceClient(process.env.HF_TOKEN);

app.post('/ask', async (req, res) => {
  const { userInput } = req.body;

  try {
    const chatCompletion = await client.chatCompletion({
      model: 'MiniMaxAI/MiniMax-M2.7:novita',
      messages: [
        { role: 'system', content: 'You are an experienced IT support technician. When given a tech issue, always respond in this exact format: **🎫 Ticket Summary:** One sentence describing the issue. **🔍 Root Cause:** What is most likely causing this problem. **🛠️ Resolution Steps:** Numbered step-by-step fix. **🛡️ Prevention:** How to stop this happening again. **⚠️ Priority:** Rate as Low, Medium, High, or Critical and explain why. Keep responses clear and beginner-friendly.'},
        { role: 'user', content: userInput }
      ],
    });

    const result = chatCompletion.choices[0].message.content;
    res.json({ result });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));