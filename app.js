console.log("ravindu")
function loadindex(){
document.body.innerHTML = `
    <div class="loadindex">
    <div class="background-overlay"></div> <!-- White fade overlay -->
    <div class="main-container">
      <!-- Left: Login Form -->
      <div class="login-container" id="login-container">
        <div class="logo">
          <img src="burger-logo.png" alt="Burger Shop Logo">
        </div>
        <h2>Welcome Back!</h2>
        <p>Login to enjoy our delicious burgers</p>
        <form id="loginForm">
          <div class="form-group">
            <input type="text" id="username" name="username" placeholder="Username" required>
          </div>
          <div class="form-group">
            <input type="password" id="password" name="password" placeholder="Password" required>
          </div>
          <button type="submit" class="login-btn">Login</button>
          <div class="links">
            <a href="/forgot-password">Forgot Password?</a>
            <a href="/signup">Create an Account</a>
          </div>
        </form>
      </div>
  
      <!-- Right: Image Section -->
      <div class="image-container">
        <img src="img/Leonardo_Lightning_XL_A_realistic_depiction_of_a_juicy_burger_2.jpg" alt="Delicious Burger">
      </div>
    </div>`

}
loadindex();


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
  