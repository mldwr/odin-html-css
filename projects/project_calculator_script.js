const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');
let calcStack = [];

function add() {
    calcStack = [calcStack[0] + calcStack[2]];
}

function subtract() {
    calcStack = [calcStack[0] - calcStack[2]];
}

function multiply() {
    calcStack = [calcStack[0] * calcStack[2]];
}

function divide() {
    calcStack = [calcStack[2] === 0 ? 'Error' : calcStack[0] / calcStack[2]];
}

function operate() {
    if(calcStack.length === 3) {
      if(calcStack[1] === '+') {
          add();
      }else if(calcStack[1] === '−') {
          subtract();
      }else if(calcStack[1] === '×') {
          multiply();
      }else if(calcStack[1] === '÷') {
          divide();   
      }
    
    console.log(calcStack);
    display.textContent = calcStack[0];
  }
}

function clearDisplay() {
    display.textContent = '0';
    calcStack = [];
    console.log(calcStack);
}

function hadleOperator(buttonText) {
  
  if (calcStack.length === 1) {
    display.textContent = calcStack[0] + buttonText;
    calcStack.push(buttonText);
    console.log(calcStack);
  }
}

function handleNumber(buttonText) {
  if (calcStack.length > 0) {
    const currentItem = calcStack.pop();
    if (['+', '−', '×', '÷'].includes(currentItem)) {
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

function handleBackspace() {
  const currentItem = calcStack.pop();
        if (Math.abs(currentItem) >= 10) {
          // Remove the last digit
          const newItem = parseInt(currentItem.toString().slice(0, -1)) || 0;
          calcStack.push(newItem);
          console.log(calcStack);
          display.textContent = calcStack.join('');
        }else if(currentItem >= 0 && currentItem <= 9) {
            display.textContent = calcStack.join('');
            console.log(calcStack);
        }else if(['+', '−', '×', '÷'].includes(currentItem)) {
            display.textContent = calcStack.join('');
            console.log(calcStack);
        }
        if (calcStack.length === 0) {
          display.textContent = '0';
          console.log(calcStack);
        }
}

// add event listener to all buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.innerText;
    
    if(buttonText === 'C') {
        clearDisplay();
    }else if(['+', '−', '×', '÷'].includes(buttonText)) {
        hadleOperator(buttonText);
    }else if(buttonText >= '0' && buttonText <= '9'){
        handleNumber(buttonText);
    }else if(buttonText === '=') {
        operate();
    }else if(buttonText === "⌫" || buttonText === "Backspace") {
        handleBackspace();
    }
    
  })
})
