import axios from "axios";

const sortTable = async (state, setState, label, setWarehouses) => {
  const response = await axios.get(
    `http://localhost:8080/warehouses?order=${
      state ? "descending" : "ascending"
    }&label=${label}`
  );
  setWarehouses(response.data);
  setState(!state);
  return;
};

const sortItems = async (state, setState, label, setInventories) => {
  const response = await axios.get(
    `http://localhost:8080/inventory?order=${
      state ? "descending" : "ascending"
    }&label=${label}`
  );
  setInventories(response.data);
  setState(!state);
  return;
};

export { sortTable, sortItems };
