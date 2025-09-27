// Initialize EmailJS with your public key
emailjs.init({
  publicKey: 'GHoZp7EnT7nHPyEDW', // Replace with your EmailJS public key
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const submitBtn = document.querySelector('button[type="submit"]');

  // Basic input sanitization
  const sanitize = (str) => {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  };

  // Check for potentially malicious patterns
  const suspiciousPatterns = [
    /<script[^>]*>/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /<iframe[^>]*>/i,
    /<object[^>]*>/i,
    /<embed[^>]*>/i
  ];

  const inputs = [name, email, message];
  for (let input of inputs) {
    for (let pattern of suspiciousPatterns) {
      if (pattern.test(input)) {
        alert('Invalid input detected. Please remove any HTML or script tags.');
        return false;
      }
    }
  }

  // Additional validation
  if (name.trim().length < 2) {
    alert('Name must be at least 2 characters long.');
    return false;
  }

  if (message.trim().length < 10) {
    alert('Message must be at least 10 characters long.');
    return false;
  }

  // Check honeypot
  if (document.querySelector('input[name="_gotcha"]').value) {
    return false; // Bot detected
  }

  // Disable submit button and show loading state
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';

  // Send email using EmailJS
  emailjs.send('service_1wcubw4', 'template_bwyei2a', {
    from_name: sanitize(name.trim()),
    from_email: sanitize(email.trim()),
    message: sanitize(message.trim()),
    to_name: 'My Apps', // Your name or company name
  })
  .then(function(response) {
    alert('Message sent successfully!');
    document.getElementById('contactForm').reset();
  })
  .catch(function(error) {
    alert('Failed to send message. Please try again.');
    console.error('EmailJS error:', error);
  })
  .finally(function() {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send';
  });
});