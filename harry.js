// script.js

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Get values from the form
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Here, you can perform actions like validation or sending data to a server
    // For example, you might send the data using fetch() or XMLHttpRequest
  
    // For demonstration purposes, let's log the values to the console
    console.log("Email:", email);
    console.log("Password:", password);
  
    // You can add further logic or actions based on the form data here
  });
  