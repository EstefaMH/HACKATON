import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Analytics from "./pages/Analytics";

function WebRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Analytics />}></Route>
      <Route path="/analytics" element={<Analytics />}></Route>
      

      
    </Routes>
  </BrowserRouter>
  );
}

export default WebRoutes;
