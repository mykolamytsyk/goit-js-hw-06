document.body.style.backgroundColor = "#232931";
document.body.style.color = "#eeeeee";

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements;

  if (!email.value.trim() || !password.value.trim()) {
    return alert("Please fill in all the fields!");
  }
}
