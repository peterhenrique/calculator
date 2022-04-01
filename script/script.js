let strdisplay = []
let newish = '';
let displayValue = 0
let display = document.getElementById('display');
let showdisplay = document.getElementById('displayValue');
showdisplay.textContent =  `${displayValue}`
let first = [];

let second = [];

let sign = [];

let secondOperator =[];

let index = [];


let operation = function (arrays){
    index = strdisplay.reduce(function(arrays,e,i){
        if (e === '-'){
            arrays.push(i)
        } else if (e === '+'){
            arrays.push(i)
        }else if (e === '*'){
            arrays.push(i)
        }else if (e === '/'){
            arrays.push(i)       }
            return arrays
            },[]
        )

    console.log(index)             

    console.log (strdisplay[index])
    first = strdisplay.slice(0,index[0]).join('')
    second = strdisplay.slice(+index[0]+1,index[1]).join('');
    sign = strdisplay[index[0]]
    secondOperator = strdisplay[1];
    secondOperator > 0 ? operate(first, sign, second): 1;

    
    operate(first,sign,second)
}

console.log(strdisplay)


const one = document.querySelector('#one');

one.addEventListener('click', () => {
    strdisplay.push(1);
    newish = strdisplay.join("")    
    showdisplay.textContent = newish
    console.log(newish)
    console.log(strdisplay)
})

const two = document.querySelector('#two');
two.addEventListener('click', () => {
    strdisplay.push(2);
    newish = strdisplay.join("")
    showdisplay.textContent = newish
    console.log(newish)
    console.log(strdisplay)
})

const three = document.querySelector('#three');
three.addEventListener('click', () => {
    strdisplay.push(3);
    newish = strdisplay.join("")
    showdisplay.textContent = newish
    console.log(newish)
    console.log(strdisplay)
})

const four = document.querySelector('#four');
four.addEventListener('click', () => {
    strdisplay.push(4);
    newish = strdisplay.join("")
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
    if (first === []){
        first = strdisplay.join('')
    } else {second = strdisplay.join('')}
    strdisplay.push('+');
    newish = strdisplay.join("")
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
})


const C = document.querySelector('#C');
C.addEventListener('click', () =>{
    strdisplay = []
    showdisplay.textContent = displayValue;
})

const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
    operation (strdisplay)
    
    

    console.log(first)
    
    console.log(second)

    console.log(sign)
    console.log(strdisplay)
})

//operações

const add = (a,b) => +a + +b;
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
    strdisplay = []
    strdisplay.push (displayValue)
    console.log(strdisplay)
    first = displayValue;
    second = []
    console.log(first)
    return displayValue
}

console.log(first)


