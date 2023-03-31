import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const getWarehouse = (id) => {
  return axios.get(`${BASE_URL}/warehouses/${id}`);
};

const getInventory = (id) => {
  return axios.get(`${BASE_URL}/inventory/${id}`);
};

export { getWarehouse, getInventory };
