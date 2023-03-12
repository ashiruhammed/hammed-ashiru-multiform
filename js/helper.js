export const renderError = function (inp) {
  if (inp.validity.typeMismatch) return `Please input a valid ${inp.type}`;
  if (inp.validity.valueMissing) return "This field is required";
};

export const clearErr = function (input, inp) {
  input.forEach((inp) => {
    inp.textContent = " ";
  });
  inp.forEach((inp) => inp.classList.remove("input-invalid"));
};
