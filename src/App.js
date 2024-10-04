import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage/LandingPage";
import NavBar from "./components/navbar/NavBar";
import MapComponent from "./components/mapcomponent/MapComponent";
import ShowroomPage from "./pages/showroompage/ShowroomPage";
import { DataProvider } from "./context/context";

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/showrooms" element={<ShowroomPage />}></Route>
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
