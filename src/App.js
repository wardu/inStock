import axios from "axios";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddItem from "./components/AddItem/AddItem";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";
import EditItem from "./components/EditItem/EditItem";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header.jsx";
import Inventory from "./components/Inventory/Inventory";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import Warehouses from "./components/Warehouses/Warehouses";
import "./styles/partials/_resets.scss";

function App() {
  const [errors, setErrors] = useState({
    name: false,
    address: false,
    city: false,
    country: false,
    contact: {
      name: false,
      position: false,
      phone: false,
      email: false,
    },
  });

  let showError = false;

  const addWarehouse = async (e) => {
    e.preventDefault();

    if (!e.target.name.value) {
      showError = true;
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: true,
      }));
    }

    if (!e.target.address.value) {
      showError = true;
      setErrors((prevErrors) => ({
        ...prevErrors,
        address: true,
      }));
    }

    if (showError) {
      return;
    }

    const newWarehouse = {
      id: "",
      name: e.target.name.value,
      address: e.target.address.value,
      city: e.target.city.value,
      country: e.target.country.value,
      contact: {
        name: e.target.contactName.value,
        position: e.target.position.value,
        phone: e.target.phone.value,
        email: e.target.email.value,
      },
    };

    await axios.post("http://localhost:8080/warehouses", newWarehouse);
  };

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/warehouses" element={<Warehouses />} />
          <Route
            path="/warehouses/:warehouseId"
            element={<WarehouseDetails />}
          />
          <Route
            path="/warehouses/:warehouseId/edit"
            element={<EditWarehouse />}
          />
          <Route
            path="/warehouses/add"
            element={
              <AddWarehouse
                addWarehouse={addWarehouse}
                showError={showError}
                inputErrors={errors}
              />
            }
          />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/inventory/:itemId" element={<ItemDetails />} />
          <Route path="/inventory/:itemId/edit" element={<EditItem />} />
          <Route path="/inventory/add" element={<AddItem />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
