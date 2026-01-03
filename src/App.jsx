import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Loader from "./components/Loader";
import Barber from "./pages/demos/Barber";
import Portfolio from "./pages/demos/Portfolio";
import CoffeeShop from "./pages/demos/CoffeeShop";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo/barber" element={<Barber />} />
          <Route path="/demo/portfolio" element={<Portfolio />} />
          <Route path="/demo/coffee-shop" element={<CoffeeShop />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
