import React, { useEffect, useState } from "react";
import arrowRight from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import sortArrow from "../../assets/icons/sort-24px.svg";
import { sortTable } from "../../utils/sortingHelpers.mjs";
import DeleteWarehouseModal from "../DeleteWarehouseModal/DeleteWarehouseModal";
import { Link } from "react-router-dom";

import "./Warehouses.scss";

import axios from "axios";

const Warehouses = () => {
  const [warehouses, setWarehouses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedWarehouse, setSelectedWarehouse] = useState({});
  const [sortWarehouse, setsortWarehouse] = useState(false);
  const [sortContact, setSortContact] = useState(false);
  const [sortAddress, setSortAddress] = useState(false);
  const [sortContactInfo, setSortContactInfo] = useState(false);

  const getWarehouses = async () => {
    const response = await axios.get("http://localhost:8080/warehouses");
    setWarehouses(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getWarehouses();
  }, []);

  // const sortTable = async (label) => {
  //   setWarehousesOrder(!warehousesOrder);
  //   if (warehousesOrder === false) {
  //     const response = await axios.get(
  //       `http://localhost:8080/warehouses?order=descending&label=${label}`
  //     );
  //     setWarehouses(response.data);
  //   } else if (warehousesOrder === true) {
  //     const response = await axios.get(
  //       `http://localhost:8080/warehouses?order=ascending&label=${label}`
  //     );
  //     setWarehouses(response.data);
  //   }
  // };

  // const sortTable = async (label) => {
  //   if (
  //     !Object.keys(warehousesOrder).length === 0 ||
  //     Object.keys(warehousesOrder[0]) !== label
  //   ) {
  //     setWarehousesOrder({ label: true });
  //     const response = await axios.get(
  //       `http://localhost:8080/warehouses?order=ascending&label=${label}`
  //     );
  //     setWarehouses(response.data);
  //     return;
  //   }
  //   setWarehousesOrder({ label: !warehousesOrder.label });
  //   const response = await axios.get(
  //     `http://localhost:8080/warehouses?order=${
  //       warehousesOrder.label === true ? "ascending" : "descending"
  //     }&label=${label}`
  //   );
  //   setWarehouses(response.data);
  //   return;
  // };

  // const sortTable = async (state, setState, label) => {
  //   const response = await axios.get(
  //     `http://localhost:8080/warehouses?order=${
  //       state ? "descending" : "ascending"
  //     }&label=${label}`
  //   );
  //   setWarehouses(response.data);
  //   setState(!state);
  //   return;

  // else if (warehousesOrder === true) {
  // const response = await axios.get(
  //   `http://localhost:8080/warehouses?order=descending&label=${label}`
  // );
  // setWarehouses(response.data);
  // setState(false);
  // // }
  // };

  const showDeleteModal = (id) => {
    const warehouse = warehouses.find((warehouse) => {
      return id === warehouse.id;
    });
    setSelectedWarehouse(warehouse);
    setShowModal(!showModal);
  };

  const warehouseList = warehouses.map((warehouses) => (
    <article key={warehouses.id} className="warehouses__details">
      <div className="warehouses__details-container">
        <div className="warehouses__details-wrapper-left">
          <div className="warehouses__name-container">
            <div className="warehouses__warehouse-name-label">WAREHOUSE</div>
            <Link to={`/warehouses/${warehouses.id}`}>
              <div className="warehouses__warehouse-name">
                {" "}
                {warehouses.name}{" "}
                <img
                  className="warehouses__arrow-icon"
                  src={arrowRight}
                  alt=""
                />
              </div>
            </Link>
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
              onClick={() => {
                showDeleteModal(warehouses.id);
              }}
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
              onClick={() => {
                showDeleteModal(warehouses.id);
              }}
            />
            <Link to={`/warehouses/${warehouses.id}/edit`}>
              <img
                className="warehouses__edit-icon"
                src={editIcon}
                alt="edit"
              />
            </Link>
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
            <Link to={`/warehouses/add`}>
              <button className="warehouses__button-add">
                + Add New Warehouse
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="warehouses__subtitle">
        <div className="warehouses__details-wrapper-left">
          <div className="warehouses__warehouse-subtitle">
            WAREHOUSE
            <img
              className="warehouses__sort-icon"
              src={sortArrow}
              alt="sort"
              onClick={() => {
                sortTable(
                  sortWarehouse,
                  setsortWarehouse,
                  "warehouseName",
                  setWarehouses
                );
              }}
            />
          </div>
          <div className="warehouses__address-subtitle">
            ADDRESS
            <img
              className="warehouses__sort-icon"
              src={sortArrow}
              alt="sort"
              onClick={() => {
                sortTable(
                  sortAddress,
                  setSortAddress,
                  "address",
                  setWarehouses
                );
              }}
            />
          </div>
        </div>
        <div className="warehouses__details-wrapper-right">
          <div className="warehouses__contact-name-subtitle">
            CONTACT NAME
            <img
              className="warehouses__sort-icon"
              src={sortArrow}
              alt="sort"
              onClick={() => {
                sortTable(
                  sortContact,
                  setSortContact,
                  "contactName",
                  setWarehouses
                );
              }}
            />
          </div>
          <div className="warehouses__contact-info-subtitle">
            CONTACT INFORMATION
            <img
              className="warehouses__sort-icon"
              src={sortArrow}
              alt="sort"
              onClick={() => {
                sortTable(
                  sortContactInfo,
                  setSortContactInfo,
                  "contactInfo",
                  setWarehouses
                );
              }}
            />
          </div>
          <div className="warehouses__actions-subtitle">ACTIONS</div>
        </div>
      </div>
      <div className="warehouses__container">{warehouseList}</div>

      <div>
        {showModal && (
          <DeleteWarehouseModal
            selectedWarehouse={selectedWarehouse}
            showDeleteModal={showDeleteModal}
            getWarehouses={getWarehouses}
          />
        )}
      </div>
    </section>
  );
};

export default Warehouses;
