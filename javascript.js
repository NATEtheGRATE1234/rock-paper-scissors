let imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'assets/rock.png';

imgArray[1] = new Image();
imgArray[1].src = 'assets/paper.png'

imgArray[2] = new Image();
imgArray[2].src = 'assets/scissors.png'



function randomNum() {
    let randomNum = Math.floor(Math.random() * 3)
    return randomNum;
}

function checkResult(userChoice) {
    let x = document.getElementById("playerChoice")
    let result = document.getElementById("result");
    let computerChoice = randomNum(); 
    if (userChoice == computerChoice) {
        result.innerHTML = "You tied";
    } else if ((userChoice == 0 && computerChoice == 1) || (userChoice == 1 && computerChoice == 2) || (userChoice == 2 && computerChoice == 0)) {
        result.innerHTML = "You lost";
    } else if ((userChoice == 1 && computerChoice == 0) || (userChoice == 2 && computerChoice == 1) || (userChoice == 0 && computerChoice == 2)) {
        result.innerHTML = "You won";
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