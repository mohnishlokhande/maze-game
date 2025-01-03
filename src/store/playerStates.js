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

export const useEditorStore = create((set) => ({
  isTyping: false,
  setIsTyping: (child) => set({ isTyping: child }),
  msg: "",
  setMsg: (msg) => set({ msg }),
}));

export const useConversationStore = create((set) => ({
  conversations: [],
  setConversations: (conversations) => set({ conversations }),
}));
