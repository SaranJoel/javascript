// // console.log(`Hello `);
// // console.log(`This is Saran Joel`);

// // window.alert(`THis is an alert`)
// document.getElementById('h1').textContent = 'HI THIS is SARAN JOEL'
// document.getElementById(`para_1`).textContent = 'this is PARAGRAPH'

// let senName = 'Hi this is a variabel by SARAN'
// let senNUm = 125

// document.getElementById('para_1').textContent = `${senName} your age is ${senNUm}`;

//this ia easy way to take user input
let userName;
userName = window.prompt(`What's your User Name`);

document.getElementById('para_1').textContent = `this is para ${userName}`;

//this is professionl way
let inputText
document.getElementById('submit').onclick = function(){
    inputText = document.getElementById('inputtext').value
    document.getElementById('h1').textContent = `HI this is ${inputText} and you are in H1`
}