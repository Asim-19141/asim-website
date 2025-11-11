function sendMessage() {
  const input = document.getElementById('userInput');
  const message = input.value.trim();
  if (!message) return;

  const messages = document.getElementById('messages');
  const userMsg = document.createElement('div');
  userMsg.textContent = '🧑 You: ' + message;
  messages.appendChild(userMsg);

  // Simple AI reply (you'll upgrade this later)
  const botMsg = document.createElement('div');
  botMsg.textContent = '🤖 Alfred: ' + getReply(message);
  messages.appendChild(botMsg);

  input.value = '';
  messages.scrollTop = messages.scrollHeight;
}

function getReply(message) {
  const msg = message.toLowerCase();
  if (msg.includes('hello')) return 'Hi Asim! How can I help?';
  if (msg.includes('your name')) return 'I am Alfred, your AI assistant!';
  if (msg.includes('time')) return 'The current time is ' + new Date().toLocaleTimeString();
  return 'I’m still learning, Asim. Tell me more!';
}
