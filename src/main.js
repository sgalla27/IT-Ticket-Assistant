import { marked } from 'marked';
import './style.css';
document.getElementById('submit').addEventListener('click', async () => {
  const input = document.getElementById('userInput').value;
  const resultDiv = document.getElementById('result');

  resultDiv.textContent = 'Thinking...';

  const res = await fetch('https://it-ticket-assistant.onrender.com/ask', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userInput: input})
  });

  const data = await res.json();
  resultDiv.innerHTML = marked(data.result);
});