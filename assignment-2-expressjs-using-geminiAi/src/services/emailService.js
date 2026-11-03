import dotenv from 'dotenv/config.js'


async function generateEmail(purpose, recipient_name, tone) {

    // 1. Create prompt
    const prompt = `
        Write a short email.

        Purpose: ${purpose}
        Recipient: ${recipient_name}
        Tone: ${tone}

        Include subject, greeting, body and closing.
    `;

    // 2. Send request to Gemini
    const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/interactions",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-goog-api-key": process.env.GEMINI_API_KEY
            },
            body: JSON.stringify({
                model: process.env.GEMINI_MODEL || "gemini-3.8-flash",
                input: prompt
            })
        }
    );

    // 3. Get response data
    const data = await response.json();

    // 4. Check error
    if (!response.ok) {
        throw new Error(data.error.message);
    }

    // 5. Get generated email
    const email = data.steps[0].content[0].text;


    if (!email) {
        throw new Error("Gemini returned an empty email");
      }


    // 6. Return email
    return email.trim();
}
export default generateEmail;
