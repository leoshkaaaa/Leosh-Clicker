let count =0;
let timeLeft =10;
let timeId;

const clickbutton = document.getElementById("clickbutton");
const timeDisplay = document.getElementById("time");
const countDisplay = document.getElementById("count");

//обработчик кликов 
clickbutton.addEventListener("click", () =>{
    count = count + 1;
    countDisplay.textContent = count;
});

function StartGame (){
    count = 0;
    timeLeft =10;

    countDisplay.textContent = count; 
    timeDisplay.textDisplay = timeLeft; 

    clickbutton.disabled = false;

    timeId = setInterval( ()=>{
        timeLeft = timeLeft-1;
        timeDisplay.textContent = timeLeft

if(timeLeft<= 0){
    clearInterval(timeId);
    clickbutton.disabled = true;
    alert("Время вышло! Вы кликнули " + count + "раз.")
}

    }, 1000 );
}