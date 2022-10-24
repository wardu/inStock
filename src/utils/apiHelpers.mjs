import axios from 'axios';

const getWarehouse = (id) => {
  return axios.get(`http://localhost:8080/warehouses/${id}`);
};

const getInventory = (id) => {
  return axios.get(`http://localhost:8080/inventory/${id}`);
};

export { getWarehouse, getInventory };
