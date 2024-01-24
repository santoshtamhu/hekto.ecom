import { Route, Routes } from "react-router-dom";
import Header from "./components/common/header/Header";
import Home from "./pages/Home";
import Products from "./pages/products/Products";
import Pages from "./pages/Pages";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import { SingleProductPage } from "./pages/products/SingleProductPage";
import { Signup } from "./pages/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { setUser } from "./app/slice/userSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import { AddProduct } from "./pages/products/AddProduct";
import { Cart } from "./pages/Cart";
import { ProtectedRoute } from "./components/common/ProtectedRoute";
import { LoginPage } from "./pages/LoginPage";

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let access_token = localStorage.getItem("access_token");
    if (access_token) {
      axios
        .get("https://ecommerce-sagartmg2.vercel.app/api/users/get-user", {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        })
        .then((res) => {
          dispatch(setUser(res.data));
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="flex h-screen items-center justify-center">
          <p>logo./ quotes/ spinner</p>
        </div>
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="" element={<ProtectedRoute role="buyer" />}>
              <Route path="cart" element={<Cart />} />
            </Route>
            <Route path="/products" element={<Products />} />
            <Route path="" element={<ProtectedRoute role="seller" />}>
              <Route path="/products/add" element={<AddProduct />} />
            </Route>
            <Route path="/products/:slug" element={<SingleProductPage />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
          <ToastContainer />
        </>
      )}
    </>
  );
}

export default App;
