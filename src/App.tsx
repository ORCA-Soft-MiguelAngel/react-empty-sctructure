import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";

function App() {
  return (
    <Routes>
      {/**Free Routes */}
      <Route path="/" element={<Index />} />

      {/**Unauthorized */}

      {/**Authorized for users */}

      {/**Only for admin */}

      {/**Degbug Routes */}
    </Routes>
  );
}

export default App;
