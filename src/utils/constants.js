export const TILE_TYPES = {
  GRASS: "grass",
  WATER: "water",
  ROCK: "rock",
  EMPTY: "empty",
  FOOD: "food",
  null: "null",
};

export const TILE_DENSITIES = {
  [TILE_TYPES.GRASS]: 0.4, // 40%
  [TILE_TYPES.WATER]: 0.2, // 20%
  [TILE_TYPES.EMPTY]: 0.1, // 20%
  [TILE_TYPES.ROCK]: 0.15, // 15%
  [TILE_TYPES.FOOD]: 0.15, // 5%
};

export const charDirection = ["moveU", "moveR", "moveD", "moveL", "dragon"];
