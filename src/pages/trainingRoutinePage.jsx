import React from "react";

import Header from "../components/Header";
import NavBar from "../components/NavBar";
import NewVideoTraining from "../components/trainingRoutine/newVideoTraining";
import RouteTraining from "../components/trainingRoutine/RouteTraining";
import Footer from "../components/Footer";

function TrainingRoutinePage() {
  return (
    <div>
      <Header />
      <NavBar />
      <NewVideoTraining />
      <RouteTraining />
      <Footer />
    </div>
  );
}

export default TrainingRoutinePage;
