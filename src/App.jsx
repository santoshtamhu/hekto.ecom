import { Route, Routes } from "react-router-dom";
import Header from "./components/common/header/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Pages from "./pages/Pages";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import { SingleProductPage } from "./pages/SingleProductPage";
import { Signup } from "./pages/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div>
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<SingleProductPage />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
