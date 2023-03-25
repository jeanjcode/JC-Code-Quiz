// Start button 
var startBtn = document.getElementById("start");

//Enable button
startBtn.addEventListener("click", function () {
  StartQuiz();
  $("#start").remove();  
});


//VAR
var questions = document.getElementById("questions");
var a = document.querySelector("#a");
var b = document.querySelector("#b");
var c = document.querySelector("#c");


var Choices = document.querySelectorAll(".choice");
var finalScore = document.querySelector(".finalScore");
var Results = document.getElementById("results");
var Initials = document.getElementById("userInitials");
var submitBtn = document.querySelector("#submitBtn");
var highscores = document.querySelector("scores");



// Questions and answers
var questions = [
  {
    question:
      "Q1. ...",

    A: "A. ...",
    B: "B. ...",
    C: "C. ...",
    // ans: "A./B./C.",
  },
  {
    question:
      "Q2. ...",

    A: "A. ...",
    B: "B. ...",
    C: "C. ...",
    // ans: "A./B./C.",
  },
  {
    question:
      "Q3. ...",

    A: "A. ...",
    B: "B. ...",
    C: "C. ...",
    // ans: "A./B./C.",
  },
  {
    question:
      "Q4. ...",

    A: "A. ...",
    B: "B. ...",
    C: "C. ...",
    // ans: "A./B./C.",
  },  {
    question:
      "Q5. ...",

    A: "A. ...",
    B: "B. ...",
    C: "C. ...",
    // ans: "A./B./C.",
  },  {
    question:
      "Q6. ...",

    A: "A. ...",
    B: "B. ...",
    C: "C. ...",
    // ans: "A./B./C.",
  },
  ];

//Questions
var questionNumber = 0;
var lastQuestion = questions.length - 0;
var result = 0;

function displayquestions() {
  var quiz = questions;

questions.innerHTML = quiz[questionNumber].question; 


//Choices
  a.innerHTML = quiz[questionNumber].A;
  b.innerHTML = quiz[questionNumber].B;
  c.innerHTML = quiz[questionNumber].C;

//Checking choices against answers 
Choices.forEach(choicesButton) => {
  choicesButton.addEventListener("click", function () {
    var userSelec = choicesButton.textContent;
    checkAns(userSelec);
  )
 
  }};
  




