import React from "react";
import { useEffect, useState } from "react";
import arrowRight from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import sortArrow from "../../assets/icons/sort-24px.svg";

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
      <div className="warehouses__details-container">
        <div className="warehouses__details-wrapper-left">
          <div className="warehouses__name-container">
            <div className="warehouses__warehouse-name-label">WAREHOUSE</div>

            <div className="warehouses__warehouse-name">
              {" "}
              {warehouses.name}{" "}
              <img className="warehouses__arrow-icon" src={arrowRight} alt="" />
            </div>
          </div>
          <div className="warehouses__address-container">
            <div className="warehouses__warehouse-address-label">ADDRESS</div>

            <div className="warehouses__warehouse-address">
              {" "}
              {warehouses.address}, {warehouses.city}, {warehouses.country}
            </div>
          </div>
          <div className="warehouses__delete-icon-container">
            <img
              className="warehouses__delete-icon"
              src={deleteIcon}
              alt="delete"
            />
          </div>
        </div>
        <div className="warehouses__details-wrapper-right">
          <div className="warehouses__contact-name-container">
            <div className="warehouses__contact-name-label">CONTACT NAME</div>
            <div className="warehouses__contact-name">
              {warehouses.contact.name}
            </div>
          </div>
          <div className="warehouses__contact-information-container">
            <div className="warehouses__contact-info-label">
              CONTACT INFORMATION
            </div>
            <div className="warehouses__contact-phone">
              {warehouses.contact.phone}{" "}
            </div>
            <div className="warehouses__contact-email">
              {warehouses.contact.email}
            </div>
          </div>
          <div className="warehouses__edit-icon-container">
            {" "}
            <img
              className="warehouses__delete-icon-tablet"
              src={deleteIcon}
              alt="delete"
            />
            <img className="warehouses__edit-icon" src={editIcon} alt="edit" />
          </div>
        </div>
      </div>
    </article>
  ));

  return (
    <section className="warehouses">
      <div className="warehouses__title-container">
        <h1 className="warehouses__title">Warehouses</h1>
        <div className="warehouses__title-wrapper-right">
          <div className="warehouses__wrapper-search">
            <input
              placeholder="Search..."
              type="search"
              className="warehouses__search"
            ></input>
          </div>
          <div className="warehouses__button-container">
            <button className="warehouses__button-add">
              + Add New Warehouse
            </button>
          </div>
        </div>
      </div>
      <div className="warehouses__subtitle">
        <div className="warehouses__details-wrapper-left">
          <div className="warehouses__warehouse-subtitle">
            WAREHOUSE
            <img className="warehouses__sort-icon" src={sortArrow} alt="sort" />
          </div>
          <div className="warehouses__address-subtitle">
            ADDRESS
            <img className="warehouses__sort-icon" src={sortArrow} alt="sort" />
          </div>
        </div>
        <div className="warehouses__details-wrapper-right">
          <div className="warehouses__contact-name-subtitle">
            CONTACT NAME
            <img className="warehouses__sort-icon" src={sortArrow} alt="sort" />
          </div>
          <div className="warehouses__contact-info-subtitle">
            CONTACT INFORMATION{" "}
            <img className="warehouses__sort-icon" src={sortArrow} alt="sort" />
          </div>
          <div className="warehouses__actions-subtitle">ACTIONS</div>
        </div>
      </div>
      <div className="warehouses__container">{warehouseList}</div>
    </section>
  );
};

export default Warehouses;
