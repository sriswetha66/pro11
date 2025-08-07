const messages = [
  "✨ Today will be full of good energy and unexpected smiles.",
  "🌧️ A cozy day — perfect for warm drinks and deep thoughts.",
  "🔥 You're on fire today — go crush your goals!",
  "🌈 A beautiful surprise is waiting for you.",
  "😌 Slow down. It's okay to take a break today.",
  "🚀 Big things are coming your way — stay ready.",
  "💡 You’ll have a brilliant idea that sparks something new.",
  "🌻 Small joys will brighten your day today.",
  "🎯 Today is the day to start something you've been putting off.",
  "🌀 It might feel messy, but clarity is coming."
];

// Pick a random message
const randomIndex = Math.floor(Math.random() * messages.length);
const randomMessage = messages[randomIndex];

// Replace the text content of the .prediction element
document.querySelector('.prediction').textContent = randomMessage;
