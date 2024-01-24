import React from "react";
import "./App.css";
import CardContainer from "./components/Card/CardContainer";
import TileContainer from "./components/Tiles/TileContainer";
import MetricContainer from "./components/PerformanceMetrics/MetricContainer";
import Navbar from "./components/Common/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <CardContainer title="Welcome, John Matheww!" />
      <MetricContainer title="Instant Dive into Your Performance Metrics" />
      <TileContainer title="Discover the Heart of Our Functionality" />
    </>
  );
}

export default App;
