import { useState } from "react";
import type { ColumnType, Task, Board } from "../types/types";
import { v4 as uuidv4 } from "uuid";
import TaskCard from "./TaskCard";

type Props = {
  column: ColumnType;
  board: Board;
  updateBoard: (updatedBoard: Board) => void;
};

const Column = ({ column, board, updateBoard }: Props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [priority, setPriority] = useState<"high" | "medium" | "low">("medium");
  const [dueDate, setDueDate] = useState("");

  const addTask = () => {
    if (!title.trim()) return;

    const newTask: Task = {
      id: uuidv4(),
      title,
      description: desc,
      createdBy: "You", // or prompt user input
      priority,
      dueDate,
    };

    const updatedColumns = board.columns.map((col) =>
      col.id === column.id
        ? { ...col, tasks: [...col.tasks, newTask] }
        : col
    );

    updateBoard({ ...board, columns: updatedColumns });

    setTitle("");
    setDesc("");
    setDueDate("");
  };

  return (
  <div className="p-4 bg-gray-100 rounded w-80 min-w-80">
  <h2 className="mb-2 text-xl font-semibold">{column.title}</h2>

  {column.tasks.map((task) => (
    <TaskCard key={task.id} task={task} />
  ))}

  <div className="mt-4 space-y-3">
    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">Title</label>
      <input
        className="w-full p-1 border rounded"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>

    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">Description</label>
      <textarea
        className="w-full p-1 border rounded"
        placeholder="Enter description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
    </div>

    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">Priority</label>
      <select
        className="w-full p-1 border rounded"
        value={priority}
        onChange={(e) => setPriority(e.target.value as any)}
      >
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </div>

    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">Due Date</label>
      <input
        type="date"
        className="w-full p-1 border rounded"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
    </div>

    <button
      className="w-full px-2 py-1 text-white bg-blue-600 rounded"
      onClick={addTask}
    >
      Add Task
    </button>
  </div>
  </div>
        
  );
};

export default Column;
