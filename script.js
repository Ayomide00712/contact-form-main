function validateForm(event) {
  event.preventDefault();

  let isValid = true;

  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email-address").value;
  const generalBtn = document.getElementById("generalBtn");
  const supportBtn = document.getElementById("support");
  const meesage = document.getElementById("Message");
  const checkbox = document.getElementById("checkbox");

  // First name validation
  let firstNameError = document.getElementById("firstname-error");
  if (firstName.length === 0) {
    firstNameError.textContent = " First name is required";
    isValid = false;
  }
   
//   last name validation
let secondNameError = document.getElementById("secondname-error");
if (firstName.length === 0) {
  secondNameError.textContent = " Last name is required";
  isValid = false;
}

// Email validation
let emailError = document.getElementById("email-error");
if (firstName.length === 0) {
  secondNameError.textContent = " Last name is required";
  isValid = false;
}



  return isValid;
}

