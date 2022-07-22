import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Home";
import BuyPage from "./Pages/BuyPage/BuyPage";
import HomeListingPage from "./Pages/homeListingPage/HomeListingPage";
import LearnMorePage from "./Pages/learnMorePage/LearnMorePage";
import MapPage from "./Pages/mapPage/MapPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="flexibleBtn" element={<HomeListingPage />} />
        <Route path="learnmoreBtn" element={<LearnMorePage />} />
        <Route path="map" element={<MapPage />} />
        <Route path="/buy/:id" element={<BuyPage />} />
      </Routes>
    </div>
  );
}

export default App;
