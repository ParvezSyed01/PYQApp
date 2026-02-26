import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Papers from "./pages/paper";
import SplashScreen from "./components/SplashScreen";
import { supabase } from "./supabaseClient";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Navbar />
        <Contact />
      </>
    ),
  },
  {
    path: "/papers",
    element: <Papers />,
  },
]);

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("visited");

    if (!hasVisited) {
      setLoading(true);
      sessionStorage.setItem("visited", "true");

      setTimeout(() => {
        setLoading(false);
      }, 3500);
    }
  }, []);

  if (loading) {
    return <SplashScreen onFinish={() => {}} />;
  }

  return <RouterProvider router={router} />;
}

export default App;