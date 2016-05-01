// *******************AJAX CALL*******************************
var retrieveData = $.ajax({
  url: 'http://jservice.io/api/random',
  type: 'GET',
  dataType: 'json',
});

retrieveData.done(function(data) {
<<<<<<< HEAD
  var score = 0;
  var total = 0;
=======
  console.log("SUCCESS");
>>>>>>> moved files
  var valuedAt = data[0]["value"];
  var question = data[0]["question"];
  var answer = data[0]["answer"];
  var correctAnswer = data[0]["answer"];
  var category = data[0]["category"]["title"];
<<<<<<< HEAD
  var theCorrectAnswer = document.getElementById('rightAnswer').innerHTML;

  console.log(answer);


  if (valuedAt === null){
    newQuestion()
    console.log('points are null');
  }
  // **********************APPENDS QUESTION & CATEGORY***************************
  $('.category').append(category.toUpperCase());
  $(".correctAnswer").append(correctAnswer);
  $('#points').append(valuedAt);
  $(".question").append(question);

});
=======
  // **********************APPENDS QUESTION & CATEGORY***************************
  $('.category').append(category.toUpperCase());
  $(".correctAnswer").append(correctAnswer);
  $('.valued').append("points: " + valuedAt);
  $(".question").append(question);
})
>>>>>>> moved files


// ***************************CHECK ANSWER & SCORE****************************
$('form').on('submit', function(e) {
<<<<<<< HEAD
=======
  // var rightQuestion = document.getElementsByClassName('question');
>>>>>>> moved files
  var guess = document.getElementById('guess').value;
  var theCorrectAnswer = document.getElementById('rightAnswer').innerHTML;
  var answerBox = document.getElementById('rightAnswer').innerHTML;
  var points = document.getElementsByClassName('valued');
<<<<<<< HEAD
  var score = document.getElementById('valued').innerHTML;
  var somePoints = document.getElementById('points').innerHTML;
  e.preventDefault();


  $(document).ready(function(){
    if (guess.toLowerCase === theCorrectAnswer.toLowerCase) {
      total = somePoints + score;
      $('#score').append(total);

  } else {
    if (guess.toLowerCase !== theCorrectAnswer.toLowerCase) {
      $('#rightAnswer').show();
  }
}
  // *******************CLEARS INPUT FIELD******************************
  document.getElementById("guess").value = '';
  newQuestion();
  })
=======
  e.preventDefault();
$(document).ready(function(){
  if (guess.toLowerCase == theCorrectAnswer.toLowerCase) {
    var score = 0;
    score++
    $("#score").html(score);
  } if (guess.toLowerCase == theCorrectAnswer.toLowerCase) {
    $('#rightAnswer').show().fadeOut();
  }
  // *******************CLEARS INPUT FIELD******************************
  document.getElementById("guess").value = '';
  newQuestion();
})
>>>>>>> moved files
})
retrieveData.fail(function(data) {
    console.log("FAILED");
  })
  // *************************NEW QUESTION***********************
function newQuestion() {
  var retrieveData = $.ajax({
    url: 'http://jservice.io/api/random',
    type: 'GET',
    dataType: 'json',
  })

  retrieveData.done(function(data) {
<<<<<<< HEAD
=======
    console.log("NEW QUESTION SUCCESS");
>>>>>>> moved files
    var valuedAt = data[0]["value"];
    var question = data[0]["question"];
    var answer = data[0]["answer"];
    var correctAnswer = data[0]["answer"];
    var category = data[0]["category"]["title"];

    // *********************EMPTY DIVS**************************
    $(".correctAnswer").empty().append(correctAnswer);
<<<<<<< HEAD
    $('.category, .question, #points').empty();
    // *********************APPEND NEW QUESTION*********************
    $(".question").append(question);
    $('#points').append(valuedAt);
=======
    $('.category, .question, .valued').empty();
    // *********************APPEND NEW QUESTION*********************
    $(".question").append(question);
    $('.valued').append("points: " + valuedAt);
>>>>>>> moved files
    $('.category').append(category.toUpperCase());
  })
}
