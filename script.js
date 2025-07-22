const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function () {
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  this.textContent = type === "password" ? "লুকান" : "দেখুন";
});

function checkPassword() {
  const userInput = passwordInput.value;

  const passwords = {
    "174894": "https://www.399bet11.com/?r=gob5502",
    "facebook": "https://www.facebook.com/tamimhosen82",
    "ws": "https://wa.me/+8801729961775"
  };

  if (passwords[userInput]) {
    window.location.href = passwords[userInput];
  } else {
    document.getElementById("message").innerText = "🚫 Incorrect Password!";
  }
}
