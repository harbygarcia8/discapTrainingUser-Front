import React from "react";

import Header from "../components/Header";
import RouteTraining from "../components/homePage/RouteTraining";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
function TrainingRoutinePage() {
  return (
    <div>
      <Header />
      <NavBar />
      <RouteTraining />
      <Footer />
    </div>
  );
}

export default TrainingRoutinePage;
