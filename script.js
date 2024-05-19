window.onload = function() {
    var input = document.getElementById("inputBox");
    var container = document.getElementById("container");

    container.addEventListener("click", function(e) {
        if(e.target.tagName === "INPUT" && e.target.type === "button") {
            buttonClick(e.target.id);
        }
    });

    document.addEventListener("keydown", function(e) {
        handleKeyboardInput(e);
    });

    var calc = document.getElementById("Button=");
    calc.addEventListener("click", calculate);

    var C = document.getElementById("ButtonC");
    C.addEventListener("click", erase);

    function buttonClick(buttonId) {
        if(buttonId !== "ButtonC" && buttonId !== "Button=") {
            var button = document.getElementById(buttonId);
            var s = button.value;
            entries(s);
        }
    }

    function entries(s) {
        if(input.value === "0" && s !== ".") {
            input.value = s;
        } else {
            input.value += s;
        }
    }

    function calculate() {
        try {
            input.value = eval(input.value.replace(/[^-()\d/*+.]/g, ''));
        } catch (e) {
            alert("Invalid Mathematical Expression");
            input.value = "";
        }
    }

    function erase() {
        input.value = "";
    }

    function handleKeyboardInput(e) {
        if((e.key >= 0 && e.key <= 9) || e.key === "." || e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
            entries(e.key);
        } else if(e.key === "Enter") {
            calculate();
        } else if(e.key === "Backspace") {
            input.value = input.value.slice(0, -1);
        } else if(e.key === "Escape") {
            erase();
        }
    }
};
