import { useBoardContext } from '../context/BoardContext';
import { Link } from 'react-router-dom';

const BoardTable = () => {
  const { boards } = useBoardContext();

  return (
    <div className="mt-6 overflow-x-auto border border-gray-300 shadow-lg rounded-xl">
      <table className="min-w-full text-sm table-auto">
        <thead>
          <tr className="text-sm tracking-wider text-white uppercase bg-gradient-to-r from-green-500 to-green-600">
            <th className="px-6 py-3 text-left">Title</th>
            <th className="px-6 py-3 text-left">Description</th>
            <th className="px-6 py-3 text-left">Created At</th>
            <th className="px-6 py-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {boards.map((board) => (
            <tr key={board.id} className="transition-all duration-150 hover:bg-blue-50">
              <td className="px-6 py-4 font-medium text-gray-900">{board.title}</td>
              <td className="px-6 py-4 text-gray-700">{board.description}</td>
              <td className="px-6 py-4 text-gray-600">
                {new Date(board.createdAt).toLocaleString()}
              </td>
              <td className="px-6 py-4 text-center">
                <Link
                  to={`/board/${board.id}`}
                  className="inline-block px-4 py-1 text-xs text-white transition bg-blue-600 rounded-full hover:bg-blue-700"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BoardTable;
