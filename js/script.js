$(document).ready(function(){
  let timesTablesQuestion = ['1 X 1','1 X 2', '1 X 3', '1 X 4', '1 X 5', '1 X 6', '1 X 7', '1 X 8', '1 X 9', '1 X 10', '1 X 11', '1 X 12', '2 X 1', '2 X 2', '2 X 3', '2 X 4', '2 X 5', '2 X 6', '2 X 7', '2 X 8', '2 X 9', '2 X 10', '2 X 11', '2 X 12', '5 X 1', '5 X 2', '5 X 3', '5 X 4', '5 X 5', '5 X 6', '5 X 7', '5 X 8', '5 X 9', '5 X 10', '5 X 11', '5 X 12'];
  let question = '';
  let i;
  const currentAnswer = document.getElementById('ans');
  const questionResult = document.getElementById('questionResult');
  let correctScore = document.getElementById('correctScore');
  let incorrectScore = document.getElementById("incorrectScore");
  let greenScore = "";
  let redScore = "";
  let gameResult = document.getElementById('gameResult');
  let winner = "";
  let lost = "";
  let wrongAnswers = [];
  let wrongAnswersList = document.getElementById('wrong-answers');
  let startNewGame = document.getElementById('startNewGame');
  /*=======================================================================*/
  let randomQuestion = function randomQuestion(){
    //create random number
    let randomNumber = Math.random();

  //create a random number between 0 and the number of items in your array
    let randomNumberForQuestion = randomNumber * timesTablesQuestion.length;

  // round down the number
    let randomIndex = Math.floor(randomNumberForQuestion);
    question = timesTablesQuestion[randomIndex];
    $('#question').text(question);
};

  let findAnswer = function(){
  result = eval(wrongAnswers[i]);
  return result;
};

  function makeList(arr){
  for(i=0; i<arr.length; i++){
    let realAnswer = findAnswer();
    let listItem = document.createElement('li');
    listItem.innerText = arr[i] + " = " + realAnswer;
    wrongAnswersList.appendChild(listItem);
  }
};

  function openPanel() {
  document.getElementById('mySidepanel').style.width = "75%";
};

  function closePanel() {
  document.getElementById('mySidepanel').style.width = "0px";
  startGame();
}

 /*=======================================================================*/
  function startGame(){
   greenScore = 0;
   redScore = 0;
   correctScore.textContent = greenScore;
   incorrectScore.textContent = redScore;
   wrongAnswers = [];
   $('#wrong-answers').empty();
 };

  var endGame = function(){
    if(redScore == 0) {
      winner = "Well done! All answers were correct!"
      gameResult.textContent = winner;
      openPanel();
    }else if(greenScore > redScore){
      winner = "Well done! Great results! But maybe you wanna have a look at these:"
      gameResult.textContent = winner;
      makeList(wrongAnswers);
      openPanel();
    } else if(greenScore < redScore) {
      lost = `You still need to practice! Especially these: `;
      gameResult.textContent = lost;
      makeList(wrongAnswers);
      openPanel();
    } else if(greenScore == redScore){
      winner = "Keep practicing! Remember:";
      gameResult.textContent = winner;
      makeList(wrongAnswers);
      openPanel();
    }
    questionResult.textContent = `Let's see how many times tables you already know!`;
  };

   var onClick = function() {
   name = document.getElementById("fname").value;
   let hello = "Hello, " + name + "! Let's practice some times tables!";
    $("#name").toggle();
    $('h2').text(hello);
    randomQuestion();
    startGame();
  };
/*=======================================================================*/
   let checkAnswer = function() {
     let showAnswer = function(){
         let currentQuestion = question.replace('X', '*');
        if (eval(currentQuestion) == currentAnswer.value) {
          questionResult.textContent = "Well done! "  + currentQuestion + " = "  + currentAnswer.value;
          greenScore++;
          correctScore.textContent = greenScore;
         }
        else {
        questionResult.textContent = 'Try again!';
          redScore++;
          incorrectScore.textContent = redScore;
          wrongAnswers.push(currentQuestion);
         }
    }

    let clearAns = function(){
      currentAnswer.value = '';
      randomQuestion();
    }
    if(greenScore + redScore < 10){
      showAnswer();
      clearAns();
    } else {
      endGame();
    }

};

    $("button#name-submit").click(onClick);
    $("button#check").click(checkAnswer);
    $('button#reset').click(endGame);
    $('a.closebtn').click(closePanel);
    $('button#startNewGame').click(closePanel);
});
