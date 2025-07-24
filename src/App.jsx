import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import AddEvent from "./admin/AddEvent";

const App = () => {
  return (
    <Routes>
      {/* Homepage with in-page sections (Home, Services, Team, Contact) */}
      <Route path="/" element={<Layout />} />

      {/* Admin route (form to add event) */}
      <Route path="/admin/AddEvent" element={<AddEvent />} />
    </Routes>
  );
};

export default App;