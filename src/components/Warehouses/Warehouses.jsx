import React from "react";
import { useEffect, useState } from "react";
import "./Warehouses.scss";

import axios from "axios";

const Warehouses = () => {
  const [warehouses, setWarehouses] = useState([]);

  const getWarehouses = async () => {
    const response = await axios.get("http://localhost:8080/warehouses");
    setWarehouses(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getWarehouses();
  }, []);

  const warehouseList = warehouses.map((warehouses) => (
    <article key={warehouses.id} className="warehouses__details">
      <div className="warehouses__details-wrapper-left">
        <div className="warehouses__warehouse-name">{warehouses.name}</div>
        <div className="warehouses__warehouse-address">
          {warehouses.address}
        </div>
        <div className="warehouses__warehouse-city">{warehouses.city}</div>
        <div className="warehouses__warehouse-country">
          {warehouses.country}
        </div>
      </div>
      <div className="warehouses__details-wrapper-right">
        <div className="warehouses__contact-name">
          {warehouses.contact.name}
        </div>
        <div className="warehouses__contact-info">
          {warehouses.contact.phone}
          {warehouses.contact.email}
        </div>
      </div>
    </article>
  ));

  return (
    <section className="warehouses">
      <h1 className="warehouses__title">Warehouses</h1>
      <div className="warehouses__wrapper-search">
        <input
          placeholder="Search"
          type="search"
          className="warehouses__search"
        ></input>
      </div>
      <div className="warehouses__button-container">
        <button className="nav__button-add">Add New Warehouse</button>
      </div>
      <div className="warehouses__container">{warehouseList}</div>
    </section>
  );
};

export default Warehouses;
