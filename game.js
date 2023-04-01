var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var start = 0;
var level = 0;
var i=-1;
$(document).keydown(function(){
 if(start===0){
  start++;
  console.log(start);
  $("#level-title").text("level "+level);
  nextSequence();
  console.log(gamePattern);
 }
})
function nextSequence() {
  level++;
  $("#level-title").text("level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
    playsound(randomChosenColor);
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
   }
$(".btn").click(function() {
    i++;
    var userChosenColor = $(this).attr("id");
    playsound(userChosenColor);
    animatepress(userChosenColor);
    userClickedPattern.push(userChosenColor);
    console.log(i);
    checkAnswer(i);
});
function playsound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function animatepress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    document.querySelector("#" + currentColor).classList.remove("pressed");
  }, 100)
}
function checkAnswer(currentLevel){
  
    if (userClickedPattern[currentLevel]!=gamePattern[currentLevel]){
      var a=new Audio("wrong.mp3");
      a.play();
      $("body").addClass("game-over");
      setTimeout(function(){
        document.querySelector("body").classList.remove("game-over");
      },200)
  
      $("#level-title").text("Game Over, Press Any Key to Restart");
     
      startOver();
     
    }
  
  if(currentLevel===level-1){{ 
    userClickedPattern=[];
     i=-1;
   setTimeout(function(){
    nextSequence();
   },500);
  }
  }
} 
function startOver(){
  i=-1;
  level=0;
  start=0;
  gamePattern=[];
  userClickedPattern=[];
}