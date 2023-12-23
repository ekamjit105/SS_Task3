function validateForm(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate email format for username
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
        alert('Invalid email format for username');
        return;
    }

    // Validate password requirements
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]+$/;
    if (!passwordRegex.test(password)) {
        alert('Invalid password. It must contain an uppercase letter, a number, and only @ as a special character.');
        return;
    }

    // If validation passes, you can proceed with further actions (e.g., authentication)
    alert('Login successful!');
}
