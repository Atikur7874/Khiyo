import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CollectionPages from "./pages/CollectionPages";
import ProductDetails from "./components/Products/ProductDetails";
import CheckOut from "./components/Cart/CheckOut";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import MyOrderPage from "./pages/MyOrderPage";
import AdminLayout from "./components/Admin/AdminLayout";
import AdminHomePage from "./pages/AdminHomePage";
import UserManagement from "./components/Admin/UserManagement";
import ProductManagement from "./components/Admin/ProductManagement";
import EditProductPage from "./components/Admin/EditProductPage";
import OrderManagement from "./components/Admin/OrderManagement";
import AboutPage from "./pages/AboutPage";
import AdminRoute from "./components/Admin/AdminRoute"

import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Toaster position="top-right" />
          <Routes>
            {/* User routes */}
            <Route path="/" element={<UserLayout />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="profile" element={<Profile />} />
              <Route
                path="collections/:collection"
                element={<CollectionPages />}
              />
              <Route path="product/:id" element={<ProductDetails />} />
              <Route path="checkout" element={<CheckOut />} />
              <Route
                path="order-confirmation"
                element={<OrderConfirmationPage />}
              />
              <Route path="order/:id" element={<OrderDetailsPage />} />
              <Route path="my-order" element={<MyOrderPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Route>

            {/* Admin routes nested under /admin */}
            <Route
  path="/admin"
  element={
    <AdminRoute>
      <AdminLayout />
    </AdminRoute>
  }
>
  <Route index element={<AdminHomePage />} />
  <Route path="users" element={<UserManagement />} />
  <Route path="products" element={<ProductManagement />} />
    <Route path="products/new" element={<EditProductPage />} />
  <Route path="products/:id/edit" element={<EditProductPage />} />
  <Route path="orders" element={<OrderManagement />} />

            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
