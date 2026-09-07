let count=0;
let HighestScore=0;


let gamesq=[];
let usersq=[];
let btns=["yellow" , "red" , "green" , "purple"];


let started = false ;
let level = 0;

let heading = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false) {
        console.log("game has started");
        started = true;

        levelUp() ;
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout( function () {
        btn.classList.remove("flash")
    },250);
}
function userFlash(btn) {
    btn.classList.add("user-flash");
    setTimeout( function () {
        btn.classList.remove("user-flash")
    },250);
}

function levelUp() {
    level++;
    usersq=[];
    heading.innerText=`Level ${level}` ;
    let randIdx= Math.floor(Math.random() * 3) ;
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    
    gamesq.push(randColor);
    console.log(gamesq);


    //random button choose 
    gameFlash(randBtn);
}
function checkAns(idx) {
    // console.log(`level : ${level}`);
    
    if(usersq[idx] === gamesq[idx] ) {
        if(usersq.length == gamesq.length) {
            setTimeout(levelUp , 500);
        }
        
    } else {
        count++;
        if(count == 1) {
            HighestScore = level ; 
        } else {
            if (level > HighestScore) {
                HighestScore = level;
            
            }
        }
        heading.innerHTML = `Game over : <b> your score was ${level} </b> <br> your Highest score was ${HighestScore} <br> Press any key to start the game again`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout( function() {
            document.querySelector("body").style.backgroundColor="white";
            
        } , 150);
        reset();
    }
}

function btnPress() {
    let btn=this;
    userFlash(btn);


    userColor = btn.getAttribute("id");
    usersq.push(userColor);

    checkAns(usersq.length-1);

}

let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click" , btnPress);

}
function reset() {
    started = false;

    gamesq = [];
    usersq = [];
    level = 0; 
}


