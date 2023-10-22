document.querySelector("body").style.backgroundColor = "#EBECF0";
const inputRef = document.getElementById("validation-input");
inputRef.addEventListener("blur", onBlurBorderColor);

function onBlurBorderColor(event) {
  const inputDataLength = Number(inputRef.dataset.length);
  const inputValueLength = Number(inputRef.value.trim().length);

  if (inputValueLength === inputDataLength) {
    updateClassE1("valid", "invalid");
  } else {
    updateClassE1("invalid", "valid");
  }
}

function updateClassE1(a, b) {
  inputRef.classList.add(a);
  inputRef.classList.remove(b);
}
