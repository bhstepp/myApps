// Initialize EmailJS with your public key
emailjs.init({
  publicKey: 'GHoZp7EnT7nHPyEDW', // Replace with your EmailJS public key
});

// Test EmailJS connection on page load
document.addEventListener('DOMContentLoaded', function() {
  console.log('EmailJS initialized with public key:', 'GHoZp7EnT7nHPyEDW');
  console.log('Service ID:', 'service_1wcubw4');
  console.log('Template ID:', 'template_bwyei2a');

  // Add event listeners for popup close buttons
  document.querySelectorAll('.popup-btn').forEach(function(button) {
    button.addEventListener('click', function() {
      const popupId = this.getAttribute('data-popup');
      closePopup(popupId);
    });
  });
});

// Popup functions
function showPopup(popupId) {
  document.getElementById(popupId).classList.add('show');
}

function closePopup(popupId) {
  document.getElementById(popupId).classList.remove('show');
}

// Close popup when clicking outside
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('popup-overlay')) {
    e.target.classList.remove('show');
  }
});

// Close popup with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.popup-overlay.show').forEach(popup => {
      popup.classList.remove('show');
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) {
    console.error('Contact form not found!');
    return;
  }

  contactForm.addEventListener('submit', function(e) {
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
        showPopup('errorPopup');
        return false;
      }
    }
  }

  // Additional validation
  if (name.trim().length < 2) {
    showPopup('errorPopup');
    return false;
  }

  if (message.trim().length < 10) {
    showPopup('errorPopup');
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
    user_name: sanitize(name.trim()),
    user_email: sanitize(email.trim()),
    message: sanitize(message.trim()),
    to_name: 'My Apps'
  })
  .then(function(response) {
    console.log('EmailJS Success:', response.status, response.text);
    showPopup('successPopup');
    contactForm.reset();
  })
  .catch(function(error) {
    console.error('EmailJS Error Details:', error);
    console.error('Error status:', error.status);
    console.error('Error text:', error.text);
    showPopup('errorPopup');
  })
  .finally(function() {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send';
  });
  });
});