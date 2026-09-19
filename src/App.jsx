import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Portafolio from "./pages/Portafolio";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="w-full justify-center sm:px-6 lg:px-0">
        <Routes>
          <Route path="/" element={<Portafolio />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
