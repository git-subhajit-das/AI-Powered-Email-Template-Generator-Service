import dotenv from 'dotenv/config.js'

async function createEmail(purpose, recipientName, tone) {
  console.log(purpose)
  const response = await fetch(
    "https://api.openai.com/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "Write a short, polite and customer-friendly email. Include a greeting and closing."
          },
          {
            role: "user",
            content: `Write an email to ${recipientName}. Purpose: ${purpose}. Tone: ${tone}.`
          }
        ],
        temperature: 0.7
      })
    }
  );

  if (!response.ok) {
    throw new Error("AI API request failed");
  }

  const data = await response.json();

  return data.choices[0].message.content.trim();
}

export default createEmail;
