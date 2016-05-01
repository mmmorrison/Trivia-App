// *******************AJAX CALL*******************************
var retrieveData = $.ajax({
  url: 'http://jservice.io/api/random',
  type: 'GET',
  dataType: 'json',
});

retrieveData.done(function(data) {
  var score = 0;
  var total = 0;
  var valuedAt = data[0]["value"];
  var question = data[0]["question"];
  var answer = data[0]["answer"];
  var correctAnswer = data[0]["answer"];
  var category = data[0]["category"]["title"];
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


// ***************************CHECK ANSWER & SCORE****************************
$('form').on('submit', function(e) {
  var guess = document.getElementById('guess').value;
  var theCorrectAnswer = document.getElementById('rightAnswer').innerHTML;
  var answerBox = document.getElementById('rightAnswer').innerHTML;
  var points = document.getElementsByClassName('valued');
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
    var valuedAt = data[0]["value"];
    var question = data[0]["question"];
    var answer = data[0]["answer"];
    var correctAnswer = data[0]["answer"];
    var category = data[0]["category"]["title"];

    // *********************EMPTY DIVS**************************
    $(".correctAnswer").empty().append(correctAnswer);
    $('.category, .question, #points').empty();
    // *********************APPEND NEW QUESTION*********************
    $(".question").append(question);
    $('#points').append(valuedAt);
    $('.category').append(category.toUpperCase());
  })
}
