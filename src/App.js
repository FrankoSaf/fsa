import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Datenschutz from "./pages/Datenschutz";
import Impressum from "./pages/Impressum";
import Landing from "./pages/Landing";
import { Audio } from "react-loader-spinner";
import { useEffect, useState } from "react";

function App() {
  
  
  return (
    <>
      

      
        <Routes>
          <Route path="/:location?" element={<Landing />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="*" element={<Landing />} />
        </Routes>
        <Footer />
      
    </>
  );
}

export default App;
