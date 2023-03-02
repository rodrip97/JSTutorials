// background scrolling speed
let move_speed = 3;

// gravity value
let gravity = 0.5;

// getting reference to the bird element
let bird = document.querySelector(".bird");

//getting bird eleement properties
let bird_props = bird.getBoundingClientRect();
let background = document.querySelector(".backgroud").getBoundingClientRect();

// get score refs
let score_val = document.querySelector(".score_val");
let message = document.querySelector(".message");
let score_title = document.querySelector(".score_title");

// set initial game state
let game_state = "Start";

// add event listener to start game
document.addEventListener("keydown", (e) => {
  //start game if ENTER is pressed
  if (e.key == "Enter" && game_state != "Play") {
    document.querySelectorAll(".pipe_sprite").forEach((e) => {
      e.remove();
    });
  }
});

// event listener for game start if ENTER key is pressed
