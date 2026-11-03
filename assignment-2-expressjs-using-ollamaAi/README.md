# Assignment 2 - AI Email Template Generator (Express.js)

This project uses Express.js and Ollama AI to generate a short email.
An Express.js microservice that creates short, customer-friendly email templates using an AI model. It logs the AI-call duration and returns the elapsed time in milliseconds.

## Requirements

- Node.js 18 or newer (native `fetch` is used)
- Ollama application
- Ollama model

## AI Integration Using Ollama

This project uses Ollama to run an open-source AI model locally on the developer's computer.

## Model: `llama3.2:3b`

## Local API: `http://localhost:11434`

Unlike a cloud-based AI API, this application does not require an external API key or paid API credits.

## Ollama Setup:
1. Install Ollama.
2. Download the model using `ollama pull llama3.2:3b`.
3. Configure the local Ollama URL and model name in the `.env` file.
4. Start the Ollama service.
5. Start the Node.js application.
6. Send requests using Postman.

The application sends prompts to Ollama's local REST API and processes the generated responses.

## Node Application Setup

1. Install Node.js 18 or newer.
2. Open this folder in VS Code.
3. Run `npm install`.
4. Create `.env` file.
5. Add your Gemini API key and Gemini model in `.env`.
6. Run `npm start`.

## API

POST `http://localhost:4000/api/generate-email`

Header: `Content-Type: application/json`

Request body:

```json
{
  "purpose": "Thank the customer for purchasing a product",
  "recipient_name": "Rahul",
  "tone": "Friendly and professional"
}
```

Example response:

```json
{
{
    "success": true,
    "email": "Subject: Thank You for Your Purchase\nDear Rahul,\nThank you for purchasing our product...",
    "responseTimeMs": 1500
}
}
```

The generated email and response time will vary.


## Project structure

```text
assignment-2-email-generator/
├── src/
│   ├── controllers/
│   │   └── emailController.js
│   ├── routes/
│   │   └── emailRoutes.js
│   ├── services/
│       └── emailService.js
│── server.js
├── .env
├── .gitignore
├── package.json
│── package-lock.json
└── README.md
```

## How it works

- `server.js` starts Express and registers middleware and routes.
- `routes/emailRoutes.js` defines the POST endpoint.
- `controllers/emailController.js` checks the inputs, calls the service and calculates response time.
- `services/emailService.js` sends the prompt to OpenAI and returns the generated email.
- `.env` stores the API key. Never upload `.env` to GitHub.


## Brief Explanation of AI Prompt Design

I designed the AI prompt to generate short and professional email templates based on three inputs provided by the user:

1. Purpose: Defines why the email needs to be written.
2. Recipient Name: Personalizes the email by addressing the recipient by name.
3. Tone: Controls the writing style, such as professional, friendly, or formal.

The prompt instructs the AI model to generate an email containing an appropriate subject, greeting, body, and closing. It also specifies that the email should be short, clear, and relevant to the given purpose.

This prompt design helps generate personalized email templates according to the user's requirements.