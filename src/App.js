import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import useLocalStorage from "use-local-storage";

function App() {


  return (
    <>
      <Routes>
      

        <Route path="/" element={<Landing  />} />
      </Routes>
    </>
  );
}

export default App;
