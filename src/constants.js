export const TURNS = {
  // turnos
  X: 'X',
  O: 'O',
};

export const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const DIRECTIONS = [
  { dr: 0, dc: 1 }, // Horizontal
  { dr: 1, dc: 0 }, // Vertical
  { dr: 1, dc: 1 }, // Diagonal ↘️
  { dr: 1, dc: -1 }, // Diagonal ↙️
];
