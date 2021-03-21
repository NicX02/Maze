let form = document.querySelector("#settings");
let size = document.querySelector("#size");
let rowsCols = document.querySelector("#number");
let complete = document.querySelector(".complete");
let replay = document.querySelector(".replay");
let close = document.querySelector(".close");
let audio = new Audio('./music/Lyde - Recluse.mp3'); //onplay song
let audio2 = new Audio('./music/Night Shapeshifters.mp3'); //onload song

let newMaze;

window.onload = function()
{
  playMusicOnLoad(1)
}


form.addEventListener("submit", generateMaze);

document.addEventListener("keydown", move);
replay.addEventListener("click", () => {
  location.reload();
});


close.addEventListener("click", () => {
  complete.style.display = "none";
});

function reGenerate()
{
  document.getElementById('regen').style.display='block';
}

function playMusicOnPlay()
{
  try
  {
    audio.volume = 0.4;
    audio.muted = true;
    audio.play();
    audio.muted = false;
    audio.play();
  }
  catch(e)
  {

  }

}

function playMusicOnLoad(a)
{
  try
  {
    if(a == 0)
    {
      audio2.muted = true
    }
    else
    {
      audio2.volume = 0.4;
      audio2.muted = true;
      audio2.play();
      audio2.muted = false;
      audio2.play();
    }
  }
  catch(e)
  {

  }
}


function generateMaze(e) {
  e.preventDefault();
  reGenerate();
  playMusicOnPlay();
  playMusicOnLoad(0)

  if (rowsCols.value == "" || size.value == "") {
    return alert("Please enter all fields");
  }

  let mazeSize = size.value;
  let number = rowsCols.value;
  if (mazeSize > 650 || number > 50) {
    alert("Maze too large!");
    return;
  }

  form.style.display = "none";

  newMaze = new Maze(mazeSize, number, number);
  newMaze.setup();
  newMaze.draw();
}

function move(e) {
  if (!generationComplete) return;
  let key = e.key;
  let row = current.rowNum;
  let col = current.colNum;

  switch (key) {
    case "ArrowUp":
      if(!current.goal)
      if (!current.walls.topWall) {
        let next = newMaze.grid[row - 1][col];
        current = next;
        newMaze.draw();
        current.highlight(newMaze.columns);
        if (current.goal)
        {
          complete.style.display = "block";
        }
      }
      break;

    case "ArrowRight":
      if(!current.goal)
      if (!current.walls.rightWall) {
        let next = newMaze.grid[row][col + 1];
        current = next;
        newMaze.draw();
        current.highlight(newMaze.columns);
        if (current.goal)
        {
          complete.style.display = "block";
        }
      }
      break;

    case "ArrowDown":
      if(!current.goal)
      if (!current.walls.bottomWall) {
        let next = newMaze.grid[row + 1][col];
        current = next;
        newMaze.draw();
        current.highlight(newMaze.columns);
        if (current.goal)
        {
          complete.style.display = "block";
        }
      }
      break;

    case "ArrowLeft":
      if(!current.goal)
      {
        if (!current.walls.leftWall) 
        {
          let next = newMaze.grid[row][col - 1];
          current = next;
          newMaze.draw();
          current.highlight(newMaze.columns);
          if (current.goal)
        {
          complete.style.display = "block";
        }
        }
      }
      break;

  }
}
