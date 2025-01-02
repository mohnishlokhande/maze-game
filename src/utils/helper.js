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

const alreadyOccupied = (x, y, players) => {
  console.log("event.key4", players);
  return players?.some((p) => p.x === x && p.y === y);
};

const checkValidMove = (x, y, players) => {
  console.log("event.key3", players);
  if (x < 0 || x >= homeBoard[0].length || y < 0 || y >= homeBoard.length)
    return 2;
  else if (homeBoard[y][x] === TILE_TYPES.WATER) return 0;
  else if (alreadyOccupied(x, y, players)) return 0;
  else return 1;
};

const onEnter = (id, x, y, setPage, setIsTyping, players, boardRef) => {
  console.log("event.key2", players);
  let valid = checkValidMove(x, y, players);
  if (valid === 2) return;
  if (homeBoard[y][x] === TILE_TYPES.GAME) {
    updateData(id, { page: "forest" });
    setPage("forest");
  } else if (homeBoard[y][x] === TILE_TYPES.FREE_WAY) {
    updateData(id, { page: "freeway" });
    setPage("freeway");
  } else if (homeBoard[y][x] === TILE_TYPES.SELL_APPLE) {
    updateData(id, { score: 0 });
  } else if (valid === 1 || valid === 0) {
    boardRef?.current?.blur();
    setIsTyping(true);
    updateData(id, { isTyping: true });
  }
};

export const handleKeyDownEvents = (
  id,
  x,
  y,
  vector,
  event,
  setMsg,
  setPage,
  setIsTyping,
  boardRef,
  players
) => {
  event.preventDefault();
  let updatedData = {};
  console.log("event.key", players);
  switch (event.key) {
    case "ArrowUp":
      updatedData = { dir: 0, vector: (vector + 1) % 4 };
      if (checkValidMove(x, y - 1, players)) updatedData.y = y - 1;
      updateData(id, updatedData);
      break;
    case "ArrowRight":
      updatedData = { dir: 1, vector: (vector + 1) % 4 };
      if (checkValidMove(x + 1, y, players)) updatedData.x = x + 1;
      updateData(id, updatedData);
      break;
    case "ArrowDown":
      updatedData = { dir: 2, vector: (vector + 1) % 4 };
      if (checkValidMove(x, y + 1, players)) updatedData.y = y + 1;
      updateData(id, updatedData);
      break;
    case "ArrowLeft":
      updatedData = { dir: 3, vector: (vector + 1) % 4 };
      if (checkValidMove(x - 1, y, players)) updatedData.x = x - 1;
      updateData(id, updatedData);
      break;
    case " ":
      break;
    case "Enter":
      onEnter(id, x, y, setPage, setIsTyping, players, boardRef);
      break;
    case "Escape":
      setMsg("");
      updateData(id, { isTyping: false, msg: "" });
      break;
    default:
      break;
  }
};
