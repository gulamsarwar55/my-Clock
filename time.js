const check = document.querySelector("#demo");

window.onload = displayclock();
function displayclock(){
let a = new Date();

let hour = a.getHours();
let minut = a.getMinutes();
let sec = a.getSeconds();

check.innerHTML =`${hour} : ${minut} : ${sec}`;

setTimeout(displayclock, 1000);
}