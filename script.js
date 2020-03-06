var quizQuestions = document.getElementById("quizQuestions");
var score = document.getElementById("score");
var startBtn = document.createElement("button");var seconds = document.getElementById("seconds");

var questionNumber = 0;
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
startBtn.innerHTML = "Start Quiz!";

startBtn.addEventListener("click", function() {
 event.preventDefault();
   var quizTimer = 60;
   var startBtn = setInterval(function() {
      quizTimer --;
      seconds.textContent = quizTimer;
      if(quizTimer === 0) {
         clearInterval(startBtn);
         alert("Womp Womp, try again! Unless you're chicken...");
      }
   }, 1000);
   console.log(quizTimer);

   function startBtn() {
       document.getElementById("button") = --quizTimer;
      }
     });
  document.body.appendChild(startBtn);

//Make questions appear on page and loop them until the user has gone through all choices
function showQuestions () {
   if (questionNumber < questions.length)  {
         quizQuestions.innerHTML = questions[questionNumber].ask;  
      };
  
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
}
showQuestions()

function checkAnswers() {
   var userChoice = event.target.textContent;

   if (userChoice === questions[questionNumber].correctAnswer) {
      questionNumber ++;
      finalScore ++;
      document.getElementById("right-wrong").innerText = "right-o-rini!";
      console.log(questionNumber);
      console.log(finalScore);
   }
   else { 
      (userChoice !== questions[questionNumber].correctAnswer);
      questionNumber ++;
      console.log(questionNumber);
      document.getElementById("right-wrong").innerText = "wrong-o";
   }
}

