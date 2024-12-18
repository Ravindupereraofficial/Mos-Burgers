// Function to handle login form submission
function signIn() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Perform basic validation
    if (username === '' || password === '') {
        alert('Please fill in both fields.');
        return;
    }

    // Mock validation (replace with actual authentication logic)
    if (username === 'admin' && password === '123') {
        alert('Login successful!');
        // Redirect to the dashboard or home page after login
        window.location.href = '/main.html';  // Change to your desired page
    } else {
        alert('Invalid username or password.');
    }
}
