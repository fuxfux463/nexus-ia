export default async function handler(req, res) {
  const { message } = req.body;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${process.env.GEMINI_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: message }] }]
      })
    }
  );

  const data = await response.json();
  const reply =
    data.candidates?.[0]?.content?.parts?.[0]?.text || "Erro";

  res.status(200).json({ reply });
}
