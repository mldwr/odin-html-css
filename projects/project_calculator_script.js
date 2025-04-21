const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');
let calcStack = [];

function add() {
    return calcStack[0] + calcStack[2];
}
function subtract() {
    return calcStack[0] - calcStack[2];
}

function multiply() {
    return calcStack[0] * calcStack[2];
}

function divide() {
    if(calcStack[2] === 0) {
        return 'Error';
    }
    return calcStack[0] / calcStack[2];
}

function operate() {
    console.log(calcStack);
    let result = 0;
    if(calcStack[1] === '+') {
        result = add();
    }else if(calcStack[1] === '−') {
        result = subtract();
    }else if(calcStack[1] === '×') {
        result = multiply();
    }else if(calcStack[1] === '÷') {
        result = divide();   
    }
    calcStack = [];
    calcStack.push(result);
    console.log(calcStack);
    return result;
}

function clearDisplay() {
    display.textContent = '0';
    calcStack = [];
    console.log(calcStack);
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.innerText;
    
    if(buttonText === 'C') {
        clearDisplay();
        return;
    }

    if(buttonText === '+' || buttonText === '−' || buttonText === '×' || buttonText === '÷') {
      if (calcStack.length === 1) {
        display.textContent = calcStack[0] + buttonText;
        calcStack.push(buttonText);
        console.log(calcStack);
      }
    }else if(buttonText >= '0' && buttonText <= '9'){
      if (calcStack.length > 0) {
        const currentItem = calcStack.pop();
        if (currentItem === '+' || currentItem === '−' || currentItem === '×' || currentItem === '÷') {
          calcStack.push(currentItem);
          calcStack.push(parseInt(buttonText));
          display.textContent = calcStack.join('');
          console.log(calcStack);
        } else if (currentItem >= 0 && currentItem < 999) {
          calcStack.push(parseInt(currentItem + buttonText));
          display.textContent = calcStack.join('');
          console.log(calcStack);
        }else {
            calcStack.push(parseInt(currentItem));
            display.textContent = calcStack.join('');
            console.log(calcStack);
        }
      }else {
        calcStack.push(parseInt(buttonText));
        display.textContent = calcStack.join('');
        console.log(calcStack);
      }
    }

    if(buttonText === '=') {
        if(calcStack.length === 3) {
            display.textContent = operate()
            return;
        }
    }

    if(buttonText === "⌫" || buttonText === "Backspace") {
        const currentItem = calcStack.pop();
        if (currentItem >= 10 && currentItem <= 999) {
          // Remove the last digit
          const newItem = Math.floor(currentItem / 10);
          calcStack.push(newItem);
          console.log(calcStack);
          display.textContent = calcStack.join('');
        }else if(currentItem >= 0 && currentItem <= 9) {
            display.textContent = calcStack.join('');
            console.log(calcStack);
        }else if(currentItem === '+' || currentItem === '−' || currentItem === '×' || currentItem === '÷') {
            display.textContent = calcStack.join('');
            console.log(calcStack);
        }
        if (calcStack.length === 0) {
          display.textContent = '0';
          console.log(calcStack);
        }
    }
    
  })
})
