const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".number");
const op = document.querySelectorAll(".operator");
const clear_btn = document.querySelector(".clear");
const result = document.querySelector(".result");

let num = ' ';
let operator = ' ';
display.value = 0;

// getting numbers for calculation
numbers.forEach(numbers => {
    numbers.addEventListener("click", () => {
        if (display.value == 0) {
            display.value = ' ';
        }
        num = numbers.innerHTML;
        display.value += num;

    });
});


op.forEach(op => {
    op.addEventListener("click", () => {
        operator = op.innerHTML;
        display.value += operator;
    });
});

// result
result.addEventListener("click", () => {
    let res = eval(display.value);
    display.value = res;
});

// clear input screen 
clear_btn.addEventListener("click", () => {
    display.value = 0;
});


