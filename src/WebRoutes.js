import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";

function WebRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/analytics" element={<Login/>}></Route>
      <Route path="/signin" element={<SignIn/>}></Route>
      <Route path="/signin/*" element={<SignIn/>}></Route>

      
    </Routes>
  </BrowserRouter>
  );
}

export default WebRoutes;
