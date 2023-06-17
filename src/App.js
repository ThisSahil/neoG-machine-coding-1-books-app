import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./BookApp/Main";
import Search from "./BookApp/Search";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
