// src/pages/BoardDetail.tsx
import { useParams } from "react-router-dom";
import { useBoardContext } from "../context/BoardContext";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import type { ColumnType } from "../types/types";
import Column from "../components/Column";

const BoardDetail = () => {
  const { boardId } = useParams();
  const { boards, updateBoard } = useBoardContext();
  const board = boards.find((b) => b.id === boardId);

  const [newColumnTitle, setNewColumnTitle] = useState("");

  if (!board)
    return (
      <div className="p-4 font-semibold text-center text-red-500">
        Board not found
      </div>
    );

  const handleAddColumn = () => {
    if (!newColumnTitle.trim()) return;

    const updatedBoard = {
      ...board,
      columns: [
        ...board.columns,
        { id: uuidv4(), title: newColumnTitle, tasks: [] },
      ],
    };

    updateBoard(updatedBoard);
    setNewColumnTitle("");
  };

  return (
    <div className="p-6">
      <h1 className="mb-4 text-3xl font-bold">{board.title}</h1>

      <div className="p-4 mb-6 bg-white border rounded shadow">
      <div className="mb-4 text-center">
        <h2 className="text-xl font-semibold">Add New Column</h2>
      </div>
      <div className="flex justify-center gap-2">
        <input
          className="w-64 p-2 border rounded"
          placeholder="New Column Title"
          value={newColumnTitle}
          onChange={(e) => setNewColumnTitle(e.target.value)}
        />
        <button
          onClick={handleAddColumn}
          className="px-4 py-2 text-white bg-green-600 rounded"
        >
          Add Column
        </button>
      </div>
      </div>

      {board.columns.length === 0 ? (
        <p className="italic text-gray-500 ">No columns yet. Add one to get started.</p>
      ) : (
        <div className="flex gap-4 overflow-x-auto">
          {board.columns.map((column: ColumnType) => (
            <Column
              key={column.id}
              column={column}
              board={board}
              updateBoard={updateBoard}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BoardDetail;
