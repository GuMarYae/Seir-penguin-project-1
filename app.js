/* ******************************************
 ************* App State ********************
 ****************************************** */

const state = {
  player1: 0,
  player2: 0,
  currentQuestion: {},
  turn: 1, //player one goes first

  count:1
};

/* ******************************************
 ************* DOM Element *******************
 *********************************************/

const $questions = $("#questions");
let answer; //I guess const had to be changed beccause const has to equal something at all times(I guess)
const $a = $("#a");
const $b = $("#b");
const $c = $("#c");
const $d = $("#d");

const $player1Score = $("#player1 h4");
const $player2Score = $("#player2 h4");



/* ******************************************
 ************* Functions ***************
 *********************************************/

const setBoard = (q) => {
  
  // let winningPlayer;
  // alert("Welcome. First Player to 11 is the " +winningPlayer+ "!")

  const randomIndex = Math.floor(Math.random() * q.length); //I would put 20 since there 20 items in the array but The can shrink or stretch in reality so its best to have the computer adapt to the length of the array at all times.
  const randomQuestion = q[randomIndex];
  // question updates
  $questions.text(state.count+". "+randomQuestion.question);
  $a.text(randomQuestion.a);
  $b.text(randomQuestion.b);
  $c.text(randomQuestion.c);
  $d.text(randomQuestion.d);
  answer = randomQuestion.answer; // answer is always created to change
};
//=========================
$a.on("click", () => {
  if ($a.text() === answer) {
    alert("Exactamundo");
    updateScore();
  } else {
    alert("incorrect");
  }
  switchTurn();

  setBoard(questions);
});
//=======
$b.on("click", () => {
  if ($b.text() === answer) {
    alert("Lets GOOOOO");
    updateScore();
  } else {
    alert("naw");
  }
  switchTurn();
  setBoard(questions);
});
//=======
$c.on("click", () => {
  if ($c.text() === answer) {
    alert("yup true");
    updateScore();
  } else {
    alert("..  um..  you didnt know that one?");
  }
  switchTurn();
  setBoard(questions);
});
//=======
$d.on("click", () => {
  if ($d.text() === answer) {
    alert("Sure you riiight!!");
    updateScore();
  } else {
    alert("lol..woow  . no");
  }
  switchTurn();
  setBoard(questions);
});

//==========================
let switchTurn = () => {
  if (state.turn === 1) {
    state.turn = 2;
  } else {
    state.turn = 1;
  }
  state.count++
  $("#turn").text("Player " + state.turn + " turn");
};
//==========================
let updateScore = () => {
  if (state.turn === 1) {
    // console.log("player 1 score before " +state.player1)
    state.player1++;
    checkPlayer1Wins();
    // console.log("player 1 score after " +state.player1)
  } else {
    state.player2++;
    checkPlayer2Wins();
  }
  $player1Score.text(state.player1);
  //alert ("Next players turn") // couldnt figure out  how to make this work if a player got it wrong
  $player2Score.text(state.player2);
};
//==========================

//player scores
$player1Score.text(state.player1);
$player2Score.text(state.player2);

/* ******************************************
 ************* Winner *******************
 *********************************************/

//====office hours really helps sheeeesh

function checkPlayer1Wins() {
  //This is invoked in line 102 and 108
  if (state.player1 === 10) {
    alert("player 1 wins");
    location.reload(); //resets the game
  }
}
function checkPlayer2Wins() {
  //This is invoked in line 102 and 108
  if (state.player2 === 10) {
    alert("player 2 wins");
    location.reload(); //resets the game
  }
}
//====office hours really helps sheeeesh

/* ******************************************
 ************* Main App Logic ***************
 *********************************************/

// console.log($d)
let questions = [];
const URL =
  "https://cdn.contentful.com/spaces/vcds7w56i708/environments/master/entries?access_token=pGzEHrJ-qIruLLoaxmXNvlHhfYn8k1VclHPq-ylZePI&content_type=triviaQ";
$.ajax(URL).then((data) => {
  questions = data.items.map((q) => q.fields); //the map function
  console.log(data);
  console.log(questions);
  setBoard(questions);
});
