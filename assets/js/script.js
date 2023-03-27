// Global variables
var startQuizDiv = document.getElementById("start-quiz-div");
var startQuizBut = document.getElementById("startbtn");
var hdrContainer = document.getElementById("header");
var mnElement = document.getElementById("main-element");


//Clock
var countdownClock = 60;

// Questions and answers array
  var myQuestions = [
  {
      question: "HTML is a... ?",
      answers: ["Programming language", "OOP language", "Markup language"],
      correctAnswer: "Markup language",
  },
 
  {
    question: "HTML uses...?",
    answers: ["User-defined tags", "Predefined tags", "Fixed tags defined by the language"],
    correctAnswer: "Fixed tags defined by the language",
  },

  {
    question: "The HTML tag that specifies a CSS style embedded in an element is the...",
    answers: ["Design", "Style", "Div"],
    correctAnswer: "Style",
  },
  
  {
    question: "Where in an HTML document is the correct place to refer to an external style sheet?",
    answers: ["At the end of the document", "In the <body> section", "In the <head> section "],
    correctAnswer: "In the <head> section ",
  },
  
  {
    question: "What does CSS stand for?",
    answers: [" Computer Style Sheets ", "Cascading Style Sheets", "Computer Sheet Style"],
    correctAnswer: "Cascading Style Sheets",
  },  
 
  {
    question: "Is Javascript a case sensitive language??",
    answers: ["No", "Yes", "Depends"],
    correctAnswer: "Yes",
  },  

 ];


 var currentIndex = 0;

 //Timer 
 var renderTimer = function () {
   var timerElement = document.createElement("div");
   timerElement.textContent = "Time Remaining " + countdownClock;
   timerElement.setAttribute("class", "header-content");
   timerElement.setAttribute("id", "clock");
   hdrContainer.appendChild(timerElement);
 };

 //Once quiz is completed
var renderQuizOver = function () {
 

//Return to main page
  var refreshPage = function () {
    window.location.reload();
  };
  retryButton.addEventListener("click", refreshPage);
};



//Start of game - countdown 
var startTimer = function () {
  var clockElement = document.querySelector("#clock");

  var timerTick = function () {
    if (countdownClock <= 0) {
      clearInterval(clock);
      var questionsContainer = document.getElementById("question-element");
      questionsContainer.remove();
      renderQuizOver();
    } else {
      countdownClock -= 1;
      clockElement.textContent = `Time Remaining: ${countdownClock}`;
    }
  };
  var clock = setInterval(timerTick, 1000);
};



// Render Questions, cycle through questions array
var renderQuestion = function () {
  var currentQuestion = myQuestions[currentIndex];

  var questionsDiv = document.createElement("div");
  questionsDiv.setAttribute("class", "question-div");
  questionsDiv.setAttribute("id", "question-div");

  var questionsContainer = document.createElement("div");
  questionsContainer.setAttribute("id", "question-element");
  questionsContainer.setAttribute("data-answer", currentQuestion.correctAnswer);
  questionsContainer.setAttribute("class", "question-element");

  var questionTitle = document.createElement("h2");
  questionTitle.setAttribute("id", "question");
  questionTitle.textContent = currentQuestion.question;
  questionsDiv.appendChild(questionTitle);

  questionsContainer.appendChild(questionsDiv);
  questionsContainer.addEventListener("click", answerValidation);

  mnElement.appendChild(questionsContainer);

  

  // Answers
  var renderAnswers = function (answer, index) {
    var answerButton = document.createElement("button");
    answerButton.setAttribute("class", "answers-btn");
    answerButton.setAttribute("id", index);
    answerButton.setAttribute("data-option", answer);
    answerButton.textContent = answer;
    questionsDiv.appendChild(answerButton);
  };

  // Create an answerButton for each answer
  currentQuestion.answers.forEach(renderAnswers);
};


var answerValidation = function (event) {
  var currentTarget = event.currentTarget;
  var target = event.target;

  var correctAnswer = currentTarget.getAttribute("data-answer");
  var userAnswer = target.getAttribute("data-option");



  //Ensure the game isn't over 
  if (currentIndex < myQuestions.length - 1) {
    if (correctAnswer === userAnswer) {
      document.getElementById("question-element").remove();
      currentIndex++;
      renderQuestion();
      countdownClock += 5;
    } else {
      document.getElementById("question-element").remove();
      currentIndex++;
      countdownClock -= 5;
      renderQuestion();
    }
  } else {
    renderScore();
  }
};


// Render Score 
var renderScore = function () {
  document.querySelector("#clock").remove();
  document.getElementById("question-element").remove();
  var finalScore = countdownClock;

  var scoreDiv = document.createElement("div");
  scoreDiv.setAttribute("class", "score-div");
  scoreDiv.setAttribute("id", "score-div");

  
//Score container
var scoreContainer = document.createElement("div");
  scoreContainer.setAttribute("id", "score-container");
  scoreContainer.setAttribute("class", "score-container");

var scoreHeader = document.createElement("h2");
  scoreHeader.setAttribute("id", "score-title");
  scoreHeader.textContent = `Your Score Is: ${countdownClock}`;

var enterInitials = document.createElement("p");
  enterInitials.setAttribute("class", "user-initials");
  enterInitials.textContent = `Enter Initials:`;

var submitButton = document.createElement("button");
  submitButton.setAttribute("id", "submit-btn");
  submitButton.setAttribute("class", "submit-btn");
  submitButton.textContent = `Submit Score`;



//User - submit initials
var userInitials = document.createElement("input");
  userInitials.setAttribute("id", "user-input");
  userInitials.setAttribute("class", "user-input");

  scoreContainer.appendChild(scoreDiv);
  scoreContainer.appendChild(scoreHeader);
  scoreContainer.appendChild(enterInitials);
  scoreContainer.appendChild(userInitials);
  scoreContainer.appendChild(submitButton);

  mnElement.appendChild(scoreContainer);



// Save data 
  submitButton.addEventListener("click", saveData);
};



// Start quiz, timer and render question
var startQuiz = function () {
  startQuizDiv.remove();

  renderTimer();

  startTimer();

  renderQuestion();
};
startQuizBut.addEventListener("click", startQuiz);





















