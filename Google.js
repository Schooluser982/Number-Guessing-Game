<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Number Guessing Game</title>
  <style>
    /* General page styling */
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #74ebd5, #ACB6E5);
      text-align: center;
      padding: 50px;
      color: #333;
    }

    h2 {
      color: #222;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    }

    p {
      font-size: 18px;
    }

    /* Input field styling */
    #userGuess {
      padding: 10px;
      font-size: 16px;
      border: 2px solid #4CAF50;
      border-radius: 8px;
      width: 120px;
      text-align: center;
      transition: 0.3s;
    }

    #userGuess:focus {
      border-color: #2196F3;
      box-shadow: 0 0 10px rgba(33,150,243,0.5);
    }

    /* Button styling */
    button {
      padding: 10px 20px;
      margin-left: 10px;
      font-size: 16px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: 0.3s;
    }

    button:hover {
      background-color: #45a049;
      transform: scale(1.05);
    }

    /* Result and attempts text */
    #result {
      font-size: 22px;
      font-weight: bold;
      margin-top: 20px;
      color: #2196F3; /* 🔵 Changed to blue */
    }

    #attempts {
      font-size: 18px;
      margin-top: 10px;
      color: #555;
    }

    /* Fun glowing border */
    body::before {
      content: "";
      position: fixed;
      top: 20px;
      left: 20px;
      right: 20px;
      bottom: 20px;
      border: 5px dashed rgba(255,255,255,0.6);
      border-radius: 20px;
      pointer-events: none;
      animation: glow 3s infinite alternate;
    }

    @keyframes glow {
      from { box-shadow: 0 0 10px #fff; }
      to { box-shadow: 0 0 30px #ff9800; }
    }

    /* Reset button styling */
    #resetBtn {
      padding: 10px 20px;
      margin-left: 10px;
      font-size: 16px;
      background-color: #f44336;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: 0.3s;
    }

    #resetBtn:hover {
      background-color: #d32f2f;
      transform: scale(1.05);
    }

    /* Volume slider styling */
    #volumeControl {
      width: 200px;
      margin-top: 10px;
      cursor: pointer;
    }

    label {
      font-weight: bold;
      margin-right: 5px;
    }
  </style>
</head>
<body>
  <h2>Number Guessing Game</h2>
  <p>Guess a number between 1 and 10:</p>
  <input type="number" id="userGuess" min="1" max="10">
  <button onclick="checkGuess()">Submit Guess</button>
  <button onclick="resetGame()" id="resetBtn">Reset Game</button>

  <!-- Feedback area -->
  <p id="result"></p>
  <p id="attempts"></p>

  <!-- 🎵 Theme Music -->
  <audio id="themeMusic" loop>
    <source src="https://raw.githubusercontent.com/Schooluser982/Number-Guessing-Game/main/cinematic-corporate-theme-music-1-272625.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <br>
  <button onclick="toggleMusic()" id="musicBtn">Play Music</button>

  <!-- 🎚️ Volume Control -->
  <label for="volumeControl">Volume:</label>
  <input type="range" id="volumeControl" min="0" max="1" step="0.1" value="1">

  <script>
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let guessCount = 0;
    const music = document.getElementById("themeMusic");
    const musicBtn = document.getElementById("musicBtn");
    const volumeControl = document.getElementById("volumeControl");

    function checkGuess() {
      const userGuess = parseInt(document.getElementById("userGuess").value);
      guessCount++;

      if (userGuess === randomNumber) {
        document.getElementById("result").textContent = "🎉 Correct! You guessed the number in " + guessCount + " attempts.";
      } else if (userGuess > randomNumber) {
        document.getElementById("result").textContent = "Too high! Try again.";
      } else if (userGuess < randomNumber) {
        document.getElementById("result").textContent = "Too low! Try again.";
      }

      document.getElementById("attempts").textContent = "Attempts: " + guessCount;
    }

    function resetGame() {
      randomNumber = Math.floor(Math.random() * 10) + 1;
      guessCount = 0;
      document.getElementById("userGuess").value = "";
      document.getElementById("result").textContent = "🔄 Game has been reset! Try again.";
      document.getElementById("attempts").textContent = "";
    }

    function toggleMusic() {
      if (music.paused) {
        music.play();
        musicBtn.textContent = "Pause Music";
      } else {
        music.pause();
        musicBtn.textContent = "Play Music";
      }
    }

    // 🎚️ Volume control
    volumeControl.addEventListener("input", function() {
      music.volume = this.value;
    });
  </script>
</body>
</html>
