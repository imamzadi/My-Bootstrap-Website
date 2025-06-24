document.addEventListener('DOMContentLoaded', function() {
      // Form submission
      const form = document.querySelector("form");
  
      form.addEventListener("submit", function(event) {
          let isValid = true;
          let errorMessages = [];
  
          // Validate Name
          const name = document.querySelector("#name").value;
          if (name.trim() === "") {
              errorMessages.push("Name is required.");
              isValid = false;
          }
  
          // Validate Email
          const email = document.querySelector("#email").value;
          const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
          if (!email.match(emailRegex)) {
              errorMessages.push("Please enter a valid email address.");
              isValid = false;
          }
  
          // Validate Message
          const message = document.querySelector("#message").value;
          if (message.trim() === "") {
              errorMessages.push("Message cannot be empty.");
              isValid = false;
          }
  
          // If the form is not valid, prevent submission and display error messages
          if (!isValid) {
              event.preventDefault();
              alert(errorMessages.join("\n"));  // Show all error messages at once
          }
      });
  });

  
  