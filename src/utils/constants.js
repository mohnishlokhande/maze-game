export const TILE_TYPES = {
  GRASS: "grass",
  WATER: "water",
  ROCK: "rock",
  EMPTY: "empty",
  GAS_STATION: "gas_station",
};

export const TILE_DENSITIES = {
  [TILE_TYPES.GRASS]: 0.4, // 40%
  [TILE_TYPES.WATER]: 0.2, // 20%
  [TILE_TYPES.EMPTY]: 0.2, // 20%
  [TILE_TYPES.ROCK]: 0.15, // 15%
  [TILE_TYPES.GAS_STATION]: 0.05, // 5%
};
