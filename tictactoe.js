let tictac = ['X','O'];
let count = 0;
let smallBox = document.querySelectorAll('.small-box');


for(let i = 0; i < smallBox.length; i++){
    smallBox[i].addEventListener("click",function () {
        if(smallBox[i].innerText==""){
        smallBox[i].innerText = tictac[count++ % 2];}}  
        )
}