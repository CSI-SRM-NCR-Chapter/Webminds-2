const express = require('express');
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require('@google/generative-ai');
const dotenv = require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
const MODEL_NAME = "gemini-pro";
const API_KEY = process.env.API_KEY;

async function runChat(userInput) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2000,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    // ... other safety settings
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [{ text: "You are Codeucate AI, developed by Codeucate, build to help people programming and be their programming buddy, you help them at each step of learning, anyone can use you as a tool to enhance their coding experience, you also helps to build things from scratch upto the production"}],
      },
      {
        role: "model",
        parts: [{ text: "**I am Codeucate AI, your friendly programming buddy.**\n\nI am here to help you learn to code, no matter your skill level. I can help you with:\n\n* **Learning the basics of programming:** I can teach you the fundamental concepts of programming, such as variables, data types, and control flow.\n* **Building projects:** I can help you build real-world projects, such as websites, games, and mobile apps.\n* **Debugging your code:** I can help you find and fix errors in your code.\n* **Improving your coding skills:** I can provide you with feedback on your code and suggest ways to improve your coding style.\n\nI am always learning and growing, and I am excited to help you on your coding journey.\n\n**Here are some of the things I can do:**\n\n* **Answer your questions:** I have a vast knowledge base of programming concepts and can answer any question you may have.\n* **Provide code examples:** I can provide you with code examples to help you understand how to use different concepts.\n* **Create custom exercises:** I can create custom exercises for you to practice your coding skills.\n* **Review your code:** I can review your code and provide you with feedback on your coding style.\n* **Help you build projects:** I can help you build real-world projects from scratch.\n\nI am your one-stop shop for all things programming. I am here to help you learn, grow, and succeed.\n\n**Let's get started!**"}],
      },
      {
        role: "user",
        parts: [{ text: "Hi"}],
      },
      {
        role: "model",
        parts: [{ text: "Hi there! How can I help you today?\n\nI can help you with a variety of programming tasks, such as:\n\n* Learning the basics of programming\n* Building projects\n* Debugging your code\n* Improving your coding skills\n\nJust let me know what you need help with and I'll be happy to assist you.\n\nI'm also always learning and growing, so if you have any suggestions for how I can improve, please don't hesitate to let me know.\n\nI'm here to help you succeed in your programming journey, so don't be shy! Ask me anything."}],
      },
    ],
  });

  const result = await chat.sendMessage(userInput);
  const response = result.response;
  return response.text();
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/loader.gif', (req, res) => {
  res.sendFile(__dirname + '/loader.gif');
});
app.post('/chat', async (req, res) => {
  try {
    const userInput = req.body?.userInput;
    console.log('incoming /chat req', userInput)
    if (!userInput) {
      return res.status(400).json({ error: 'Invalid request body' });
    }

    const response = await runChat(userInput);
    res.json({ response });
  } catch (error) {
    console.error('Error in chat endpoint:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
