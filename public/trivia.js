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
  $('.category').append("category: " + category.toUpperCase());
  $('.valued').append("points: " + valuedAt);
  $(".question").append(question);
  $(".correctAnswer").append(correctAnswer);
  $(".question, .category .output").delay(10000).queue(function(next) {
    $(this).addClass("tenSeconds");
    next();
  });
})

// $(".question, .category").delay(10000).queue(function(next) {
//   $(this).addClass("hinge");
//   next();
// })

// ***************************CHECK ANSWER & SCORE****************************
$('form').on('submit', function(e) {
  var guess = document.getElementById('guess').value;
  var theCorrectAnswer = document.getElementById('rightAnswer').innerHTML;
  var answerBox = document.getElementById('rightAnswer');
  var points = document.getElementsByClassName('valued');
  e.preventDefault();

  if (guess == theCorrectAnswer) {
    var count = 0;
    count++;
    $('#score').html("Score: " + count);
    newQuestion()
  } else {
    answerBox.style.visibility = 'visible';
  }
});


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
    $('.category').append("category: " + category.toUpperCase());

    $(".question").delay(11000).queue(function(next) {
      $(this).addClass("tenSeconds");
      next();
    });
  })
}
