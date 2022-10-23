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
import { useParams } from "react-router-dom";

import { useEffect } from "react";

function App() {
  const [errors, setErrors] = useState({
    name: false,
    address: false,
    city: false,
    country: false,
    contactName: false,
    contactPosition: false,
    contactPhone: false,
    contactEmail: false,
  });
  const [inventories, setInventories] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [warehouses, setWarehouses] = useState([]);

  let showError = false;

  const getWarehouses = async () => {
    const response = await axios.get("http://localhost:8080/warehouses");
    setWarehouses(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getWarehouses();
  }, []);

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

    if (!e.target.city.value) {
      showError = true;
      setErrors((prevErrors) => ({
        ...prevErrors,
        city: true,
      }));
    }

    if (!e.target.country.value) {
      showError = true;
      setErrors((prevErrors) => ({
        ...prevErrors,
        country: true,
      }));
    }

    if (!e.target.contactName.value) {
      showError = true;
      setErrors((prevErrors) => ({
        ...prevErrors,
        contactName: true,
      }));
    }

    if (!e.target.contactPosition.value) {
      showError = true;
      setErrors((prevErrors) => ({
        ...prevErrors,
        contactPosition: true,
      }));
    }

    if (!e.target.contactPhone.value) {
      showError = true;
      setErrors((prevErrors) => ({
        ...prevErrors,
        contactPhone: true,
      }));
    }

    if (!e.target.contactEmail.value) {
      showError = true;
      setErrors((prevErrors) => ({
        ...prevErrors,
        contactEmail: true,
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
        position: e.target.contactPosition.value,
        phone: e.target.contactPhone.value,
        email: e.target.contactEmail.value,
      },
    };

    await axios.post("http://localhost:8080/warehouses", newWarehouse);
  };

  /// ----------  Edited Warehouse

  const editWarehouse = async (e, warehouseId) => {
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

    if (!e.target.city.value) {
      showError = true;
      setErrors((prevErrors) => ({
        ...prevErrors,
        city: true,
      }));
    }

    if (!e.target.country.value) {
      showError = true;
      setErrors((prevErrors) => ({
        ...prevErrors,
        country: true,
      }));
    }

    if (!e.target.contactName.value) {
      showError = true;
      setErrors((prevErrors) => ({
        ...prevErrors,
        contactName: true,
      }));
    }

    if (!e.target.contactPosition.value) {
      showError = true;
      setErrors((prevErrors) => ({
        ...prevErrors,
        contactPosition: true,
      }));
    }

    if (!e.target.contactPhone.value) {
      showError = true;
      setErrors((prevErrors) => ({
        ...prevErrors,
        contactPhone: true,
      }));
    }

    if (!e.target.contactEmail.value) {
      showError = true;
      setErrors((prevErrors) => ({
        ...prevErrors,
        contactEmail: true,
      }));
    }

    if (showError) {
      return;
    }

    const editedWarehouse = {
      id: `${warehouseId}`,
      name: e.target.name.value,
      address: e.target.address.value,
      city: e.target.city.value,
      country: e.target.country.value,
      contact: {
        name: e.target.contactName.value,
        position: e.target.contactPosition.value,
        phone: e.target.contactPhone.value,
        email: e.target.contactEmail.value,
      },
    };
    await axios.put(
      `http://localhost:8080/warehouses/${warehouseId}`,
      editedWarehouse
    );
  };

  const getInventories = async () => {
    const response = await axios.get("http://localhost:8080/inventory");
    setInventories(response.data);
    // console.log(response.data);
  };

  useEffect(() => {
    getInventories();
  }, []);

  const selectItem = (id) => {
    const chosenItem = inventories.find((item) => {
      return item.id === id;
    });
    setSelectedItem(chosenItem);
  };

  // editInventory

  const editInventory = async (e, itemId, inventory) => {
    e.preventDefault();
    console.log("edit");

    // if (!e.target.itemName.value) {
    //   showError = true;
    //   setErrors((prevErrors) => ({
    //     ...prevErrors,
    //     itemName: true,
    //   }));
    // }

    // if (!e.target.description.value) {
    //   showError = true;
    //   setErrors((prevErrors) => ({
    //     ...prevErrors,
    //     description: true,
    //   }));
    // }

    // if (!e.target.category.value) {
    //   showError = true;
    //   setErrors((prevErrors) => ({
    //     ...prevErrors,
    //     category: true,
    //   }));
    // }

    // if (!e.target.status.value) {
    //   showError = true;
    //   setErrors((prevErrors) => ({
    //     ...prevErrors,
    //     status: true,
    //   }));
    // }

    // if (!e.target.quantity.value) {
    //   showError = true;
    //   setErrors((prevErrors) => ({
    //     ...prevErrors,
    //     quantity: true,
    //   }));
    // }

    // if (!e.target.warehouseId.value) {
    //   showError = true;
    //   setErrors((prevErrors) => ({
    //     ...prevErrors,
    //     warehouseId: true,
    //   }));
    // }

    // if (!e.target.warehouseName.value) {
    //   showError = true;
    //   setErrors((prevErrors) => ({
    //     ...prevErrors,
    //     warehouseName: true,
    //   }));
    // }

    // if (showError) {
    //   console.log("error");
    //   return;
    // }

    // const editedInventory = {
    //   id: `${inventories.id}}`,
    //   warehouseId: e.target.warehouseId.value,
    //   warehouseName: e.target.warehouseName.value,
    //   itemName: e.target.itemName.value,
    //   description: e.target.description.value,
    //   category: e.target.category.value,
    //   status: e.target.status.value,
    //   quantity: e.target.quantity.value,
    // };

    await axios.put(`http://localhost:8080/inventory/${itemId}`, inventory);
  };
  //end

  return (
    <>
      {/* <ItemDetails /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/warehouses"
            element={<Warehouses warehouses={warehouses} />}
          />
          <Route
            path="/warehouses/:warehouseId"
            element={<WarehouseDetails />}
            // getWarehouses={getWarehouses}
          />
          <Route
            path="/warehouses/:warehouseId/edit"
            element={
              <EditWarehouse
                editWarehouse={editWarehouse}
                showError={showError}
                inputErrors={errors}
              />
            }
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
          <Route
            path="/inventory"
            element={
              <Inventory
                editInventory={editInventory}
                showError={showError}
                inputErrors={errors}
                inventories={inventories}
                selectItem={selectItem}
                test="test"
              />
            }

            // selectedItem={selectedItem}
          />
          <Route path="/inventory/:itemId" element={<ItemDetails />} />
          <Route
            path="/inventory/:itemId/edit"
            element={
              <EditItem
                editInventory={editInventory}
                selectedItem={selectedItem}
                inventories={inventories}
                warehouses={warehouses}
              />
            }
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
          {/* <Route path="/inventory/:itemId/edit" element={<EditItem />} /> */}
          <Route path="/inventory/add" element={<AddItem />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
