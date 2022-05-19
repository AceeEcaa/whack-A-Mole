const tikus = document.querySelectorAll(".tikus");
const tanah = document.querySelectorAll(".tanah");
const mulai = document.querySelector(".start");
const scoreBoard = document.querySelector(".score-board");
var randNumberCheck;
var coin;
var score;
var end;



mulai.addEventListener("click",start);

function start(){
    score=0;
    end=false;
    coin=0;
    coin=prompt("insert your coin !");
    coin=coin*5000;
    randSelector();
    setTimeout(() => {
        end=true;
    }, coin);
}

for (let i = 0; i < tikus.length; i++) {
    tikus[i].addEventListener("click", handleClick);
}

function handleClick(){
    score++;
    scoreBoard.innerHTML = score;
    console.log(score);
    this.classList.add("pukul");
    setTimeout(() => {
        this.classList.remove("pukul");
    }, 1000);
}

function randNumberGenerator(){
    var randNumber = Math.floor(Math.random() * 5);
    if (randNumber === randNumberCheck) {
        randNumberGenerator();
    } else{
        randNumberCheck=randNumber;
    }
    
    return randNumberCheck;
}
function randSelector(){
    var randNumber = randNumberGenerator();
    var randTikus = tikus[randNumber];
    var randTimer = Math.random() * 700 +500;
    randTikus.classList.add("muncul");
    setTimeout(() => {
        randTikus.classList.remove("muncul");
        if (end===false) {
            randSelector();    
        }else if(end===true){
            alert("Time's up your score is = "+score +"!")
            scoreBoard.innerHTML = "0";
            return 0;
            
        }
        
    }, randTimer);

}

