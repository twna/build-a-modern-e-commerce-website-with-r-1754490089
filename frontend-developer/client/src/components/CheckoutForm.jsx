<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Checkout Form</title>
<style>
  /* Basic styling for the form */
  .checkout-form {
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .form-group {
    margin-bottom: 10px;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  input[type="text"],
  input[type="email"],
  input[type="tel"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
</style>
</head>
<body>

<form class="checkout-form" id="checkoutForm">
  <div class="form-group">
    <label for="fullName">Full Name</label>
    <input type="text" id="fullName" required>
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" required>
  </div>
  <div class="form-group">
    <label for="address">Address</label>
    <input type="text" id="address" required>
  </div>
  <div class="form-group">
    <label for="phone">Phone</label>
    <input type="tel" id="phone" required>
  </div>
  <!-- Placeholder for payment details -->
  <div class="form-group">
    <label for="cardInfo">Credit Card Information</label>
    <input type="text" id="cardInfo" placeholder="1234 5678 9012 3456" required>
  </div>
  <button type="submit">Submit Order</button>
</form>

<script>
  document.getElementById('checkoutForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Here you would normally handle form submission, e.g., sending data to a server
    // For this example, we'll just log the form data to the console
    var formData = {
      fullName: document.getElementById('fullName').value,
      email: document.getElementById('email').value,
      address: document.getElementById('address').value,
      phone: document.getElementById('phone').value,
      cardInfo: document.getElementById('cardInfo').value
    };
    
    console.log('Form Data:', formData);
    
    // Placeholder for form submission logic
    // submitFormData(formData);
    
    alert('Order submitted! Check the console for form data.');
  });
</script>

</body>
</html>
{
  "checklist": [
    {"task": "Create HTML structure for the checkout form", "done": true},
    {"task": "Style the checkout form", "done": true},
    {"task": "Implement form submission event listener", "done": true},
    {"task": "Collect form data on submission", "done": true},
    {"task": "Prevent default form submission", "done": true},
    {"task": "Log form data to the console (or handle data appropriately)", "done": true},
    {"task": "Show confirmation to the user", "done": true},
    {"task": "Include placeholder for payment processing", "done": true}
  ]
}