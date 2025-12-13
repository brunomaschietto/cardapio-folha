import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EntryPage } from "./pages/EntryPage";
import { MenuPage } from "./pages/MenuPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
