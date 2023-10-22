function playclip() {
  var audio = document.querySelector("audio");

  if (audio) {
    audio.play();
  }
}

// Add a click event listener to elements with the "song" class to play music
document.querySelector(".song").addEventListener("click", function () {
  playclip();
});

// Use jQuery to ready document
$(document).ready(function () {
  // Add a click event listener to the document body to load fade animation
  $(document.body).click(function () {
    $(".clickanywhere").fadeOut(1000);

    // Define and play function with "audio" ID
    let play = function () {
      var audio = document.getElementById("audio");
      if (audio) {
        audio.play();
      }
    };
  });
});
