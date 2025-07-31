var display = document.getElementById("display");
var buttons = document.querySelectorAll("button");
var currentInput = "";
buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        var value = btn.textContent;
        if (value === "=") {
            try {
                currentInput = eval(currentInput).toString(); // use a safer method later!
            }
            catch (_a) {
                currentInput = "Error";
            }
        }
        else if (value === "C") {
            currentInput = "";
        }
        else {
            currentInput += value;
        }
        display.value = currentInput;
    });
});
