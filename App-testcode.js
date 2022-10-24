<ItemDetails />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/warehouses" element={<Warehouses />} />
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