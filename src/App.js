import { BrowserRouter } from "react-router-dom";
import AddItem from "./components/AddItem/AddItem";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";
import EditItem from "./components/EditItem/EditItem";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import Warehouses from "./components/Warehouses/Warehouses";

function App() {
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
          <Route path="/warehouses/add" element={<AddWarehouse />} />
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
