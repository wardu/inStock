import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const sortTable = async (state, setState, label, setWarehouses) => {
  const response = await axios.get(
    `${BASE_URL}/warehouses?order=${
      state ? "descending" : "ascending"
    }&label=${label}`
  );
  setWarehouses(response.data);
  setState(!state);
  return;
};

const sortItems = async (state, setState, label, setInventories) => {
  const response = await axios.get(
    `${BASE_URL}/inventory?order=${
      state ? "descending" : "ascending"
    }&label=${label}`
  );
  setInventories(response.data);
  setState(!state);
  return;
};

export { sortTable, sortItems };
