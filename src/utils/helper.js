import { updateData } from "../api/Api";
import { homeBoard } from "./board";
import { TILE_DENSITIES, TILE_TYPES } from "./constants";

export const generateRandomBoard = (rows, cols) => {
  const totalTiles = rows * cols;
  const tileCounts = {};

  // Calculate the count for each type based on density
  for (const [type, density] of Object.entries(TILE_DENSITIES)) {
    tileCounts[type] = Math.floor(density * totalTiles);
  }

  // Create a flat list of tiles based on their counts
  let tilePool = [];
  for (const [type, count] of Object.entries(tileCounts)) {
    tilePool = tilePool.concat(Array(count).fill(type));
  }

  // Fill the remaining tiles with the default type if there are leftovers
  while (tilePool.length < totalTiles) {
    tilePool.push(TILE_TYPES.EMPTY);
  }

  // Shuffle the tile pool
  for (let i = tilePool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tilePool[i], tilePool[j]] = [tilePool[j], tilePool[i]];
  }

  // Create the 2D board from the shuffled tile pool
  const board = [];
  let index = 0;
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push({
        isActive: false,
        type: tilePool[index++],
      });
    }
    board.push(row);
  }

  return board;
};

const alreadyOccupied = (x, y, players) =>
  players?.some((p) => p.x === x && p.y === y);

const checkValidMove = (x, y, players) => {
  if (x < 0 || x >= homeBoard[0].length || y < 0 || y >= homeBoard.length)
    return 2;
  if (homeBoard[y][x] === TILE_TYPES.WATER || alreadyOccupied(x, y, players))
    return 0;
  return 1;
};

const onEnter = (id, x, y, setPage, players, typingCallback) => {
  const valid = checkValidMove(x, y, players);
  if (valid === 2) return;

  switch (homeBoard[y][x]) {
    case TILE_TYPES.GAME:
      updateData(id, { page: "forest" });
      setPage("forest");
      break;
    case TILE_TYPES.FREE_WAY:
      updateData(id, { page: "freeway" });
      setPage("freeway");
      break;
    case TILE_TYPES.SELL_APPLE:
      updateData(id, { score: 0 });
      break;
    default:
      if (valid === 1 || valid === 0) {
        typingCallback();
        updateData(id, { isTyping: true });
      }
      break;
  }
};

export const handleKeyDownEvents = (
  id,
  x,
  y,
  vector,
  key,
  setPage,
  typingCallback,
  players
) => {
  const moveMap = {
    ArrowUp: { dir: 0, dx: 0, dy: -1 },
    ArrowRight: { dir: 1, dx: 1, dy: 0 },
    ArrowDown: { dir: 2, dx: 0, dy: 1 },
    ArrowLeft: { dir: 3, dx: -1, dy: 0 },
  };

  if (key in moveMap) {
    const { dir, dx, dy } = moveMap[key];
    const newX = x + dx;
    const newY = y + dy;
    const updatedData = { dir, vector: (vector + 1) % 4 };

    if (checkValidMove(newX, newY, players)) {
      if (dx !== 0) updatedData.x = newX;
      if (dy !== 0) updatedData.y = newY;
    }

    updateData(id, updatedData);
  } else if (key === "Enter") {
    onEnter(id, x, y, setPage, players, typingCallback);
  } else if (key === "Escape") {
    updateData(id, { isTyping: false, msg: "" });
  }
};
