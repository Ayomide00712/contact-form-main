// validating firstname
function validateFirstName() {
  const firstNameInput = document.getElementById("first-name");
  const firstName = document.getElementById("first-name").value;
  const firstNameError = document.getElementById("firstname-error");

  if (firstName.length === 0) {
    firstNameError.innerHTML = "This field is required";
    firstNameInput.classList.add("error-input");
    return false;
  } else {
    firstNameError.innerHTML = "";
    firstNameInput.classList.remove("error-input");
    return true;
  }
}

// validatin lastname
function validateLastName() {
  const lastNameInput = document.getElementById("last-name");
  const lastNameError = document.getElementById("lastname-error");
  const lastName = lastNameInput.value.trim();

  if (lastName.length === 0) {
    lastNameError.innerHTML = "Last name is required";
    lastNameInput.classList.add("error-input");
    return false;
  } else {
    lastNameError.innerHTML = "";
    lastNameInput.classList.remove("error-input");
    return true;
  }
}

// Validting email
function validateEmail() {
  const emailInput = document.getElementById("email-address");
  const emailError = document.getElementById("email-error");
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.length === 0) {
    emailError.innerHTML = "This field is required";
    emailInput.classList.add("error-input");
    return false;
  } else if (!emailRegex.test(email)) {
    emailError.innerHTML = "Use the proper email format";
    emailInput.classList.add("error-input");
    return false;
  } else {
    emailError.innerHTML = "";
    emailInput.classList.remove("error-input");
    return true;
  }
}
function validateMessage() {
  const messageInput = document.getElementById("message");
  const messageError = document.getElementById("message-error");
  const message = messageInput.value.trim();

  if (message.length === 0) {
    messageError.innerHTML = "Message is required";
    messageInput.classList.add("error-input");
    return false;
  } else {
    messageError.innerHTML = "";
    messageInput.classList.remove("error-input");
    return true;
  }
}
function validateQueryType() {
  const generalBtn = document.getElementById("generalBtn");
  const supportBtn = document.getElementById("support");
  const enquiryError = document.getElementById("query-error");

  if (!generalBtn.checked && !supportBtn.checked) {
    enquiryError.innerHTML = "Please select a query type";
    return false;
  } else {
    enquiryError.innerHTML = "";
    return true;
  }
}
function validateCheckbox() {
  const checkbox = document.getElementById("checkbox");
  const checkboxError = document.getElementById("check-error");

  if (!checkbox.checked) {
    checkboxError.innerHTML = "You must consent to being contacted";
    return false;
  } else {
    checkboxError.innerHTML = "";
    return true;
  }
}
document
  .getElementById("first-name")
  .addEventListener("input", validateFirstName);
document
  .getElementById("last-name")
  .addEventListener("input", validateLastName);
document
  .getElementById("email-address")
  .addEventListener("input", validateEmail);
document.getElementById("message").addEventListener("input", validateMessage);
document
  .getElementById("generalBtn")
  .addEventListener("change", validateQueryType);
document
  .getElementById("support")
  .addEventListener("change", validateQueryType);
document
  .getElementById("checkbox")
  .addEventListener("change", validateCheckbox);

function validateForm(event) {
  event.preventDefault();

  // Run all validations
  const isFirstNameValid = validateFirstName();
  const isLastNameValid = validateLastName();
  const isEmailValid = validateEmail();
  const isMessageValid = validateMessage();
  const isQueryTypeValid = validateQueryType();
  const isCheckboxValid = validateCheckbox();

  // Check if all fields are valid
  const isValid =
    isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isMessageValid &&
    isQueryTypeValid &&
    isCheckboxValid;

  if (isValid) {
    const popContainer = document.querySelector(".pop-container");
    popContainer.classList.add("active");
    setTimeout(() => {
      popContainer.classList.remove("active");
    }, 3000); // Hide after 3 seconds
    document.getElementById("contact-form").reset();
  }

  return isValid;
}
