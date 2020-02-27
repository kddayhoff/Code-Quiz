//Need to hide each section until it is called by clicking a button on the page before - Start Quiz for the first button will show questions 1, any of the buttons for the questions will hide that page and move on to the next question
//Create 'function (rightAnswer)' [do I need to have a different named function for every question? Maybe not by using THIS] if else statements for answers to the questions (if button is clicked onClick() event), function validate() {
 /*var answer1 = document.getElementsByClassName("answer-button1");
 for (var i = 0, i < answer1.length; i++) {
   if (answer[i].clicked) {
     if( [i].value == "Cascading Style Sheets")
        document.write("right-o-rini");
     else
        document.write("wrong-o");
     break;
   } } }   
   ---will need a var array with ids #answer1a #answer1b etc
   ---will need to add every right answer to in order to display the total score at the end 'var totalScore= []' <-- 
   document.getElementById("score").innerHTML = totalScore.length; 
//depending on the answer of the question before will determine whether  "Right-a-rini" or "wrong-o"  will show up under the question -- write to page - ex: if (question1 == answer2a);  write to page "correct", else write page "incorrect"
//create a delay after showing the right or wrong then it will move on to the next sections
