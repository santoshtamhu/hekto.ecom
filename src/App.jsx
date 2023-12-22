import { Route, Routes } from "react-router-dom";
import Header from "./components/common/header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
