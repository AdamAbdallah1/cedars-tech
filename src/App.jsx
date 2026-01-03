import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Loader from "./components/Loader";
import Barber from "./pages/demos/Barber";
import React, { Suspense } from "react";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo/barber" element={<Barber />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
