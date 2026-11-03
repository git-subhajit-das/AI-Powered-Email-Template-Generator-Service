# Assignment 2 - AI Email Template Generator (Express.js)

This project uses Express.js and OpenAI to generate a short email.

An Express.js microservice that creates short, customer-friendly email templates using an AI model. It logs the AI-call duration and returns the elapsed time in milliseconds.


## Requirements

- Node.js 18 or newer (native `fetch` is used)
- An OpenAI API key and API Model

## Setup

1. Install Node.js 18 or newer.
2. Open this folder in VS Code.
3. Run `npm install`.
4. Create `.env` file.
5. Add your OpenAI API key and OpenAI Model in `.env`.
6. Run `npm start`.

## API

POST `http://localhost:4000/api/generate-email`

Header: `Content-Type: application/json`

Request body:

```json
{
  "purpose": "Thank the customer for purchasing a product",
  "recipient_name": "Rahul",
  "tone": "friendly"
}
```

Example response:

```json
{
  "success": true,
  "email": "Hi Rahul, thank you for your purchase...",
  "response_time_ms": 1200
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




## Prompt design

The system prompt defines the AI as a concise, customer-friendly email writer. It asks for a greeting and sign-off, prohibits invented facts, and requests clear, short wording. The user prompt supplies the purpose, recipient name, and selected tone. Keeping the instructions separate from user inputs makes the prompt easier to maintain.

## Response-time logging

The controller records `Date.now()` immediately before calling the AI service and subtracts it after the service returns. The resulting `response_time_ms` measures the elapsed time for the AI service call, including network time. Errors are logged on the server and a generic error is returned to the client.
