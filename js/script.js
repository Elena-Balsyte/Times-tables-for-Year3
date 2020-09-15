/*
1) greeting function onClick --> toggles the name input div
2) function randomQuestion ---> loads random question into div#question, (use it after greeting and after submit button)
3) function checkAnswer ----> evaluate the currentQuestion and compare with the currentAnswer,
    run the function gameResult, then clearAns() and randomQuestion()
4) function clearAns sets currentAnswer.value to ""
5) function gameResult() displays Correct or Incorrect to p#gameResult
*/


$(document).ready(function(){
  //console.log("ready");
  let timesTablesQuestion = ['1 X 1','1 X 2', '1 X 3', '1 X 4', '1 X 5', '1 X 6', '1 X 7', '1 x 8', '1 X 9', '1 X 10', '1 X 11', '1 X 12', '2 X 1', '2 X 2', '2 X 3', '2 X 4', '2 X 5', '2 X 6', '2 X 7', '2 X 8', '2 X 9', '2 X 10', '2 X 11', '2 X 12', '5 X 1', '5 X 2', '5 X 3', '5 X 4', '5 X 5', '5 X 6', '5 X 7', '5 X 8', '5 X 9', '5 X 10', '5 X 11', '5 X 12'];
  let question = '';
  const currentAnswer = document.getElementById('ans');
  const gameResult = document.getElementById('gameResult');

  /*=======================================================================*/
  let randomQuestion = function randomQuestion(){
    //create random number
    let randomNumber = Math.random();

  //create a random number between 0 and the number of items in your array
    let randomNumberForsQuestion = randomNumber * timesTablesQuestion.length;

  // round down the number
    let randomIndex = Math.floor(randomNumberForsQuestion);
    question = timesTablesQuestion[randomIndex];
    $('#question').text(question);
};

 /*=======================================================================*/

 var onClick = function() {
   name = document.getElementById("fname").value;
   let hello = "Hello, " + name + "! Let's practice some times tables!";
    //console.log(name);
    $("#name").toggle();
    $('h2').text(hello);
    randomQuestion();
  };
/*=======================================================================*/
  let checkAnswer = function() {

     let showResult = function(){
         let currentQuestion = question.replace('X', '*');
         // console.log(currentQuestion);
         // console.log(eval(currentQuestion));
         // console.log(currentAnswer.value);
        if (eval(currentQuestion) == currentAnswer.value) {
          gameResult.textContent = "Well done! "  + currentQuestion + " = "  + currentAnswer.value;
         }
        else {
        gameResult.textContent = 'Try again!';
         }
    }

    let clearAns = function(){
      currentAnswer.value = '';
      randomQuestion();
    }

 showResult();
 clearAns();

};

    $("button#name-submit").click(onClick);

    $("button#check").click(checkAnswer);

});
