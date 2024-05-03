document.getElementById("detectButton").addEventListener("click", function() {
  window.location.href = "inputaudio.html";
});


// script.js
document.getElementById('signupForm').onsubmit = function(event) {
  event.preventDefault();
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirm-password').value;

  if (password !== confirmPassword) {
      document.getElementById('message').textContent = 'Passwords do not match!';
      document.getElementById('message').style.color = 'red';
      return;
  }

  fetch('/signup', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, password: password })
  }).then(response => response.json())
    .then(data => {
      document.getElementById('message').textContent = data.message;
      if (data.success) {
          document.getElementById('message').style.color = 'green';
      } else {
          document.getElementById('message').style.color = 'red';
      }
  });
};
