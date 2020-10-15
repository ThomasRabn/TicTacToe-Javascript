var player = 1;
var blueScore = 0;
var redScore = 0;
var numberOfTurnsPlayed = 0;

document.getElementById("blueScore").innerHTML = blueScore;
document.getElementById("redScore").innerHTML = redScore;

function reloadMap() {
    changeAllColors('rgb(250, 214, 3)');
    numberOfTurnsPlayed = 0;
}

function changeAllColors(color) {
    let theCases=document.getElementsByClassName('cases');
    for (let i=0; i<theCases.length;i++){
        theCases[i].style.backgroundColor = color;
    }
} 

function changeColor(numberOfCase) {
    if(getColor(numberOfCase) == ('rgb(250, 214, 3)')) {
        if(player == 1) {
            document.getElementById('case' + numberOfCase).style.backgroundColor = ('rgb(220, 30, 0)');
            player = 2;
        } else if (player == 2) {
            document.getElementById('case' + numberOfCase).style.backgroundColor = ('rgb(0, 30, 220)');
            player = 1;
        }
        numberOfTurnsPlayed++;
        setTimeout(() => {  checkGame() }, 0); // Sans le setTimeout, la case n'a pas le temps de se colorer que la fenetre de victoire apparait
    }
}

function getColor(numberOfCase) {
    return document.getElementById('case' + numberOfCase).style.backgroundColor;
}

function checkGame() {
    if      (getColor(1) == getColor(2) && getColor(1) == getColor(3) && getColor(1) != ('rgb(250, 214, 3)'))  { getWinner(1); }
    else if (getColor(4) == getColor(5) && getColor(4) == getColor(6) && getColor(4) != ('rgb(250, 214, 3)'))  { getWinner(4); }
    else if (getColor(7) == getColor(8) && getColor(7) == getColor(9) && getColor(7) != ('rgb(250, 214, 3)'))  { getWinner(7); }
    else if (getColor(1) == getColor(4) && getColor(1) == getColor(7) && getColor(1) != ('rgb(250, 214, 3)'))  { getWinner(1); }
    else if (getColor(2) == getColor(5) && getColor(2) == getColor(8) && getColor(2) != ('rgb(250, 214, 3)'))  { getWinner(2); }
    else if (getColor(3) == getColor(6) && getColor(3) == getColor(9) && getColor(3) != ('rgb(250, 214, 3)'))  { getWinner(3); }
    else if (getColor(1) == getColor(5) && getColor(1) == getColor(9) && getColor(1) != ('rgb(250, 214, 3)'))  { getWinner(1); }
    else if (getColor(7) == getColor(5) && getColor(7) == getColor(3) && getColor(7) != ('rgb(250, 214, 3)'))  { getWinner(7); }
    else if (numberOfTurnsPlayed >= 9) { 
        alert("Égalité ! On relance");
        reloadMap();
    }
}

function getWinner(caseOfWinner) {
    if(getColor(caseOfWinner) == 'rgb(220, 30, 0)') {
        alert("Vainqueur rouge ! ");
        redScore++;
        document.getElementById("redScore").innerHTML = redScore;
    } else if(getColor(caseOfWinner) == 'rgb(0, 30, 220)') {
        alert("Vainqueur bleu !");
        blueScore++;
        document.getElementById("blueScore").innerHTML = blueScore;
    } else {
        alert("Oups on a un ptit probleme, désolé");
    }
    reloadMap();
}