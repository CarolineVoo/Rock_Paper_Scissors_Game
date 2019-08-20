
var playerRock, playerPaper, playerScissors, playerScore, compScore, result,
    compPoints, playerPoints, comp, gameMatch;


playerRock = document.getElementById('rock').value = 'rock';
playerPaper = document.getElementById('rock').value = 'paper';
playerScissors = document.getElementById('rock').value = 'scissors';
playerScore = document.getElementById("player-1");
compScore = document.getElementById("player-comp");
result = document.querySelector('.textResult');

manuelStart();


function compChoice(){
    var ability = ['rock', 'paper', 'scissors'];
    var random = Math.floor(Math.random() * 3);
    var compAbility = ability[random];
    return compAbility;

}


document.getElementById('rock').addEventListener('click', function(){
    comp  = compChoice();

    if(gameMatch){
        if(playerRock === comp){
            result.innerHTML = '<strong> ITS DRAW! </strong> </br>' +
                                'You and computer chose ' + '<strong>' + playerRock +'.</strong> ';
            console.log(playerRock + ' vs ' + comp);
        
        }else if(playerScissors === comp){
            result.innerHTML = '<strong> YOU WIN! </strong> </br>' +
                                'You chose ' + '<strong>' + playerRock +'</strong> ' + 
                                ' and computer chose ' + '<strong>' + comp + '.<strong>';
            console.log(playerRock + ' vs ' + comp);
            playerWin();

        }else{
            result.innerHTML = '<strong> YOU LOST! </strong> </br>' +
                                'You chose ' + '<strong>' + playerRock +'</strong> ' + 
                                ' and computer chose ' + '<strong>' + comp + '.<strong>';
            console.log(playerRock + ' vs ' + comp);
            compWin();
        }
    }

});



document.getElementById('paper').addEventListener('click', function(){
    comp = compChoice();

    if(gameMatch){
        if(playerPaper === comp) {
            result.innerHTML = '<strong> ITS DRAW! </strong> </br>' +
                               'You and computer chose ' + '<strong>' + playerPaper +'.</strong> ';
            console.log(playerPaper + ' vs ' + comp);
    
        }else if(playerRock === comp){
            result.innerHTML = '<strong> YOU WIN! </strong> </br>' +
                               'You chose ' + '<strong>' + playerPaper +'</strong> ' + 
                               ' and computer chose ' + '<strong>' + comp + '.<strong>';
            console.log(playerPaper + ' vs ' + comp);
            playerWin();
    
        }else{
            result.innerHTML = '<strong> YOU LOST! </strong> </br>' +
                               'You chose ' + '<strong>' + playerPaper +'</strong> ' + 
                               ' and computer chose ' + '<strong>' + comp + '.<strong>';
            console.log(playerPaper + ' vs ' + comp);
            compWin();
        }
    }
});



document.getElementById('scissors').addEventListener('click', function(){
    comp = compChoice();

    if(gameMatch){
        if(playerScissors === comp) {
            result.innerHTML = '<strong> ITS DRAW! </strong> </br>' +
                               'You and computer chose ' + '<strong>' + playerScissors +'.</strong> ';
            console.log(playerScissors + ' vs ' + comp);
    
        }else if(playerPaper === comp){
            result.innerHTML = '<strong> YOU WIN! </strong> </br>' +
                               'You chose ' + '<strong>' + playerScissors +'</strong> ' + 
                               ' and computer chose ' + '<strong>' + comp + '.<strong>';
            console.log(playerScissors + ' vs ' + comp);
            playerWin();
    
        }else{
            result.innerHTML = '<strong> YOU LOST! </strong> </br>' +
                               'You chose ' + '<strong>' + playerScissors +'</strong> ' + 
                               ' and computer chose ' + '<strong>' + comp + '.<strong>';
            console.log(playerScissors + ' vs ' + comp);
            compWin();
    
        }
    }
});

document.querySelector('.btn-reset').addEventListener('click', function(){
    manuelStart();
});


function compWin(){
    compPoints = compPoints + 1; 
    compScore.textContent = compPoints;
    
    if(compPoints >= 5) {
        result.style.fontSize = '50px';
        result.innerHTML = 'Game over, <br> You lost! <strong> :( </strong>';
        console.log('GAME OVER');
        gameMatch = false;
    }

}

function playerWin(){
    playerPoints = playerPoints + 1;
    playerScore.textContent = playerPoints;

    if(playerPoints >= 5){
        result.style.fontSize = '50px';
        result.innerHTML = 'Congratulations, <br> You won! <strong> :) </strong>';
        console.log('CONGRATS!');
        gameMatch = false;
    }

}

function manuelStart(){
    gameMatch = true;
    compPoints = 0;
    playerPoints = 0;
    
    playerScore.textContent = '0';
    compScore.textContent = '0';

    result.style.fontSize = '230%';
    result.innerHTML = 'Choose one of the abilities!';
}