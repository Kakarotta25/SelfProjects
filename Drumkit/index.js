
// catering to mouse click:
for(var i=0; i<7; i++){
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonInnerHtml=this.innerHTML;
    playAudio(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

// catering to keyboard presses:
document.addEventListener("keydown", function (event) {
  playAudio(event.key);
  buttonAnimation(event.key);
});

// playing audio:
function playAudio(key){
  switch (key) {
    case "w":
        var audio=new Audio("sounds/crash.mp3");
        audio.play();
      break;

    case "a":
        var audio=new Audio("sounds/kick-bass.mp3");
        audio.play();
      break;

    case "s":
        var audio=new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case "d":
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
      break;

    case "j":
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
      break;

    case "k":
        var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
      break;

    case "l":
        var audio=new Audio("sounds/tom-4.mp3");
        audio.play();
      break;

    default: console.console.log(buttonInnerHtml);

  }
}

// playing animation:
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
