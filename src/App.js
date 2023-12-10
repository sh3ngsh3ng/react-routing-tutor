import './App.css';

import PageOne from "./pages/pageOne";
import PageTwo from "./pages/PageTwo";
import ErrorPage from "./pages/ErrorPage"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PageOne />}></Route>
        <Route path="/two" element={<PageTwo />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
