//Create 'function (rightAnswer)' [do I need to have a different named function for every question? Maybe not by using THIS] if else statements for answers to the questions (if button is clicked onClick() event), function validate() {
  //variables for questions should be ARRAYS
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
//depending on the answer of the question before will determine whether  "Right-a-rini" or "wrong-o"  will show up under the question -- write to page (document.innterText or HTML) - ex: if (question1 == answer2a);  write to page "correct", else write page "incorrect"
//create a delay after showing the right or wrong then it will move on to the next sections

//DON'T HARD CODE IN HTML! PUT THINGS INTO VARIABLES! STRINGS OBJECTS! Make everything dynamic through HTML, looks aren't important - it's what's on the inside that counts
//CREATE ELEMENT!!!
//get the start button to attach to the timer

//questions: -- 1) In what year did Marty travel backi in time to in the movie Back to the Future? a) 1955 b) 1985 c) 1965 d) 2155 
//question 2: Which one of these is NOT a Quentin Tarantino Film: a) Jackie Brown b)Reservoir Dogs c)Death Proof d)Django
//question 3: Which one of these movies is based on an SNL skit? a) Anchorman b) Blues Brothers c) Austin Powers  d) Tommy Boy
//question 4: Which one of these James Bond films did Sean Connery NOT star in? a) Goldfinger b) Live and Let Die c) From Russia with Love d) Diamonds Are Forever
//add push array to count how many right answers there (if true push to new arraw which will output on to page
//will need to use local storage to save initials to page, jSon.pars will help avoid listing out each letter when putting on page, need to take list, it's an array (obj w/ scores) that are strings, getItemfrom local storage -- need to use for loop to turn it back into an array
//'return' ex return a + b to show answer (return wrong/right). 