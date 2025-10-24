const form = document.getElementById('authForm');
const responseBox = document.getElementById('responseBox');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    responseBox.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    responseBox.textContent = 'Error: ' + err.message;
  }
});
