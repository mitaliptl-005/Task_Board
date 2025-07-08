// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BoardProvider } from "./context/BoardContext";
import BoardView from "./pages/BoardView";
import BoardDetail from "./pages/BoardDetail";

const App = () => (
  <BoardProvider>
    <Router>
      <Routes>
        <Route path="/" element={<BoardView />} />
        <Route path="/board/:boardId" element={<BoardDetail />} />
      </Routes>
    </Router>
  </BoardProvider>
);

export default App;
