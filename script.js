var quizQuestions = document.getElementById("quizQuestions");
var score = document.getElementById("score");
var seconds = document.getElementById("seconds");
var startBtn = document.createElement("button");
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
         alert("Womp Womp, try again! Unless you're chicken...");
      }
   }, 1000);
   console.log(quizTimer);
   //put end of game function here (where Tim called the hide styles) - to go to final page if time runs out

   function startBtn() {
       document.createElement("h3") = --quizTimer;
      }
     });
  document.body.appendChild(startBtn);


function showQuestions () {
   if (questionNumber < 4)  {
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

       //var userChoice = event.target.textContent;
       //toggle display none
       
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
   //btn.addEventListener("click", showQuestions);
   }
   else { 
      (userChoice !== questions[questionNumber].correctAnswer);
      questionNumber ++;
      console.log(questionNumber);
      document.getElementById("right-wrong").innerText = "wrong-o";
   }
}

//end game function here - bring up total score
//showQuestions(0);

//   if ( questions.choices.indexOf(userChoice) !== -1 {
//    questionNumber ++;
//    finalScore ++;

//    alert("Right-o-rini!");
//   }
//    else { (questions.choices != questions.correctAnswer); 
//    questionNumber ++; 
//    alert("Wrong-O!"); 
   

// checkAnswers();

  //  if ("" === true)
 //   change counter up one if right, need to change questionNumber plus one no matter what.
 //else just move on to next question which means questionNumber + 1 

//variable to move questions forward -- which is what I will need to put into my questionNumber variable -- need to create function that will compare my answers 
 //easier to push into two arrays instead of an object (per terrence) --- maybe
 //to hide functions style.display - pull id from html -- visible/invisible takes up space, none will take up no space
//json.parse -- create variable that var scoreArray (ex) = json.parse(localstorage.getitem(score)) -- score is the increment variable that we push a correct answer into
//make it purty
