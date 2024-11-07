let humanScore = 0,compScore = 0;
let totalRounds = 0;
let p = document.querySelector("p");
p.textContent = "Play 5 rounds";
let roundLog = document.querySelector("span");
roundLog.textContent =`Turn ${totalRounds}`;

let reset = document.querySelector("#reset");
reset.addEventListener('click',()=>{
    p.textContent = "Play 5 rounds";
    totalRounds = 0;
    compScore = 0;
    humanScore = 0;
    roundLog.textContent = `Turn ${totalRounds}`;
    p.style.backgroundColor = "";
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
});

function winner(){
    totalRounds = 0;
    roundLog.textContent =`Turn ${totalRounds}`;
    if(humanScore > compScore){
        p.textContent =  "You have won this Round!, Reset to play another Round";
        p.style.backgroundColor = "red";
        alert("You have won this Round!");
    }else if(humanScore === compScore){
        p.textContent = "It's a tie between computer and you,Reset!";
        p.style.backgroundColor = "green";
        alert("It's a tie between you and computer in this Round!");
    }else{
        p.textContent = "Computer has won this Round!, Reset to play another Round";
        p.style.backgroundColor = "blue";
        alert("Computer has won this Round!");
    }
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

function getComputerChoice(){
    let compChoice = Math.floor(Math.random() * 10)+1;
    if(compChoice > 0 && compChoice<=4){
        return "rock";
    }else if(compChoice > 4 && compChoice<8){
        return "paper";
    }else {
        return "scissors";
    }
}

const rock = document.querySelector("#rock");
rock.addEventListener('click',(e)=>{
    playRound(getComputerChoice(),"rock");
    totalRounds++;
    roundLog.textContent =`Turn ${totalRounds}`;
    if(totalRounds==5) {
        setTimeout(winner,500);
    }
});

const paper = document.querySelector("#paper");
paper.addEventListener('click',(e)=>{
    playRound(getComputerChoice(),"paper");
    totalRounds++;
    roundLog.textContent =`Turn ${totalRounds}`;
    if(totalRounds==5){
        setTimeout(winner,500);
    }
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener('click',(e)=>{
    playRound(getComputerChoice(),"scissors");
    totalRounds++;
    roundLog.textContent =`Turn ${totalRounds}`;
    if(totalRounds==5){
        setTimeout(winner,500);
    }
});

function playRound(compMove,humanMove){
    if(compMove==="rock"){
        if(humanMove==="scissors"){
            compScore++;
            p.textContent = ("Computer wins ,as rock beats scissors");
        }else if(humanMove==="paper"){
            humanScore++;
            p.textContent = ("Human wins ,as paper beats Rock");
        }else if( humanMove==="rock") {
            p.textContent = ("Tie!");
        }
    }else if(compMove==="paper"){
        if(humanMove==="scissors") {
            humanScore++;
            p.textContent = ("Human wins ,as scissors beat paper")
        }else if(humanMove==="rock"){
            compScore++;
            p.textContent = ("Computer wins ,as paper beats rock");
        }else {
            p.textContent = ("Tie!");
        }
    }else if(compMove==="scissors"){
        if(humanMove==="rock"){
            humanScore++;
            p.textContent = ("Human wins ,as rock beats scissors")
        }else if(humanMove === "paper"){
            compScore++;
            p.textContent = ("Computer wins ,as scissors beat paper");
        }else if(humanMove==="scissors"){
            p.textContent = ("Tie!");
        }
    }
}