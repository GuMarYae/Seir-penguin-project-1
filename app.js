/* ******************************************
 ************* App State ********************
 ****************************************** */

const state = {
  player1: 0,
  player2: 0,
  currentQuestion: {},
};

/* ******************************************
 ************* DOM Element *******************
 *********************************************/

const $questions = $("#questions");
// const $answer = $("#answer")
const $a = $("#a");
const $b = $("#b");
const $c = $("#c");
const $d = $("#d");

const $player1Score = $("#player1 h4");
const $player2Score = $("#player2 h4");

/* ******************************************
 ************* functions *******************
 *********************************************/

// console.log($d)

const URL =
  "https://cdn.contentful.com/spaces/vcds7w56i708/environments/master/entries?access_token=pGzEHrJ-qIruLLoaxmXNvlHhfYn8k1VclHPq-ylZePI&content_type=triviaQ";
$.ajax(URL).then((data) => {
  
  questions = data.items.map((q) => q.fields);  //the map function
     console.log(data);
     console.log(questions);
});

let questions = [];
