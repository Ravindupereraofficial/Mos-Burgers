
function signIn() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    
    if (username === '' || password === '') {
        alert('Please fill in both fields.');
        return;
    }

    
    if (username === 'admin' && password === '123') {
        alert('Login successful!');
        
        window.location.assign("main.html") 
    } else {
        alert('Invalid username or password.');
    }
}
