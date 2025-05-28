const characters = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
  "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
  "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  "~", "`", "!", "@", "#", "$", "%", "^", "&", "*",
  "(", ")", "_", "-", "+", "=", "{", "[", "}", "]",
  ",", "|", ":", ";", "<", ">", ".", "?", "/"
];

const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const button1 = document.getElementById("btn1");

button1.addEventListener("click", generatePassword);

function generatePassword() {
  let pw1 = "";
  let pw2 = "";
  for (let i = 0; i < 14; i++) {
    pw1 += characters[Math.floor(Math.random() * characters.length)];
    pw2 += characters[Math.floor(Math.random() * characters.length)];
  }
  password1.textContent = pw1;
  password2.textContent = pw2;
}
