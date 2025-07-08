import React, { createContext, useContext, useEffect, useState } from "react";
import type { Board } from "../types/types";

type BoardContextType = {
  boards: Board[];
  addBoard: (board: Board) => void;
  updateBoard: (updatedBoard: Board) => void;
};

const BoardContext = createContext<BoardContextType | undefined>(undefined);

export const BoardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [boards, setBoards] = useState<Board[]>([]);

  useEffect(() => {
    const storedBoards = localStorage.getItem("boards");
    if (storedBoards) setBoards(JSON.parse(storedBoards));
  }, []);

  useEffect(() => {
    localStorage.setItem("boards", JSON.stringify(boards));
  }, [boards]);

  const addBoard = (board: Board) => {
    setBoards((prev) => [...prev, board]);
  };

  const updateBoard = (updatedBoard: Board) => {
    setBoards((prev) =>
      prev.map((board) => (board.id === updatedBoard.id ? updatedBoard : board))
    );
  };

  return (
    <BoardContext.Provider value={{ boards, addBoard, updateBoard }}>
      {children}
    </BoardContext.Provider>
  );
};

export const useBoardContext = () => {
  const context = useContext(BoardContext);
  if (!context) throw new Error("useBoardContext must be used inside BoardProvider");
  return context;
};
