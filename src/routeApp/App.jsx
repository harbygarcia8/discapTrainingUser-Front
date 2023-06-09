import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import RegisterUser from "../pages/RegisterUser";
import HomePage from "../pages/HomePage";
import UserDiscapacityPage from "../pages/UserDiscapacityPage";
import SpecialistPage from "../pages/SpecialistPage";
import DiscapacitiesPage from "../pages/DiscapacitiesPage";
import TrainingRoutinePage from "../pages/TrainingRoutinePage";
import MedicalHistoryFormPage from "../pages/MedicalHistoryFormPage";
import MedicalHistoryPage from "../pages/MedicalHistoryPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signUp" element={<RegisterUser />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/ConsultarUsuarios" element={<UserDiscapacityPage />} />
          <Route path="/Especiailstas" element={<SpecialistPage />} />
          <Route path="/Discapacidades" element={<DiscapacitiesPage />} />
          <Route path="/RutinaEntrenamiento"element={<TrainingRoutinePage />}/>
          <Route path="/MedicalHistory" element={<MedicalHistoryFormPage />}/>
          <Route path="/ConsultarHistoriaClínica" element={<MedicalHistoryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
