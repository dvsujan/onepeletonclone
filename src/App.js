/**
 * Main Application Component
 * 
 * This is the root component that sets up the application's routing structure
 * and provides global context providers for state management.
 * 
 * Key Features:
 * - React Router for client-side navigation
 * - Context providers for global state management
 * - Navigation bar present on all pages
 * 
 * Route Structure:
 * - "/" → Landing page with hero section and product showcase
 * - "/showrooms" → Store locator with interactive map
 * - "/showrooms/:id" → Individual store details page
 * - "*" → 404 error page for undefined routes
 */

import "./App.css";
import ReactDOM from "react-dom/client"; // TODO: Remove unused import
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage/LandingPage";
import NavBar from "./components/navbar/NavBar";
import MapComponent from "./components/mapcomponent/MapComponent"; // TODO: Remove unused import
import ShowroomPage from "./pages/showroompage/ShowroomPage";
import { DataProvider } from "./context/context";
import { SectionProvider } from "./context/sectioncontext";
import StorePage from "./pages/storepage/StorePage";

function App() {
  return (
    <BrowserRouter>
      {/* DataProvider: Manages store location data and caching */}
      <DataProvider>
        {/* SectionProvider: Tracks current page section for navigation */}
        <SectionProvider>
          {/* Navigation bar rendered on all pages */}
          <NavBar />
          <Routes>
            {/* Main landing page with product showcase */}
            <Route path="/" element={<LandingPage />}></Route>
            {/* Store locator with map and location listings */}
            <Route path="/showrooms" element={<ShowroomPage />}></Route>
            {/* Individual store details page with dynamic ID */}
            <Route path="/showrooms/:id" element={<StorePage />}></Route>
            {/* 404 fallback for undefined routes */}
            <Route path="*" element={<h1>404 Not Found</h1>}></Route>
          </Routes>
        </SectionProvider>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
