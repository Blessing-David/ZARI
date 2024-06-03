document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    if (password !== confirmPassword) {
      document.getElementById('message').innerHTML = "Passwords do not match.";
    } else {
      // Store user info in local storage
      localStorage.setItem('username', username);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
  
      // Refresh the page
    window.location.reload();
    }
  });
  
  