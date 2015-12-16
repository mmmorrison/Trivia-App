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
  $(".question").delay(10000).queue(function(next){
    $(this).addClass("tenSeconds hinge");
    next();
  });

  $(".category").delay(10000).queue(function(next){
    $(this).addClass(" tenSeconds hinge");
    next();
  })
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
    $('.category').empty().append(category);
    $(".question").empty().append(question);
    $(".correctAnswer").empty().append(correctAnswer);
    $(".question").delay(11000).queue(function(next){
      $(this).addClass("tenSeconds, hinge");
      next();
    });

    $(".category").delay(10000).queue(function(next){
      $(this).addClass(" tenSeconds hinge");
      next();
    })

  });

}
