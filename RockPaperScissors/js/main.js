// Code has bugs still if either user inputs the wrong spelling it automatically adds 1 to the draw score instead of keeping scores at 0


// Code towards bottom contains jQuery to help re-run the game

// it's essential that code below to store scores in variable is OUTSIDE the function call
var winUser1 = 0;
var winUser2 = 0;
var draw = 0;

function play() {
    var RPS = ['rock', 'paper', 'scissors'];
    var user1 = prompt('Select rock, paper, or scissors!').toLowerCase();
    var user2 = prompt("Ok, user2 it's your turn. Select rock, paper, or scissors!").toLowerCase();

    // the variables below are declared to store the score for each player. variables are initially set to 0 and incremented when a player wins
    // THESE VARIABLES BELOW HAVE TO BE OUTSIDE THE FUNCTION! OR THE SCORE WILL KEEP RESETTING TO 0...
    // var winUser1 = 0;
    // var winUser2 = 0;
    // var draw = 0;

    if(user1 === RPS[0] && user2 === RPS[1]) {
      console.log("user2, you're the winner, paper beats rock!");
      winUser2 ++;
    } else if(user1 === RPS[0] && user2 === RPS[2]) {
      console.log("user1, you're the winner, rock beats scissors!");
      winUser1 ++;
    } else if(user1 === RPS[0] && user2 === RPS[0]) {
      console.log("You both tie since you both chose rock!");
      draw ++;
    } else if(user1 === RPS[1] && user2 === RPS[0]) {
      console.log("user 1, you're the winner, paper beats rock!");
      winUser1 ++;
    } else if(user1 === RPS[1] && user2 === RPS[1]) {
      console.log("You both tie since you both chose paper!");
      draw ++;
    } else if(user1 === RPS[1] && user2 === RPS[2]) {
      console.log("user 2, you're the winner, scissors beats paper!");
      winUser2 ++;
    } else if(user1 === RPS[2] && user2 === RPS[0]) {
      console.log("user2, you're the winner, rock beats scissors!");
      winUser2 ++;
    } else if(user1 === RPS[2] && user2 === RPS[1]) {
      console.log("user1, you're the winner, scissors beats paper!");
      winUser1 ++;
    } else {
      console.log("You both tie since you both chose scissors!");
      draw ++;
    }
    
    // var user1Won = [];
    // var user2Won = [];

    // Whenever a key is pressed, alert "pressed a button".
    // document.onkeyup = function() {
    //   alert("pressed a button");
    // };

    // the code below targets a specific element and the .innerHTML then replaces whatever HTML was in the targeted ID, and replaces it with HTML that .innerHTML is set equals to
    var showDraw = document.getElementById("draw").innerHTML = "Draw: " + draw;
    var showScore1 = document.getElementById("score1").innerHTML = "User1: " + winUser1;
    var showScore2 = document.getElementById("score2").innerHTML = "User2: " + winUser2;
    };
    // show(showDraw);
    // show(showScore1);
    // show(showScore2);

function replay() {
    var askReplay = confirm("Another game? Press the 'OK' button. Otherwise stop playing by pressing 'Cancel'");
    if(askReplay === true) {
      play(); 
    } else {
      console.log("See ya later");
    }
}
    // function replayGame() {
    //   if(replayGame === true) {
    //     var user1 = prompt('Select rock, paper, or scissors!').toLowerCase();
    //     var user2 = prompt("Ok, user2 it's your turn. Select rock,paper, or scissors!").toLowerCase();
    //   } else {
    //     console.log("See ya later");
    //   }
 
    // replayGame(); 



    // this function main below is to text if jQuery is working
function main() {
    var $button = $('#button').on('click', function(){
        replay();
    });
    // the code below will verify if jQuery is working. If it is working, 
    // the alert will pop up and state "[object Object]"
    // alert($button);
}

$(document).ready(main);