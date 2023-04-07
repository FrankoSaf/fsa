import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Datenschutz from "./pages/Datenschutz";
import Impressum from "./pages/Impressum";
import Landing from "./pages/Landing";
import { Audio } from "react-loader-spinner";
import { useEffect, useState } from "react";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const [audioFinished, setAudioFinished] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAudioFinished(true);
    }, 1800);
  }, []);

  return (
    <>
      {!audioFinished && (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Audio color="#a38f52" />
        </div>
      )}

      {audioFinished && (
        <>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/neuss" element={<Landing location={"neuss"} />} />
            <Route
              path="/düsseldorf"
              element={<Landing location={"düsseldorf"} />}
            />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
