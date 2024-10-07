import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage/LandingPage";
import NavBar from "./components/navbar/NavBar";
import MapComponent from "./components/mapcomponent/MapComponent";
import ShowroomPage from "./pages/showroompage/ShowroomPage";
import { DataProvider } from "./context/context";
import { SectionProvider } from "./context/sectioncontext";
import StorePage from "./pages/storepage/StorePage";

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <SectionProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/showrooms" element={<ShowroomPage />}></Route>
            <Route path="/showrooms/:id" element={<StorePage />}></Route>
            <Route path="*" element={<h1>404 Not Found</h1>}></Route>
          </Routes>
        </SectionProvider>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
