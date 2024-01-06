const max=6;
const min=1;
const count=document.getElementById("cl");
const btn = document.getElementById("btn");

let randomnum = Math.floor(Math.random()* max);

btn.onclick = function(){

    let randomnum = Math.floor(Math.random()* max)+min;
    count.textContent = randomnum;

}


