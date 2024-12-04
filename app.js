console.log("ravindu")


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    
    if (username === 'ravi' && password === '2004') {
      
      document.body.innerHTML = `
        <div class="success-container">
          <h1>Welcome, Ravindu!</h1>
          <p>You are successfully logged in. Enjoy exploring our menu!</p>
          <button onclick="window.location.href = 'index.html'">Go to Menu</button>
        </div>
      `;
    } else {
      alert('Invalid username or password!');
    }
  });
  