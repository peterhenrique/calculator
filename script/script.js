let strdispl = ''
let arrdispls = []
let displayValue = 0
let display = document.getElementById('display');
let showdisplay = document.getElementById('displayValue');
showdisplay.textContent =  `${displayValue}`

// here we shall have the arrays
let first = [];
let second = [];

// status
let firstStatus = false
let secondStatus = false
let secondOnward = false

// the operators
let firstOperator = ''
let secondOperator = ''
//signs
let sign = [];


   

 operation = () => {
    if (secondOnward === false){
        if (firstStatus === true || secondStatus === true){
            firstOperator = first.join('');
            secondOperator = second.join('')}
    } else {secondOperator = second.join('')
            }}



const one = document.querySelector('#one');

one.addEventListener('click', () => {       
    arrdispls.push(1)
    strdispl = arrdispls.join('')
    showdisplay.textContent = strdispl
    if (firstStatus === false) {
        first.push(1)
    }else (
        second.push(1))
    console.log(first);
    console.log(firstStatus);
    console.log(second)
})

const two = document.querySelector('#two');
two.addEventListener('click', () => {
    arrdispls.push(2)
    strdispl = arrdispls.join('')
    showdisplay.textContent = strdispl
    if (firstStatus === false) {
        first.push(2)
    }else (

        second.push(2))
    console.log(first);
    console.log(firstStatus);
    console.log(second)
})

const three = document.querySelector('#three');
three.addEventListener('click', () => {
    arrdispls.push(3)
    strdispl = arrdispls.join('')
    showdisplay.textContent = strdispl
    if (firstStatus === false) {
        first.push(3)
    }else (

        second.push(3))
    console.log(first);
    console.log(firstStatus);
    console.log(second)
})
const four = document.querySelector('#four');
four.addEventListener('click', () => {
    arrdispls.push(4)
    strdispl = arrdispls.join('')
    showdisplay.textContent = strdispl
    if (firstStatus === false) {
        first.push(4)
    }else (

        second.push(4))
    console.log(first);
    console.log(firstStatus);
    console.log(second)
})

const five = document.querySelector('#five');
five.addEventListener('click', () => {
    arrdispls.push(5)
    strdispl = arrdispls.join('')
    showdisplay.textContent = strdispl
    if (firstStatus === false) {
        first.push(5)
    }else (

        second.push(5))
    console.log(first);
    console.log(firstStatus);
    console.log(second)
})

const six = document.querySelector('#six');
six.addEventListener('click', () => {
    arrdispls.push(6)
    strdispl = arrdispls.join('')
    showdisplay.textContent = strdispl
    if (firstStatus === false) {
        first.push(6)
    }else (

        second.push(6))
    console.log(first);
    console.log(firstStatus);
    console.log(second)
})

const seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
    arrdispls.push(7)
    strdispl = arrdispls.join('')
    showdisplay.textContent = strdispl
    if (firstStatus === false) {
        first.push(7)
    }else (

        second.push(7))
    console.log(first);
    console.log(firstStatus);
    console.log(second)
})

const eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
    arrdispls.push(8)
    strdispl = arrdispls.join('')
    showdisplay.textContent = strdispl
    if (firstStatus === false) {
        first.push(8)
    }else (

        second.push(8))
    console.log(first);
    console.log(firstStatus);
    console.log(second)
})

const nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    arrdispls.push(9)
    strdispl = arrdispls.join('')
    showdisplay.textContent = strdispl
    if (firstStatus === false) {
        first.push(9)
    }else (

        second.push(9))
    console.log(first);
    console.log(firstStatus);
    console.log(second)
})

const zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
    arrdispls.push(0)
    strdispl = arrdispls.join('')
    showdisplay.textContent = strdispl
    if (firstStatus === false) {
        first.push(0)
    }else (

        second.push(0))
    console.log(first);
    console.log(firstStatus);
    console.log(second)
})


const plus = document.querySelector('#plus');
plus.addEventListener('click', () => {
    arrdispls.push('+')
    strdispl = arrdispls.join('')
    showdisplay.textContent = strdispl 
    
    sign.unshift('+');
    
    firstStatus = true;
    firstOperator = first.join('')
    console.log(firstOperator)
    operation()
    if (secondOperator != []) {
    operate(firstOperator,sign,secondOperator)}

})

const minus = document.querySelector('#minus');
minus.addEventListener('click', () => {
    arrdispls.push('-')
    strdispl = arrdispls.join('')
    showdisplay.textContent = strdispl
    sign.unshift('-');
    firstStatus = true;
    firstOperator = first.join('')
    console.log(firstOperator)
    operation()
    operate(firstOperator,sign,secondOperator)

})


const times = document.querySelector('#times');
times.addEventListener('click', () => {
    arrdispls.push('*')
    strdispl = arrdispls.join('')
    showdisplay.textContent = strdispl
    sign.unshift('*');
    firstStatus = true;
    firstOperator = first.join('')
    console.log(firstOperator)
    operation()
    if (secondOperator != []) {
        operate(firstOperator,sign,secondOperator)}

})

const divided = document.querySelector('#divided');
divided.addEventListener('click', () => {
    arrdispls.push('/')
    strdispl = arrdispls.join('')
    showdisplay.textContent = strdispl
    sign.unshift('/');
    firstStatus = true;
    firstOperator = first.join('')
    console.log(firstOperator)
    operation()
    console.log(secondOperator)
    if (secondOperator != []){
        operate(firstOperator,sign,secondOperator)
    }

})


const C = document.querySelector('#C');
C.addEventListener('click', () =>{
// here we shall have the arrays
 first = [];
 second = [];

// status
 firstStatus = false
 secondStatus = false
 secondOnward = false

// the operators
 firstOperator = ''
 secondOperator = ''
//signs
 sign = [];    
 showdisplay.textContent = displayValue;
})

const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
    operation();
    operate(firstOperator,sign,secondOperator)

    // operate(firstOperator,sign,secondOperator)

    // console.log(operate(firstOperator,sign,secondOperator))   
    
    

})

//operações

const add = (a,b) => +a + +b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;


const operate = function (a,sign,b) {
    if (sign >= 1) {
        sign.splice(0,)
    }

    if (sign[0] === '+'){
        displayValue = add(a,b)
    }
    if (sign[0] === '-') {
        displayValue = subtract(a,b)
    }
    if (sign[0] === '*') {
        displayValue =  multiply(a,b)
    }
    if (sign[0] === '/'){
        displayValue =  divide (a,b)
    }

    arrdispls = [];
    arrdispls.push(`${displayValue}`)
    console.log(arrdispls)
    strdispl = ''
    console.log(arrdispls)


    second = [];
    secondOperator = []
    secondOnward = true
    sign = []
    console.log(sign)
    

    showdisplay.textContent = `${displayValue}`;
    firstOperator = displayValue;   
    

}

console.log(first)


