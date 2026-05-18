import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
