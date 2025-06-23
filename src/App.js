import React, { useState } from "react";
import "./style.css";

const choices = ["Rock", "Paper", "Scissors"];

const App = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const play = (playerPick) => {
    setIsLoading(true);
    setResult("Shuffling... 🤖"); // Show animation text

    setTimeout(() => {
      const computerPick = choices[Math.floor(Math.random() * 3)];
      setPlayerChoice(playerPick);
      setComputerChoice(computerPick);
      getResult(playerPick, computerPick);
      setIsLoading(false);
    }, 1000); // 1 second animation delay
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
      setPlayerScore((prev) => prev + 1);
    } else {
      setResult("You Lose!");
      setComputerScore((prev) => prev + 1);
    }
  };

  const resetGame = () => {
    setPlayerChoice("");
    setComputerChoice("");
    setResult("");
    setPlayerScore(0);
    setComputerScore(0);
  };

  return (
    <div className="app">
      <h1>🪨📄✂️ Rock Paper Scissors ✂️📄🪨</h1>

      <div className="scoreboard">
        <p>👦 Player: {playerScore}</p>
        <p>🤖 Computer: {computerScore}</p>
      </div>

      <div className="buttons">
        {choices.map((choice) => (
          <button key={choice} onClick={() => play(choice)} disabled={isLoading}>
            {choice}
          </button>
        ))}
      </div>

      <div className="results">
        <p><strong>Your Choice:</strong> {playerChoice}</p>
        <p><strong>Computer's Choice:</strong> {computerChoice}</p>
        <h2>{result}</h2>
      </div>

      <button className="reset-btn" onClick={resetGame}>
        🔄 Reset Game
      </button>
    </div>
  );
};

export default App;
