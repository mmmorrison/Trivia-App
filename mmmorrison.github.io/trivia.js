// *******************AJAX CALL*******************************
var retrieveData = $.ajax({
  url: 'http://jservice.io/api/random',
  type: 'GET',
  dataType: 'json',
});

retrieveData.done(function(data) {
  console.log("SUCCESS");
  var valuedAt = data[0]["value"];
  var question = data[0]["question"];
  var answer = data[0]["answer"];
  var correctAnswer = data[0]["answer"];
  var category = data[0]["category"]["title"];
  // **********************APPENDS QUESTION & CATEGORY***************************
  $('.category').append(category.toUpperCase());
  $(".correctAnswer").append(correctAnswer);
  $('.valued').append("points: " + valuedAt);
  $(".question").append(question);
})


// ***************************CHECK ANSWER & SCORE****************************
$('form').on('submit', function(e) {
  // var rightQuestion = document.getElementsByClassName('question');
  var guess = document.getElementById('guess').value;
  var theCorrectAnswer = document.getElementById('rightAnswer').innerHTML;
  var answerBox = document.getElementById('rightAnswer').innerHTML;
  var points = document.getElementsByClassName('valued');
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
    console.log("NEW QUESTION SUCCESS");
    var valuedAt = data[0]["value"];
    var question = data[0]["question"];
    var answer = data[0]["answer"];
    var correctAnswer = data[0]["answer"];
    var category = data[0]["category"]["title"];

    // *********************EMPTY DIVS**************************
    $(".correctAnswer").empty().append(correctAnswer);
    $('.category, .question, .valued').empty();
    // *********************APPEND NEW QUESTION*********************
    $(".question").append(question);
    $('.valued').append("points: " + valuedAt);
    $('.category').append(category.toUpperCase());
  })
}
