import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToHash from './components/scroll/ScrollToHash';
import Landing from "./pages/Landing";
import { SignUp } from "./pages/SignUp";

export default function App() {
  return (
    <>

      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<SignUp/>}/>
      </Routes>

    </>
  );
}