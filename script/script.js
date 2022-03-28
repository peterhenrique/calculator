let strdisplay = []
let newish = ""

console.log(strdisplay)


let displayValue = 0



let display = document.getElementById('display');
let showdisplay = document.getElementById('displayValue');



showdisplay.textContent =  `${displayValue}`




const one = document.querySelector('#one');
one.addEventListener('click', () => {
    strdisplay.push(1);
    let newish = strdisplay.join("")

    showdisplay.textContent = newish

    console.log(newish)

    console.log(strdisplay)


})

const two = document.querySelector('#two');
two.addEventListener('click', () => {
    strdisplay.push(2);
    let newish = strdisplay.join("")

    showdisplay.textContent = newish

    console.log(newish)

    console.log(strdisplay)


})

const three = document.querySelector('#three');
three.addEventListener('click', () => {
    strdisplay.push(3);
    let newish = strdisplay.join("")

    showdisplay.textContent = newish

    console.log(newish)

    console.log(strdisplay)


})

const four = document.querySelector('#four');
four.addEventListener('click', () => {
    strdisplay.push(4);
    let newish = strdisplay.join("")

    showdisplay.textContent = newish

    console.log(newish)

    console.log(strdisplay)


})

const five = document.querySelector('#five');
five.addEventListener('click', () => {
    strdisplay.push(5);
    let newish = strdisplay.join("")

    showdisplay.textContent = newish

    console.log(newish)

    console.log(strdisplay)


})

const six = document.querySelector('#six');
six.addEventListener('click', () => {
    strdisplay.push(6);
    let newish = strdisplay.join("")

    showdisplay.textContent = newish

    console.log(newish)

    console.log(strdisplay)


})

const seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
    strdisplay.push(7);
    let newish = strdisplay.join("")

    showdisplay.textContent = newish

    console.log(newish)

    console.log(strdisplay)


})

const eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
    strdisplay.push(8);
    let newish = strdisplay.join("")

    showdisplay.textContent = newish

    console.log(newish)

    console.log(strdisplay)


})

const nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    strdisplay.push(9);
    let newish = strdisplay.join("")

    showdisplay.textContent = newish

    console.log(newish)

    console.log(strdisplay)


})

const zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
    strdisplay.push(0);
    let newish = strdisplay.join("")

    showdisplay.textContent = newish

    console.log(newish)

    console.log(strdisplay)


})


const plus = document.querySelector('#plus');
plus.addEventListener('click', () => {
    strdisplay.push('+');
    let newish = strdisplay.join("")

    showdisplay.textContent = newish

    console.log(newish)

    console.log(strdisplay)


})

const minus = document.querySelector('#minus');
minus.addEventListener('click', () => {
    strdisplay.push('-');
    let newish = strdisplay.join("")

    showdisplay.textContent = newish

    console.log(newish)

    console.log(strdisplay)
})


const times = document.querySelector('#times');
times.addEventListener('click', () => {
    strdisplay.push('*');
    let newish = strdisplay.join("")

    showdisplay.textContent = newish

    console.log(newish)

    console.log(strdisplay)


})

const divided = document.querySelector('#divided');
divided.addEventListener('click', () => {
    strdisplay.push('/');
    let newish = strdisplay.join("")

    showdisplay.textContent = newish

    console.log(newish)

    console.log(strdisplay)


})


const C = document.querySelector('#C');
C.addEventListener('click', () =>{
    strdisplay = []
    showdisplay.textContent = displayValue;

    console.log(strdisplay)
})

const equal = document.querySelector('#equal');
equal.addEventListener('click', (newish) => {
    operate(newish)

    console.log(operate(newish))
    


})

//operações

const add = (a,b) => a+b;

const subtract = (a,b) => a-b;

const multiply = (a,b) => a*b;

const divide = (a,b) => a/b;

const operate = function (a,sign,b) {


    if (sign === '+'){
        displayValue = add(a,b)
    }
    if (sign === '-') {
        displayValue = subtract(a,b)
    }
    if (sign === '*') {
        displayValue =  multiply(a,b)
    }
    if (sign === '/'){
        displayValue =  divide (a,b)
    }

    showdisplay.textContent = `${displayValue}`;

    a = displayValue;


    console.log(a)


    return displayValue
}


