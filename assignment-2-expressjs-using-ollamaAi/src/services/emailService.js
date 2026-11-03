import dotenv from 'dotenv/config.js'



async function generateEmail({
    purpose,
    recipient_name,
    tone
}) {
    const prompt = `

        Write a short email.

        Purpose: ${purpose}
        Recipient: ${recipient_name}
        Tone: ${tone}

        Include subject, greeting, body and closing.
        Requirements:
            1. Include an appropriate subject.
            2. Address the recipient by their name(Recipient).
            3. Write a short email body.
            4. Use the requested tone.
            5. Include a suitable closing.
            6. Return only the email. Do not add explanations.
`;

    const response = await fetch(
        `${process.env.OLLAMA_URL}/api/generate`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: process.env.OLLAMA_MODEL,
                prompt: prompt,
                stream: false,
                options: {
                    temperature: 0.7
                }
            })
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.error || "Ollama API request failed"
        );
    }

    
    if (!data) {
        throw new Error("Gemini returned an empty email");
      }

    return data.response.trim();
}

export default generateEmail;





















