import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import WatchLists from "./pages/WatchLists";
import WatchMovie from "./pages/WatchMovie";
import NoPage from "./pages/NoPage";
import InfoPopup from "./components/Popups.jsx";
import { DataProvider } from "./context/DataContext";

export default function App() {


  return (
    <Router>
      <DataProvider>
        <Navbar />
        <InfoPopup />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movie" element={<Movies />} />
          <Route path="/WatchList" element={<WatchLists />} />
          <Route path="/Watch/:name/:id" element={<WatchMovie />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </DataProvider>
    </Router>
  );
}
