let humanScore = 0,compScore = 0;
let currentRound = 0;

while(currentRound<5){
    let compMove = getComputerChoice();
    let humanMove = getHumanChoice();
    playRound(compMove,humanMove);
    console.log("Round "+currentRound);
    console.log("Human:- " + humanScore);
    console.log("Computer:-" + compScore);
    currentRound++;
}

if(humanScore > compScore){
    alert("You have won the Game");
}else if(humanScore === compScore){
    alert("It's a tie between computer and you!");
}else{
    alert("Computer has won the game");
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

function getHumanChoice(){
    let humanChoice = prompt("Enter your choice");
    return humanChoice.toLowerCase();
}

function playRound(compMove,humanMove){
    if(compMove==="rock"){
        if(humanMove==="scissors"){
            compScore++;
            console.log("Computer won!,as rock beats scissors");
        }else if(humanMove==="paper"){
            humanScore++;
            console.log("Human won!,as paper beats Rock");
        }else if( humanMove==="rock") {
            console.log("Tie!");
        }
    }else if(compMove==="paper"){
        if(humanMove==="scissors") {
            humanScore++;
            console.log("Human won!,as scissors beat paper")
        }else if(humanMove==="rock"){
            compScore++;
            console.log("Computer won!,as paper beats rock");
        }else {
            console.log("Tie!");
        }
    }else{//if compMove is scissors
        if(humanMove==="rock"){
            humanScore++;
            console.log("Human won!,as rock beats scissors")
        }else if(humanMove = "paper"){
            compScore++;
            console.log("Computer won!,as scissors beat paper");
        }else{
            console.log("Tie!");
        }
    }
}