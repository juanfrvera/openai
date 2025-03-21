import OpenAI from "openai";
import { readCommand } from "./src/command-line.js";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const command = await readCommand();

const completion = await client.chat.completions.create({
    model: "gpt-4o",
    messages: [
        {
            role: "developer",
            content: `The user can input different commands for the app, the app can create accounts, update their balance,
             show their balance, and delete their account, I want you to return a json object where you describe what the user wants`,
        },
        {
            role: "user",
            content: command,
        },
    ],
});

 console.log(completion.choices[0].message);