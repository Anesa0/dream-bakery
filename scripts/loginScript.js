function validate() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!validateUsername(username) || !validatePassword(password)) {
    document.getElementById("error-message").textContent =
      "Please check your email and password.";
    document.getElementById("error-message").classList.remove("hidden");
    document.getElementById("password").value = "";
    document.getElementById("password").focus();
  } else {
    // navigate to the next page
    window.location.replace("/recipes.html");
  }
}

function validateUsername(username) {
  const regex = /^[a-z]+\.[a-z]+(\d*)@[a-z]+\.[a-zA-Z]+$/;
  return regex.test(username);
}

function validatePassword(password) {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password);
}
