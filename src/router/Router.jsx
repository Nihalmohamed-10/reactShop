import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import SignUp from "../containers/signUp/SignUp";
import SignIn from "../containers/signin/SignIn";
import Products from "../containers/products/Products";
import Footer from "../containers/footer/Footer";
import ProductDetail from "../containers/productDetail.jsx/ProductDetail";
import ProtectedRoutes from "../ProtectRoutes";
import Cart from "../containers/cart/Cart";
import AddProduct from "../containers/products/AddProduct";
import SellerDashboard from "../pages/SellerDashboard";
// import ClothProducts from "../containers/cloths/ClothProducts";
// import ElectronicsProducts from "../containers/electronics/ElectronicsProducts";
// import FurnitureProducts from "../containers/furniture/FurnitureProducts";
function RouterComponent() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="products/:category?" element={<Products />} />
          <Route path="productDetails/:id" element={<ProductDetail />} />
          <Route path="/seller/dashboard" element={<SellerDashboard />} />
        </Route>
        {/* <Route path="/clothproducts" element={<ClothProducts />} />
        <Route path="/electonicproducts" element={<ElectronicsProducts />} />
        <Route path="/furnitureproducts" element={<FurnitureProducts />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default RouterComponent;
