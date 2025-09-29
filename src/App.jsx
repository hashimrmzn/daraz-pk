import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import "./app.css";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
