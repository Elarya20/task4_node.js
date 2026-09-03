import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar.jsx";

import Home from "./pages/Home.jsx";
import Tasks from "./pages/Tasks.jsx";
import AddTask from "./pages/AddTask.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";
import NotFound from "./pages/NotFound.jsx";

import { useTheme } from "./context/ThemeContext.jsx";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/tasks" element={<Tasks />} />

        <Route
          path="/add-task"
          element={<AddTask />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route path="/about" element={<About />} />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route path="/cart" element={<Cart />} />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </div>
  );
}

export default App;