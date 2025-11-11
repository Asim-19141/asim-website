function sendMessage() {
  const input = document.getElementById('userInput');
  const msg = input.value.trim();
  if (!msg) return;

  addMessage('you', msg);
  input.value = '';

  const reply = getReply(msg);
  addMessage('alfred', reply);
}

function addMessage(who, text) {
  const chat = document.getElementById('messages');
  const el = document.createElement('div');
  el.className = who === 'alfred' ? 'alfred-msg' : 'you-msg';
  el.textContent = (who === 'alfred' ? '🤖 Alfred: ' : '🧑 You: ') + text;
  chat.appendChild(el);
  chat.scrollTop = chat.scrollHeight;
}

function getReply(msg) {
  const m = msg.toLowerCase();
  if (m.includes('hello') || m.includes('hi')) return 'Hello Asim! I\'m Alfred, your assistant.';
  if (m.includes('how are you')) return 'I\'m always great — no bugs yet!';
  if (m.includes('time')) return 'It\'s ' + new Date().toLocaleTimeString();
  if (m.includes('date')) return 'Today is ' + new Date().toLocaleDateString();
  if (m.includes('who are you')) return 'I am Alfred, your AI assistant.';
  if (m.includes('help')) return 'You can ask me about time, date, or say hello. You can also teach me using: learn: question => answer';

  if (m.includes('learn:')) {
    const parts = msg.split('=>').map(p=>p.trim());
    if (parts.length === 2) {
      window.memory = window.memory || {};
      window.memory[parts[0].toLowerCase()] = parts[1];
      return 'I learned something new!';
    }
  }

  if (window.memory && window.memory[m]) return window.memory[m];

  return 'I don\'t know that yet, but you can teach me!';
}

