<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maze</title>
    <link rel="stylesheet" href="./css/style.css">    
</head>
<body>
    <h1>NEON MAZE</h1>
    <div class="complete">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <h3 class="mc">Maze Completed.</h3>
        <button class="replay" id="submit">Play again</button>
        <button class="close" id="submit">Close</button>
    </div>

    <form id="settings" action="">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <p>Maze Size</p>
        <input id="size" type="number" value="550"/></br>
        <p>Rows/Columns</p>
        <input id="number" type="number" value="16"/></br>
        <input id="submit" type="submit" value="Generate Maze">
    </form>
    
    <canvas class="maze"></canvas>
    <script src="./js/maze.js"></script>
    <script src="./js/settings.js"></script>
    <a class="RM" id="regen"href="">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Regenerate Maze
    </a>
</body>
</html>