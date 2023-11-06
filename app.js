const buttons = document.querySelectorAll("button");
const display = document.getElementById("display");

buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        if (button.innerText === 'C') {
            display.innerText='';
        } else if (button.innerText === '<') {
            let string = display.innerText;
            display.innerText = string.slice(0, string.length-1);
        } else if (button.innerText === '=') {
            display.innerText = eval(display.innerText);
        } else {
            display.innerText+=button.innerText;
        }
    })
})

const themeTumblerBtn = document.querySelector(".theme-tumbler");
const calculator = document.querySelector(".calculator");
const tumblerIcon = document.querySelector(".tumbler-icon");

let isDark = true;
themeTumblerBtn.onclick = ()=>{
    calculator.classList.toggle('dark');
    themeTumblerBtn.classList.toggle('active');
    isDark = !isDark;
}