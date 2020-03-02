
var quiz = document.getElementById("quiz");
var score = document.getElementById("score");
var seconds = document.getElementById("seconds");
var startBtn = document.createElement("button");
var questions = [
   {
      text: "What year did Marty McFly go back in time to, in the movie <i>Back to the Future</i>?",
      correctAnswer: "1955",
      choices: ["1955", "1985","2055", "1965"]
   },
   {
      text: "Which one of these is NOT a Quentin Tarantino Film?",
      correctAnswer: "Django",
      choices: ["Jackie Brown","Reservoir Dogs", "Death Proof", "Django"]
   },
   {
      text: "Which one of these movies is based on a <i>Saturday Night Live</i> skit?",
      correctAnswer: "Blues Brothers",
      choices: ["Anchorman", "Blues Brothers", "Austin Powers", "Tommy Boy"]
   },
   {
      text: "Which one of these James Bond films do Sean Connery NOT star in?",
      correctAnswer: "Live and Let Die",
      choices: ["Goldfinger", "Live and Let Die", "From Russia With Love", "Diamonds Are Forever"]
   }
]


//for loop needs event to move on to next question

startBtn.innerHTML = "Start Quiz!";


startBtn.addEventListener("click", function() {
 event.preventDefault();
 //change value below to 60 seconds to start countdown at 60  
   var quizTimer = 5;
   var startBtn = setInterval(function() {
      quizTimer --;
      seconds.textContent = quizTimer;
      if(quizTimer === 0) {
         clearInterval(startBtn);
         document.write("Womp Womp, try again! Unless you're chicken...");
      }
   }, 1000);
   console.log(quizTimer);

   function startBtn() {
       document.createElement("h3") = --quizTimer;
      }
     });
  document.body.appendChild(startBtn);
//end timer
//start questions
  var questionNumber = 0;
  var finalScore = [];
  function startQuiz(){
     //quiz.innerHTML = questions[0].text;
      //for (var i = 0; i < questions.text.length; i++); {
        // console.log(i);
         for (var i = 0; i < questions; i++) {
            quiz.innerHTML = questions[i].text;
            console.log(questions[i].choices);
            console.log(questions[i].correctAnswer);
      var questionChoices = createElement("button");
      button.textContent = "questions.text";         //+= is x = x + y
         var userChoices = document.createElement("button");
         userChoices.innerHTML = questions[0].text[i];
      }
  }

  //document.body.appendChild(userChoices);
   console.log(questionNumber);
      console.log(questions);
      console.log(questions[0]);
   