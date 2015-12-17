// *******************AJAX CALL*******************************
var retrieveData = $.ajax({
  url: 'http://jservice.io/api/random',
  type: 'GET',
  dataType: 'json',
});

retrieveData.done(function(data) {
  console.log("SUCCESS");
  var question = data[0]["question"];
  var answer = data[0]["answer"];
  var correctAnswer = data[0]["answer"];
  var category = data[0]["category"]["title"]

  $('.category').append(category);
  $(".question").append(question);
  $(".correctAnswer").append(correctAnswer);
  $(".question, .category").delay(10000).queue(function(next) {
    $(this).addClass("tenSeconds");
    next();
  });
})

$(".question, .category").delay(10000).queue(function(next) {
  $(this).addClass("hinge");
  next();
})


// ***************************CHECK ANSWER****************************
$('form').on('submit', function(e) {
  var guess = document.getElementById('guess').value;
  var theCorrectAnswer = document.getElementById('rightAnswer').innerHTML;
  var answerBox = document.getElementById('rightAnswer');
  e.preventDefault();

  if (guess == theCorrectAnswer) {
    alert("right")
  } else {
    answerBox.style.visibility = 'visible';
  }
})

retrieveData.fail(function(data) {
    console.log("FAILED");
  })
  // *************************SKIP BUTTON***********************
function newQuestion() {
  var retrieveData = $.ajax({
    url: 'http://jservice.io/api/random',
    type: 'GET',
    dataType: 'json',
  })

  retrieveData.done(function(data) {
    console.log("NEW QUESTION SUCCESS");
    var question = data[0]["question"];
    var answer = data[0]["answer"];
    var correctAnswer = data[0]["answer"];
    var category = data[0]["category"]["title"]

    $('.category, .question').empty();
    $(".question").append(question);
    $(".category").append(category);
    $(".correctAnswer").empty().append(correctAnswer);
    $(".question").delay(11000).queue(function(next) {
      $(this).addClass("tenSeconds");
      next();
    });

    $(".category").delay(10000).queue(function(next) {
      $(this).addClass(" tenSeconds");
      next();
    })
  })
}
