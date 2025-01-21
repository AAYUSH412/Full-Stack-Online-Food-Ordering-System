import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import RestaurantListing from "./components/Restaurant/RestaurantList";
import RestaurantDetail from "./components/Restaurant/RestaurantDetails";
import AboutUs from "./pages/About";
import ContactUs from "./pages/Contact";
import Cart from "./pages/Cart";
import OrderSuccess from "./pages/OrderSuccess";
import OrderFailed from "./pages/OrderFailed";
import SignUp from "./pages/Signup";
import SignIn from "./pages/Signin";
import ResetPassword from "./pages/Resetpassword";
import ForgotPassword from "./pages/ForgotPassword"; 
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Auth Routes */}
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment-success" element={<OrderSuccess />} />
            <Route path="/payment-failed" element={<OrderFailed />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<RestaurantListing />} />
          <Route path="/restaurant/:id" element={<RestaurantDetail />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;