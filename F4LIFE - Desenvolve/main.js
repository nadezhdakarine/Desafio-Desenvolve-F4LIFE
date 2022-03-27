//----------------------- MENU HAMBURGUER----------------------------/
const btnMobile = document.getElementById("button-hamburguer");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

//------------------------VERIFICA FORM-----------------------------//
const form = document.querySelector("form");
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputText = document.getElementById("text");

const errorNameRequired = document.getElementById("error-name-required");
const errorEmailRequired = document.getElementById("error-email-required");
const errorEmailInvalid = document.getElementById("error-email");
const errorTextRequired = document.getElementById("error-text");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkEmail();
  checkText();
  checkName();

  if (checkEmail() && checkText() && checkName() && checkIsValidEmail()) {
    const [user, domain] = inputEmail.value.split("@");
    document.getElementById("thanks").innerHTML =
      "Obrigado pelo contato, " + user + "!";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("text").value = "";
  }
});

function checkEmail() {
  const emailValue = inputEmail.value;

  if (!emailValue) {
    errorEmailRequired.classList.remove("hide");
  } else {
    errorEmailRequired.classList.add("hide");
    return true;
  }
}
function checkIsValidEmail() {
  const emailValue = inputEmail.value;

  if (!isValidEmail(emailValue)) {
    errorEmailInvalid.classList.remove("hide");
  } else {
    errorEmailInvalid.classList.add("hide");
    return true;
  }
}

function checkName() {
  const nameValue = inputName.value;

  if (!nameValue) {
    errorNameRequired.classList.remove("hide");
  } else {
    errorNameRequired.classList.add("hide");
    return true;
  }
}

function checkText() {
  const textValue = inputText.value;
  if (!textValue) {
    errorTextRequired.classList.remove("hide");
  } else {
    errorTextRequired.classList.add("hide");
    return true;
  }
}

function isValidEmail(email) {
  const emailRegExp = /^[a-zA-Z0-9.]{1,32}@[0-9a-z]{1,16}\.\S+$/;
  return emailRegExp.test(email);
}
