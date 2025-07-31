const display = document.getElementById("display") as HTMLInputElement;
const buttons = document.querySelectorAll("button");
let currentInput = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "=") {
      try {
        currentInput = eval(currentInput).toString(); // use a safer method later!
      } catch {
        currentInput = "Error";
      }
    } else if (value === "C") {
      currentInput = "";
    } else {
      currentInput += value;
    }

    display.value = currentInput;
  });
});
