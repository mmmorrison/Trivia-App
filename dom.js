// *******************READY SET GO *************************
var openAfter = 1000;
$(document).ready(function() {
  $(".ready").show().delay(2000).fadeOut().queue(function() {
    $(".set").show().delay(2000).fadeOut().queue(function() {
      window.setTimeout(function() {
    window.location.href = 'main.html';
}, 1000);
    })
  })
});



 //Your delay in milliseconds



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
