import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/home/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "/blog", element: <Blog /> },
    ],
  },

  { path: "/contact", element: <Contact /> },
  { path: "/about", element: <About /> },
]);
