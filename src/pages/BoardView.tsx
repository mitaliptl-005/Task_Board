import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useBoardContext } from "../context/BoardContext";
import CreateBoard from "../components/CreateBoard";
import BoardTable from "../components/BoardTable";

const BoardView = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addBoard } = useBoardContext();
  const navigate = useNavigate();

  const handleCreateBoard = () => {
    if (!title.trim()) return;

    const newBoardId = uuidv4();

    addBoard({
      id: newBoardId,
      title,
      description,
      createdAt: new Date().toISOString(),
      columns: [], // 👈 necessary for BoardDetail page
    });

    // Clear form state
    setTitle("");
    setDescription("");
    setModalOpen(false);

    // Redirect to the new board
    navigate(`/board/${newBoardId}`);
  };

  return (
    <div className="p-6">
      <h1 className="py-4 mb-4 font-serif text-2xl font-bold tracking-wide text-center text-white uppercase rounded-lg shadow-lg bg-gradient-to-r from-indigo-600 to-purple-600">
        Task Board Application
      </h1>

      <div className="p-4">
        <div className="px-4 py-4 bg-white border shadow rounded-xl">
          <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:justify-between sm:items-center">
            <h2 className="font-serif text-xl font-bold tracking-wide text-gray-800">
              Boards View
            </h2>

            <button
              onClick={() => setModalOpen(true)}
              className="px-6 py-2 text-sm font-medium tracking-wide text-white uppercase transition-all rounded-lg shadow bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-black"
            >
              + Create Board
            </button>
          </div>

          <BoardTable />
        </div>

        <CreateBoard
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          title={title}
          description={description}
          setTitle={setTitle}
          setDescription={setDescription}
          onSubmit={handleCreateBoard}
        />
      </div>
    </div>
  );
};

export default BoardView;
