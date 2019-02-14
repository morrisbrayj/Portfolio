/*
GAME RULES:

- The game has 2 players, playing in rounds
- each turn, a player rolls a dice as many times as they whish. Each result is added to their ROUND score
- BUT, if the player rolls a 1, all their ROUND score gets lost. After that, it's the next player's turn
- If a player rolls 2 sixes in a row, they also lose their global score
- The player can choose to 'Hold', which means that their ROUND score is added to their GLBAL score. After that, it's the next player's turn
- The first player to reach 50 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, interScore, dice, doubleSix;

var input, winningScore;




init();

// dot '.' accesses a class, style interacts with css

/*
var x = document.querySelector('#score-0').textContent;
read element from page and assign it to variable
*/

function check () {
    if(interScore === 6 && dice === 6){ 
        doubleSix = true;
} 
 };

function nextPlayer (){
  
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
    
        document.querySelector('#name-' + activePlayer).textContent = 'PLAYER ' + (activePlayer + 1);
    
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';  
    
        interScore = 0;
        doubleSix = false;
};    


document.querySelector('.btn-roll').addEventListener('click', function(){
    
    if(gamePlaying){
        
    dice ? interScore = dice : interScore = 0;    
    dice = Math.floor(Math.random()*6) +1;                                                                                                 
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    if(dice !== 1){ 
        
        check();
        
        if (!doubleSix){
         roundScore += dice;
         document.querySelector('#current-' + activePlayer).textContent= roundScore;
          
         }else{ 
          roundScore = 0;
          scores[activePlayer] = 0;
          document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
          document.querySelector('#current-' + activePlayer).textContent= roundScore;
          document.querySelector('#name-' + activePlayer).textContent = 'ROLLED DOUBLE SIXES';     
          nextPlayer();  
      }
     }else{
        document.querySelector('#name-' + activePlayer).textContent = 'ROLLED A ONE';
        nextPlayer();
    }
 }
});  
    


document.querySelector('.btn-hold').addEventListener('click', function(){
    
    if(gamePlaying){
    
        
    scores[activePlayer] += roundScore;
    
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
   
        
    if(input){ input = document.querySelector('.final-score').value; }

   (input< 1000 && input > 0)? winningScore = input : winningScore = 50; 
    
    
    if (scores[activePlayer]< winningScore){
         nextPlayer();
    }else{
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    }
  }
});                                                   


document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
   
    
    document.querySelector('#name-0').textContent = 'PLAYER1'  
    document.querySelector('#name-1').textContent = 'PLAYER2'
    
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.querySelector('.player-0-panel').classList.add('active');
    
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'block';
    
};










