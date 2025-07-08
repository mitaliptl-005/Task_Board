import type { Board } from "../types/types";

// Key name to store boards
const STORAGE_KEY = "taskBoards";

// Get boards from localStorage
export const getBoardsFromStorage = (): Board[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

// Save boards to localStorage
export const saveBoardsToStorage = (boards: Board[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(boards));
};
