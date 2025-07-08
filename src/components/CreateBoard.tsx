// src/components/CreateBoard.tsx
import type { Dispatch, SetStateAction } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  setTitle: Dispatch<SetStateAction<string>>;
  setDescription: Dispatch<SetStateAction<string>>;
  onSubmit: () => void;
};

const CreateBoard = ({
  isOpen,
  onClose,
  title,
  description,
  setTitle,
  setDescription,
  onSubmit,
}: Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-6 bg-white rounded-lg shadow-xl w-96">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Create New Board</h2>
        <input
          type="text"
          placeholder="Board Title"
          className="w-full p-2 mb-3 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          className="w-full p-2 mb-3 border rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 text-gray-700 bg-gray-200 rounded">
            Cancel
          </button>
          <button onClick={onSubmit} className="px-4 py-2 text-white bg-indigo-600 rounded">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBoard;
