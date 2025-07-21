const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function () {
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  this.textContent = type === "password" ? "👁️" : "🙈";
});

function checkPassword() {
  const userInput = passwordInput.value;

  const passwords = {
    "5$yv!O{c4NP]v[ePNGn8": "https://www.399bet11.com/?r=gob5502",
    "654321": "https://www.google.com",
    "000000": "https://m.youtube.com",
    "707070": "https://m.facebook.com"
  };

  if (passwords[userInput]) {
    window.location.href = passwords[userInput];
  } else {
    document.getElementById("message").innerText = "🚫 Incorrect Password!";
  }
}
