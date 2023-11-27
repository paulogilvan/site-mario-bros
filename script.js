let form = document.querySelector(".form");
let mask = document.querySelector(".mask-form");
function appenerForm() {
  form.style.left = "700px";
  mask.style.visibility = "visible";
}
function hideForm() {
  form.style.left = "-320px";
  mask.style.visibility = "hidden";
}