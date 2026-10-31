const mainScreen = document.querySelector("#mainScreen");
const webScreen = document.querySelector("#webScreen");
const nameInput = document.querySelector("#nameInput");
const result = document.querySelector("#result");

document.querySelector("#greetButton").addEventListener("click", () => {
  const name = nameInput.value.trim();
  result.textContent = name ? `Привет, ${name}!` : "Введите имя!";
  result.className = `result ${name ? "success" : "error"}`;
});

document.querySelector("#openSiteButton").addEventListener("click", () => {
  mainScreen.hidden = true;
  webScreen.hidden = false;
});

document.querySelector("#backButton").addEventListener("click", () => {
  webScreen.hidden = true;
  mainScreen.hidden = false;
});

