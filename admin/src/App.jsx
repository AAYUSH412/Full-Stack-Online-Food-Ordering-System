import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddRestaurant from "./components/admin/AddRestaurant";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddMenu from "./components/admin/AddMenu";
import ManageOrder from "./components/admin/ManageOrder";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/admin/add-restaurant" element={<AddRestaurant />} />
        <Route path="/admin/add-menu/:restaurantId" element={<AddMenu />} />
        <Route path="/admin/manage-orders" element={<ManageOrder />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
