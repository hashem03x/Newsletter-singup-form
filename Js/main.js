let email = document.getElementById("email");
let form = document.getElementById("form");
let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

window.addEventListener("resize", () => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    document
      .getElementById("toChange")
      .setAttribute("src", "assets/images/illustration-sign-up-mobile.svg");
  } else {
    document
      .getElementById("toChange")
      .setAttribute("src", "assets/images/illustration-sign-up-desktop.svg");
  }
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value.match(regex)) {
    document.getElementById("error").style.display = "none";
    document.body.removeChild(form);
    let success = document.createElement("div");
    success.className = "success position-absolute ps-5 pe-5 pt-3 pb-3";
    success.innerHTML = `<div class="image">
    <img src="assets/images/icon-success.svg" alt="icon-success" />
    </div>
    <h2 class="mt-3 mb-3">Thanks for subscribing!</h2>
    <p>
    A confirmation email has been sent to
    <span id="sentTo">Hashem@gmail.com</span>
    please open it and click the button inside to confirm your subscribtion
    </p>
    <button id="dismiss">Dismiss message</button>`;
    document.body.appendChild(success);
    success.classList.add("show");
    let dismiss = document.getElementById("dismiss");
    console.log(dismiss);
    dismiss.addEventListener("click", () => {
      console.log("clicked");
      document.body.removeChild(success);
      document.body.appendChild(form);
      email.value = "";
    });
  } else {
    document.getElementById("error").style.display = "inline-block";
  }
});
function dismiss() {}
//
