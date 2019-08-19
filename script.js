
var playerRock, playerPaper, playerScissors, playerScore, compScore, result,
    compPoints, playerPoints;


playerRock = document.getElementById('rock').value = 'rock';
playerPaper = document.getElementById('rock').value = 'paper';
playerScissors = document.getElementById('rock').value = 'scissors';
playerScore = document.getElementById("player-1");
compScore = document.getElementById("player-comp");
result = document.querySelector('.textResult');

compPoints = 0;
playerPoints = 0;

playerScore.textContent = '0';
compScore.textContent = '0';


function compChoice(){
    var ability = ['rock', 'paper', 'scissors'];
    var random = Math.floor(Math.random()*3);
    var compAbility = ability[random];
    return compAbility;

}


document.getElementById('rock').addEventListener('click', function(){
    var comp  = compChoice();
    if(playerRock === comp){
        result.innerHTML = '<strong> ITS DRAW! </strong> </br>' +
                             'You and computer chose ' + '<strong>' + playerRock +'.</strong> ';
        console.log(playerRock + ' vs ' + comp);
    
    }else if(playerScissors === comp){
        playerWin();
        result.innerHTML = '<strong> YOU WIN! </strong> </br>' +
                             'You chose ' + '<strong>' + playerRock +'</strong> ' + 
                             ' and computer chose ' + '<strong>' + comp + '.<strong>';
        console.log(playerRock + ' vs ' + comp);

    }else{
        compWin();
        result.innerHTML = '<strong> YOU LOST! </strong> </br>' +
                             'You chose ' + '<strong>' + playerRock +'</strong> ' + 
                             ' and computer chose ' + '<strong>' + comp + '.<strong>';
        console.log(playerRock + ' vs ' + comp);
    }


});



document.getElementById('paper').addEventListener('click', function(){
    console.log('paper');
});



document.getElementById('scissors').addEventListener('click', function(){
    console.log('scissors');
});


function compWin(){
    compPoints = compPoints + 1; 
    compScore.textContent = compPoints;

}

function playerWin(){
    playerPoints = playerPoints + 1;
    playerScore.textContent = playerPoints;
}