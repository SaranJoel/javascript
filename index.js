// // console.log(`Hello `);
// // console.log(`This is Saran Joel`);

// // window.alert(`THis is an alert`)
// document.getElementById('h1').textContent = 'HI THIS is SARAN JOEL'
// document.getElementById(`para_1`).textContent = 'this is PARAGRAPH'

// let senName = 'Hi this is a variabel by SARAN'
// let senNUm = 125

// document.getElementById('para_1').textContent = `${senName} your age is ${senNUm}`;

//this ia easy way to take user input
// let userName;
// userName = window.prompt(`What's your User Name`);

// document.getElementById('para_1').textContent = `this is para ${userName}`;

// //this is professionl way
// let inputText
// document.getElementById('submit').onclick = function(){
//     inputText = document.getElementById('inputtext').value
//     document.getElementById('h1').textContent = `HI this is ${inputText} and you are in H1`
// }

// const PI  = 3.147
// let radius;
// let curcumference

// document.getElementById('myButton').onclick = function(){
//     radius = document.getElementById('myText').value;
//     radius = Number(radius);
//     curcumference = 2* PI *radius;
//     document.getElementById('h3').textContent = `the curcumference of the circle with radius ${radius} is ${curcumference}`
// }
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');
const count = document.getElementById('count');
let countNum = 0;

increaseBtn.onclick = function(){
    countNum++;
     count.textContent = countNum
}

resetBtn.onclick = function(){
    countNum = 0
    count.textContent=countNum
}

decreaseBtn.onclick = function(){
    countNum--;
    count.textContent = countNum;
}