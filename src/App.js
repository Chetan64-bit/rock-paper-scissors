import React, { useState } from "react";
import "./style.css";

const choices = [
  { name: "Rock", emoji: "✊" },
  { name: "Paper", emoji: "✋" },
  { name: "Scissors", emoji: "✌️" }
];

const App = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const play = (playerPick) => {
    setIsLoading(true);
    setResult("Shuffling... 🤖");

    setTimeout(() => {
      const computerPick = choices[Math.floor(Math.random() * 3)].name;
      setPlayerChoice(playerPick);
      setComputerChoice(computerPick);
      getResult(playerPick, computerPick);
      setIsLoading(false);
    }, 1000);
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
      <h1>✂️ Rock Paper Scissors ✂️📄</h1>

      <div className="scoreboard">
        <p>👦 Player: {playerScore}</p>
        <p>🤖 Computer: {computerScore}</p>
      </div>

      <div className="buttons">
        {choices.map((choice) => (
          <button
            key={choice.name}
            onClick={() => play(choice.name)}
            disabled={isLoading}
          >
            {choice.emoji}
            <br />
            {choice.name}
          </button>
        ))}
      </div>

      <div className="results">
        <p>
          <strong>Your Choice:</strong>{" "}
          {playerChoice && choices.find((c) => c.name === playerChoice).emoji}{" "}
          {playerChoice}
        </p>
        <p>
          <strong>Computer's Choice:</strong>{" "}
          {computerChoice &&
            choices.find((c) => c.name === computerChoice).emoji}{" "}
          {computerChoice}
        </p>
        <h2>{result}</h2>
      </div>

      <button className="reset-btn" onClick={resetGame}>
        🔄 Reset Game
      </button>
    </div>
  );
};

export default App;
