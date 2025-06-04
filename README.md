# Greeting Generator

**Greeting Generator** is a web application that helps you craft personalized toasts and speeches for various occasions — weddings, birthdays, graduations, farewells, anniversaries, and more — with the help of AI.

---

## Features

- Occasion-based input forms with custom fields
- AI-generated speeches powered by Meta Llama 3.1 (via Hugging Face)
- Real-time input validation
- Animated brand logo spinner while generating
- Easy copy-to-clipboard function
- Responsive UI with Tailwind CSS and React

---

## Tech Stack

| Frontend | Backend | AI / Infra |
| -------- | ------- | ---------- |
| React + Vite | FastAPI | Hugging Face API (Llama 3.1) |
| Tailwind CSS | Python | Lottie / Animated Logo |
| Axios | Pydantic | |

---

## Installation

### 1. Clone the repository
git clone https://github.com/your-username/greeting-generator.git
cd greeting-generator

## Dependencies installation

cd frontend
npm install
npm run dev

cd ../backend
pip install -r requirements.txt
uvicorn main:app --reload


## How It Works

User selects an occasion (e.g., Wedding, Toast, Farewell)
Fills out a simple form with details
On submit, the app sends the data to the backend
Backend builds a prompt and sends it to Hugging Face's Llama 3.1 model
AI returns a personalized speech, which is shown to the user

<img width="1290" alt="Screenshot 2025-06-04 at 15 45 33" src="https://github.com/user-attachments/assets/6634d63a-6ba7-45aa-b9ac-fe4e4245a3e2" />

## Environment Variables

To run the backend, you’ll need a Hugging Face token for gated models

## License

This project is licensed under the MIT License.
