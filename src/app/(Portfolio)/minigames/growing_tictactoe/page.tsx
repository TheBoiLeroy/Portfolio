"use client";

import { useState } from "react";

type Player = "X" | "O" | null;

function createBoard(size: number): Player[][] {
  return Array.from({ length: size }, () => Array(size).fill(null));
}

function growBoard(oldBoard: Player[][]): Player[][] {
  const oldSize = oldBoard.length;
  const newSize = oldSize + 2;
  const newBoard = createBoard(newSize);

  for (let i = 0; i < oldSize; i++) {
    for (let j = 0; j < oldSize; j++) {
      newBoard[i + 1][j + 1] = oldBoard[i][j]; // shift original board into center
    }
  }

  return newBoard;
}

export default function GrowingTicTacToe() {
  const [board, setBoard] = useState(createBoard(3));
  const [winLength, setWinLength] = useState(3);
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [winner, setWinner] = useState<Player>(null);

  const size = board.length;
  const tileSize = Math.max(20, 60 - size); // Shrink cell size as board grows

  const handleClick = (row: number, col: number) => {
    if (board[row][col] || winner) return;

    const newBoard = board.map((r, i) =>
      r.map((cell, j) => (i === row && j === col ? currentPlayer : cell))
    );
    setBoard(newBoard);

    if (checkWinner(newBoard, winLength)) {
      setWinner(currentPlayer);
    } else if (newBoard.flat().every(cell => cell !== null)) {
      // Tie → grow the board and win length
      const expandedBoard = growBoard(newBoard);
      setBoard(expandedBoard);
      setWinLength(winLength + 1);
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const checkWinner = (b: Player[][], target: number): boolean => {
    const directions = [
      [0, 1], [1, 0], [1, 1], [1, -1],
    ];

    for (let r = 0; r < b.length; r++) {
      for (let c = 0; c < b[0].length; c++) {
        const player = b[r][c];
        if (!player) continue;

        for (const [dr, dc] of directions) {
          let count = 0;
          for (let k = 0; k < target; k++) {
            const nr = r + dr * k;
            const nc = c + dc * k;
            if (b[nr]?.[nc] === player) {
              count++;
            } else {
              break;
            }
          }
          if (count === target) return true;
        }
      }
    }
    return false;
  };

  return (
    <main className="min-h-screen p-6 bg-white dark:bg-black text-black dark:text-white">
      <h1 className="text-2xl font-bold mb-4">🧠 Growing Tic-Tac-Toe</h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Connect {winLength} in a row to win. Board size: {size}×{size}
      </p>
      {winner && (
        <p className="text-lg font-semibold text-green-600 dark:text-green-400 mb-4">
          🎉 Player {winner} wins!
        </p>
      )}
      <div className="overflow-auto border border-gray-300 dark:border-gray-700 max-w-full">
        <div
          className="grid"
          style={{
            gridTemplateColumns: `repeat(${size}, ${tileSize}px)`,
          }}
        >
          {board.map((row, i) =>
            row.map((cell, j) => (
              <button
                key={`${i}-${j}`}
                onClick={() => handleClick(i, j)}
                className="border border-gray-400 dark:border-gray-600 text-sm font-bold flex items-center justify-center"
                style={{
                  width: `${tileSize}px`,
                  height: `${tileSize}px`,
                  fontSize: `${tileSize * 0.5}px`,
                }}
              >
                {cell}
              </button>
            ))
          )}
        </div>
      </div>
    </main>
  );
}