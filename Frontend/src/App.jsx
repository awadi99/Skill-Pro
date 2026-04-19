import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import ScrollToHash from './components/scroll/ScrollToHash';
import Landing from "./pages/Landing";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Aptitude from "./pages/Aptitude";
import English from "./pages/English";

export default function App() {
  return (
    <>
      
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<SignUp />} />
        <Route path='/login' element={<Login />} />

        <Route path="/dashboard" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="aptitude" element={<Aptitude />} />
          <Route path="english" element={<English />} />
        </Route>
      </Routes>
    </>
  );
}