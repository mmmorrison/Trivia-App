$(".start-Btn").click(function() {
  window.location = "ready2.html"
});

$(".ready-Btn").click(function() {
  window.location = "index.html";
});
// ********************TIMER***************************

$(document).ready(function() {
  countdown();
});

var counter = 20;
var x;
var isTimerOn = false;

function countdown() {
  document.getElementById('output').value = counter;
  counter--;
  x = setTimeout("countdown();", 1000);
  if (counter == -1) {
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
