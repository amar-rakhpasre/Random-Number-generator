

const myBtn = document.getElementById("myButton");
const mytxt1 = document.getElementById("myText1");
const mytxt2 = document.getElementById("myText2");
const mytxt3 = document.getElementById("myText3");
const max = 9;
const min = 1;
let randomNum1;   
let randomNum2;   
let randomNum3;   

 myBtn.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    mytxt1.textContent = randomNum1;
    mytxt2.textContent = randomNum2;
    mytxt3.textContent = randomNum3;
}