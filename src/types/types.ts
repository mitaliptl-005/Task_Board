// src/types.ts
export type TaskPriority = "high" | "medium" | "low";

export type Task = {
  id: string;
  title: string;
  description: string;
  createdBy: string;
  priority: TaskPriority;
  dueDate: string;
};

export type ColumnType = {
  id: string;
  title: string;
  tasks: Task[];
};

export type Board = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  columns: ColumnType[];
};
