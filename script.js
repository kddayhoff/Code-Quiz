var q1answers = ["1955","1985","1965","2155"];
var q2answers = ["Jackie Brown","ReservoirDogs","Death Proof","Django"];
var q3answers = ["Anchorman","Blues Brothers","Austin Powers","Tommy Boy"];
var q4answers = ["Goldfinger","Live and Let Die","From Russia with Love","Diamonds are Forever"];
var seconds = document.getElementById("seconds");
var startBtn = document.createElement("button");
startBtn.innerHTML = "Start Quiz!";

startBtn.addEventListener("click", function() {
 //change value below to 60 seconds to start countdown at 60  
 event.preventDefault();
   var quizTimer = 5;
   var startBtn = setInterval(function() {
      quizTimer --;
      seconds.textContent = quizTimer;
      if(quizTimer === 0) {
         clearInterval(startBtn);
      }
   }, 1000);
   console.log(quizTimer);

   function startBtn() {
       document.createElement("h3") = --quizTimer;
      }
     });
  document.body.appendChild(startBtn);
  
     //brings up first question of quiz simultaneously as the timer starts
  startBtn.addEventListener("click", function() { 
     var question1 = document.createElement("p");      question1.innerHTML = "What year did Marty McFly go back in time to, in the movie <i>Back to the Future</i>?";                
      document.getElementById("question1").appendChild(question1);

  });




/*document.getElementById("quiz");

function answer1();
for (var i = 0; i < q1answers.length; i++) {
   if([0]==true);
   document.write("right-o-rini");
   else 
      document.write("wrong-o");
   //if this is true, add 10 sec to timer, if answer1 is false, remove 15 sec from timer 
} */
