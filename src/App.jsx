import { useState } from "react";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
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
