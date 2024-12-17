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
