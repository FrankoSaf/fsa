import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Welcome from "./pages/Welcome";
import { useState } from "react";
import useLocalStorage from "use-local-storage";
function App() {
  const [location, setLocation] = useLocalStorage("");
  return (
    <Routes>
      <Route path="/" element={<Welcome setLocation={setLocation} />} />

      <Route path="/home" element={<Landing location={location} />} />
    </Routes>
  );
}

export default App;
