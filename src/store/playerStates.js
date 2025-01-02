import { create } from "zustand";

export const usePlayersStore = create((set) => ({
  players: [],
  setPlayers: (players) => set({ players }),
}));

export const useMyPlayerStore = create((set) => ({
  myPlayer: {},
  setMyPlayer: (player) => set({ myPlayer: player }),
  page: "home",
  setPage: (page) => set({ page }),
}));
