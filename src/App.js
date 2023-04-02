import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Datenschutz from "./pages/Datenschutz";
import Impressum from "./pages/Impressum";
import Landing from "./pages/Landing";
import { Audio } from "react-loader-spinner";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = 1000; // delay in milliseconds
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, delay);
    };
    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);
  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    document.addEventListener("DOMContentLoaded", handleLoad);

    return () => {
      document.removeEventListener("DOMContentLoaded", handleLoad);
    };
  }, []);
  return (
    <>
      <div style={{ display: isLoading ? "block" : "none" }}>
        <Audio
          height="80"
          width="80"
          radius="9"
          color="#c2a560"
          ariaLabel="loading"
          wrapperStyle={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
          wrapperClassName="audio-wrapper"
        />
      </div>

      <div style={!isLoading ? { display: "block" } : { display: "none" }}>
        <Routes>
          <Route path="/:location?" element={<Landing />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="*" element={<Landing />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
