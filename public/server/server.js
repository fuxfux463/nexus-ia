// server/server.js
import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static("public"));

app.post("/api/chat", async (req,res)=>{
const {message,history} = req.body;

const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${process.env.GEMINI_KEY}`,
{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
contents:[
...history.map(h=>({parts:[{text:h.user},{text:h.bot}]})),
{parts:[{text:message}]}
]
})
});

const data = await response.json();
const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Erro";

res.json({reply});
});

app.listen(process.env.PORT || 3000);
