import type { Task } from "../types/types";

type Props = {
  task: Task;
};

const TaskCard = ({ task }: Props) => {
  return (
    <div className="p-2 mb-2 bg-white border rounded shadow">
      <div className="font-semibold">{task.title}</div>
      <div className="text-sm">{task.description}</div>
      <div className="mt-1 text-xs text-gray-500">
        Created by: {task.createdBy}
      </div>
      <div className="mt-1 text-xs">
        <div className="mr-2">Priority: {task.priority}</div>
        <div className="mr-2">Due: {task.dueDate}</div>
      </div>

    </div>
  );
};

export default TaskCard;
