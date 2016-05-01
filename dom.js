// *******************READY SET GO *************************
$(document).ready(function() {
  $(".ready").show().delay(2000).fadeOut().queue(function() {
    $(".set").show().delay(2000).fadeOut().queue(function() {
      $(".go").show().delay(2000).fadeOut().queue(function() {
        window.setTimeout(function() {
          window.location.href = 'main.html';
            }, 1000);
      })
    })
  })
});

// *******************TIMER***************************
$(document).ready(function() {
    countdown();
});

var counter = 20;
var x;
var isTimerOn = false;

function countdown() {
    document.getElementById('output').value = "time left: " + counter;
    counter--;
    x = setTimeout("countdown();", 1000);
    if (counter == 0) {
        resetMe();
        newQuestion();
        console.log('counter is at 0');
    }
};

function stopMe() {
    isTimerOn = false;
    clearTimeout(x);
};

function startMe() {
    if (!isTimerOn) {
        isTimerOn = true;
        countdown();
    }
};

function resetMe() {
    isTimerOn = false;
    counter = 20;
    document.getElementById("output").innerHTML = 20;
};
// **********************SKIP*****************************
$(".skip").click(function() {
    newQuestion();
    resetMe();
});
// ************************SHOW/HIDE CORRECT ANSWER*****************
// function hideAnswer() {
//   $("#rightAnswer").hide()
// }
// **************************GET NEW QUESTION WHEN TIMER IS AT ZERO***********************
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
    $('.category, .question, .valued').empty();
    // *********************APPEND NEW QUESTION*********************
    $(".question").append(question);
    $('.valued').append("points: " + valuedAt);
    $('.category').append(category.toUpperCase());
  })
}
