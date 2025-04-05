function validateForm(event) {
  event.preventDefault();

  let isValid = true;

  //   Getting the input
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const emailInput = document.getElementById("email-address");
  const generalBtn = document.getElementById("generalBtn");
  const supportBtn = document.getElementById("support");
  const messageInput = document.getElementById("Message");
  const checkbox = document.getElementById("checkbox");

  //   Getting the input value
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email-address").value;

  const message = document.getElementById("Message").value;

  // First name validation
  let firstNameError = document.getElementById("firstname-error");
  if (firstName.length === 0) {
    firstNameError.textContent = " First name is required";
    firstNameInput.classList.add("error-input");
    isValid = false;
  }

  //   last name validation
  let secondNameError = document.getElementById("secondname-error");
  if (lastName.length === 0) {
    secondNameError.textContent = " Last name is required";
    lastNameInput.classList.add("error-input");
    isValid = false;
  }

  // Email validation
  let emailError = document.getElementById("email-error");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.length === 0) {
    emailError.innerHTML = " This field is required";
    emailInput.classList.add("error-input");
    isValid = false;
  } else if (!emailRegex.test(email)) {
    emailError.innerHTML = "Use the proper email format";
    emailInput.classList.add("error-input");
    isValid = false;
  }

  // Validate query
  let queryError = document.getElementById("query-error");
  if (!generalBtn.checked && !supportBtn.checked) {
    queryError.innerHTML = "Please select a query";
    isValid = false;
  }

  // Validate message
  const messageError = document.getElementById("message-error");
  if (message.length === 0) {
    messageError.innerHTML = "Message is required";
    messageInput.classList.add("error-input");
    isValid = false;
  }

  // Validate checkbox
  const checkboxError = document.getElementById("check-error");
  if (!checkbox.checked) {
    checkboxError.innerHTML =
      "To submit this form please consent to being contacted";
    isValid = false;
  }

  if (isValid) {
    const popMessage = document.querySelector(".pop-container");
    popMessage.classList.add("active");
    setTimeout(() => {
      popMessage.classList.remove("active");
    }, 3000);
    document.getElementById("contact-form").reset();
  }

  return isValid;
}
