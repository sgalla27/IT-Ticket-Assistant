# IT Ticket Assistant

An AI-powered IT support tool that diagnoses tech issues and returns structured helpdesk tickets with root cause, resolution steps, and priority level.

## Live Demo
[it-ticket-assistant.vercel.app](https://it-ticket-assistant.vercel.app)

## Tech Stack
- Vanilla JS + HTML/CSS (frontend)
- Node.js + Express (backend)
- HuggingFace Inference API
- Vite (build tool)
- Deployed on Vercel + Render

## Features
- Describes any IT issue and get an instant structured diagnosis
- Responses formatted as real helpdesk tickets
- Markdown rendered output for readability

## Run Locally
1. Clone the repo
2. Run `npm install`
3. Create a `.env` file with your HuggingFace token: `HF_TOKEN=your_token_here`
4. Run `node server.js` in one terminal
5. Run `npm run dev` in another terminal
6. Open `http://localhost:5173`
