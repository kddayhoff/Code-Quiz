var quizQuestions = document.getElementById("quizQuestions");
var score = document.getElementById("score");
var startBtn = document.createElement("button");
var seconds = document.getElementById("seconds");
var endTimer = document.getElementsByClassName("timer")
var initials = document.getElementById("initials");
var startBtn = document.getElementById("start-button")
var submitBtn = document.getElementById("submit-button")
var rightWrong = document.getElementById("right-wrong");
var savedInitials = document.getElementById("saved-initials")
var savedScores = JSON.parse(localStorage.getItem("high-scores")) || [];
var quizTimer = 60;
var questionNumber = 0;
var timerInterval;
var finalScore = 0;

var questions = [
   {
      ask: "What year did Marty McFly go back in time to, in the movie <i>Back to the Future</i>?",
      correctAnswer: "1955",
      choices: ["1955", "1985","2055", "1965"]
   },
   {
      ask: "Which one of these is NOT a Quentin Tarantino Film?",
      correctAnswer: "Django",
      choices: ["Jackie Brown","Reservoir Dogs", "Death Proof", "Django"]
   },
   {
      ask: "Which one of these movies is based on a <i>Saturday Night Live</i> skit?",
      correctAnswer: "Blues Brothers",
      choices: ["Anchorman", "Blues Brothers", "Austin Powers", "Tommy Boy"]
   },
   {
      ask: "Which one of these James Bond films do Sean Connery NOT star in?",
      correctAnswer: "Live and Let Die",
      choices: ["Goldfinger", "Live and Let Die", "From Russia With Love", "Diamonds Are Forever"]
   }
];

//Start Quiz timer


startBtn.addEventListener("click", function () {
  event.preventDefault();
  // var quizTimer = 60;
  timerInterval = setInterval(function () {
    quizTimer--;
    seconds.textContent = quizTimer;
    if (quizTimer <= 0) {
      clearInterval(timerInterval);
      alert("Time's Up!");
      endGame();
    }
  }, 1000);
  console.log(quizTimer);
  startBtn.setAttribute("class", "d-none");
  showQuestions();
});
 
 console.log(quizTimer)

//Make questions appear on page and loop them until the user has gone through all choices
function showQuestions () {
   if (questionNumber < questions.length)  {
         quizQuestions.innerHTML = questions[questionNumber].ask;  
     
  
  for (var i = 0; i < questions[questionNumber].choices.length; i++) {
        console.log(questions[questionNumber]);
       
       var btn = document.createElement("button");
       btn.innerText = questions[questionNumber].choices[i];
       quizQuestions.appendChild(btn);
       btn.addEventListener("click", function() {
          checkAnswers();
          showQuestions();
          score.innerText = "Final score: " + finalScore;   
      });       
   } 
};
   if (questionNumber === questions.length){
      endGame();
   }

}


function checkAnswers() {
   var userChoice = event.target.textContent;

   if (userChoice === questions[questionNumber].correctAnswer) {
      questionNumber ++;
      finalScore ++;
      quizTimer += 10;
      console.log(quizTimer);
      rightWrong.innerText = "Right-O-Rini!";
      console.log(questionNumber);
      console.log(finalScore);
   }
   else { 
      (userChoice !== questions[questionNumber].correctAnswer);
      questionNumber ++;
      quizTimer -= 15; 
      console.log(quizTimer);
      console.log(questionNumber);
      rightWrong.innerText = "Wrong-O";
   }
}

   function endGame() {
   clearInterval(timerInterval);
   seconds.setAttribute("class", "d-none");
   initials.removeAttribute("class", "d-none");
   initials.setAttribute("class", "d-block");
   submitBtn.setAttribute("class", "d-block")
   rightWrong.setAttribute("class", "d-none")
   //add submit button for initials
   
     quizQuestions.innerHTML = "You Scored " + finalScore + " points!";
     //ccall function for local storage
     submitBtn.addEventListener("click", function () {
        var userInitials = initials.value;
        if (userInitials == null || userInitials == ""){
         alert("Please Enter Your Initials");
         return false;
        }
        savedScores.push("Name: " + userInitials + " | " + " Score: " + finalScore);
        localStorage.setItem("high-scores", JSON.stringify(savedScores));
displayHighScores()
     })
     
   }

   function displayHighScores () {
      for (var i = 0; i < savedScores.length; i++){
         var scoreList = document.createElement("li")
         scoreList.innerText = savedScores[i];
         savedInitials.appendChild(scoreList)
      }

   }




