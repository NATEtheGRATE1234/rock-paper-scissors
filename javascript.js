let imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'assets/rock.png';

imgArray[1] = new Image();
imgArray[1].src = 'assets/paper.png';

imgArray[2] = new Image();
imgArray[2].src = 'assets/scissors.png';



function randomNum() {
    let randomNum = Math.floor(Math.random() * 3)
    return randomNum;
}


let pScore = 0;
let cScore = 0;


function checkResult(userChoice) {
    let a = document.getElementById("pC");
    let b = document.getElementById("cC");
    let p = document.getElementById("playerScore");
    let c = document.getElementById("computerScore");
    let x = document.getElementById("playerChoice");
    let result = document.getElementById("result");
    let computerChoice = randomNum(); 
    if (userChoice == 0 && computerChoice == 0) {
        a.innerHTML = " chose rock";
        b.innerHTML = " chose rock";
        result.innerHTML = "You tied";
    } else if (userChoice == 1 && computerChoice == 1) {
        a.innerHTML = " chose paper";
        b.innerHTML = " chose paper";
        result.innerHTML = "You tied";
    } else if (userChoice == 2 && computerChoice == 2) {
        a.innerHTML = " chose scissors";
        b.innerHTML = " chose scissors";
        result.fontcolor("brown");
        result.innerHTML = "You tied";
    } else if (userChoice == 0 && computerChoice == 1) {
        a.innerHTML = " chose rock";
        b.innerHTML = " chose paper";
        result.innerHTML = "You lose";
        cScore++;
        c.innerHTML = cScore;
    } else if (userChoice == 0 && computerChoice == 2) {
        a.innerHTML = " chose rock";
        b.innerHTML = " chose scissors";
        result.innerHTML = "You win";
        pScore++;
        p.innerHTML = pScore;
    } else if (userChoice == 1 && computerChoice == 0) {
        a.innerHTML = " chose paper";
        b.innerHTML = " chose rock";
        result.innerHTML = "You win";
        pScore++;
        p.innerHTML = pScore;
    } else if (userChoice == 1 && computerChoice == 2) {
        a.innerHTML = " chose paper";
        b.innerHTML = " chose scissors";
        result.innerHTML = "You lose";
        cScore++;
        c.innerHTML = cScore;
    } else if (userChoice == 2 && computerChoice == 0) {
        a.innerHTML = " chose scissors";
        b.innerHTML = " chose rock";
        result.innerHTML = "You lose";
        cScore++;
        c.innerHTML = cScore;
    } else if (userChoice == 2 && computerChoice == 1) {
        a.innerHTML = " chose scissors";
        b.innerHTML = " chose paper";
        result.innerHTML = "You win";
        pScore++;
        p.innerHTML = pScore;
    }
}




function displayChoice(userChoice, computerChoice) {
    let user = document.getElementById("playerChoice");
    let computer = document.getElementById("computerChoice");
     userChoice = imgArray[userChoice];
     computerChoice = imgArray[computerChoice];
     user.setAttributeNode(`src = ${userChoice.src}`);
     computer.setAttribute(`src = ${computerChoice}`);
}