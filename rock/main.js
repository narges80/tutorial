const choices = ["rock", "paper", "scissors"]; 

const userChoice = prompt("choose rock, paper, scissors");
if (userChoice) {
    console.log(`you choose: ${userChoice}` );
} else {
    console.log("you cheated!")
}

 const randomNumber = Math.floor(Math.random() * 3);
 const computerChoice = choices[randomNumber];
 console.log(`computer chooses: ${computerChoice}`)

 if (userChoice === computerChoice) {
     console.log("it's a tie");
 } else if (userChoice === "rock") {
     if (computerChoice === "scissors") {
         console.log("you win!");   
     } else {
        console.log("you lose!");
     }
 } else if (userChoice === "paper") {
     if (computerChoice === "rock") {
        console.log("you win!"); 
     } else {
        console.log("you lose!");
     }
 } else if (userChoice === "scissors") {
     if (computerChoice === "paper") {
        console.log("you win!");
     } else {
        console.log("you lose!");
     }
 }