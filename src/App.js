import React, { useState } from "react";
import "./styles.css"; // we'll create this file next

const choices = ["Rock", "Paper", "Scissors"];

const App = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const play = (playerPick) => {
    const computerPick = choices[Math.floor(Math.random() * 3)];
    setPlayerChoice(playerPick);
    setComputerChoice(computerPick);
    getResult(playerPick, computerPick);
  };

  const getResult = (player, computer) => {
    if (player === computer) {
      setResult("It's a Draw!");
    } else if (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Paper" && computer === "Rock") ||
      (player === "Scissors" && computer === "Paper")
    ) {
      setResult("You Win!");
    } else {
      setResult("You Lose!");
    }
  };

  return (
    <div className="app">
      <h1>Rock Paper Scissors</h1>
      <div className="buttons">
        {choices.map((choice) => (
          <button key={choice} onClick={() => play(choice)}>
            {choice}
          </button>
        ))}
      </div>

      <div className="results">
        <p>Your Choice: <strong>{playerChoice}</strong></p>
        <p>Computer's Choice: <strong>{computerChoice}</strong></p>
        <h2>{result}</h2>
      </div>
    </div>
  );
};

export default App;

// This is a simple React component for a Rock Paper Scissors game.
// It currently only displays a title. You can expand this component to include game logic, player
// choices, and results. Consider adding buttons for "Rock", "Paper", and "Sc
  