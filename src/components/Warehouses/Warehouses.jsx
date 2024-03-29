import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import arrowRight from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import sortArrow from "../../assets/icons/sort-24px.svg";
import { sortTable } from "../../utils/sortingHelpers.mjs";
import DeleteItemModal from "../DeleteItemModal/DeleteItemModal";
import "./Warehouses.scss";

import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Warehouses = () => {
  const [warehouses, setWarehouses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedWarehouse, setSelectedWarehouse] = useState({});
  const [sortWarehouse, setsortWarehouse] = useState(false);
  const [sortContact, setSortContact] = useState(false);
  const [sortAddress, setSortAddress] = useState(false);
  const [sortContactInfo, setSortContactInfo] = useState(false);

  const getWarehouses = async () => {
    const response = await axios.get(`${BASE_URL}/warehouses`);
    setWarehouses(response.data);
  };

  useEffect(() => {
    getWarehouses();
  }, []);

  const deleteWarehouse = async (selectedWarehouse) => {
    await axios.delete(`${BASE_URL}/warehouses/${selectedWarehouse.id}`);
    getWarehouses();
    showDeleteModal();
  };

  const showDeleteModal = (id) => {
    const warehouse = warehouses.find((warehouse) => {
      return id === warehouse.id;
    });
    setSelectedWarehouse(warehouse);
    setShowModal(!showModal);
  };

  const warehouseList = warehouses.map((warehouses) => (
    <article key={warehouses.id} className='warehouses__details'>
      <div className='warehouses__details-container'>
        <div className='warehouses__details-wrapper-left'>
          <div className='warehouses__name-container'>
            <div className='warehouses__warehouse-name-label'>WAREHOUSE</div>
            <Link to={`/warehouses/${warehouses.id}`}>
              <div className='warehouses__warehouse-name'>
                {" "}
                {warehouses.name}{" "}
                <img
                  className='warehouses__arrow-icon'
                  src={arrowRight}
                  alt=''
                />
              </div>
            </Link>
          </div>
          <div className='warehouses__address-container'>
            <div className='warehouses__warehouse-address-label'>ADDRESS</div>

            <div className='warehouses__warehouse-address'>
              {" "}
              {warehouses.address}, {warehouses.city}, {warehouses.country}
            </div>
          </div>
          <div className='warehouses__delete-icon-container'>
            <img
              className='warehouses__delete-icon'
              src={deleteIcon}
              alt='delete'
              onClick={() => {
                showDeleteModal(warehouses.id);
              }}
            />
          </div>
        </div>
        <div className='warehouses__details-wrapper-right'>
          <div className='warehouses__contact-name-container'>
            <div className='warehouses__contact-name-label'>CONTACT NAME</div>
            <div className='warehouses__contact-name'>
              {warehouses.contact.name}
            </div>
          </div>
          <div className='warehouses__contact-information-container'>
            <div className='warehouses__contact-info-label'>
              CONTACT INFORMATION
            </div>
            <div className='warehouses__contact-phone'>
              {warehouses.contact.phone}{" "}
            </div>
            <div className='warehouses__contact-email'>
              {warehouses.contact.email}
            </div>
          </div>
          <div className='warehouses__edit-icon-container'>
            {" "}
            <img
              className='warehouses__delete-icon-tablet'
              src={deleteIcon}
              alt='delete'
              onClick={() => {
                showDeleteModal(warehouses.id);
              }}
            />
            <Link to={`/warehouses/${warehouses.id}/edit`}>
              <img
                className='warehouses__edit-icon'
                src={editIcon}
                alt='edit'
              />
            </Link>
          </div>
        </div>
      </div>
    </article>
  ));

  return (
    <section className='warehouses'>
      <div className='warehouses__title-container'>
        <h1 className='warehouses__title'>Warehouses</h1>
        <div className='warehouses__title-wrapper-right'>
          <div className='warehouses__wrapper-search'>
            <input
              placeholder='Search...'
              type='search'
              className='warehouses__search'
            ></input>
          </div>
          <div className='warehouses__button-container'>
            <Link to={`/warehouses/add`}>
              <button className='warehouses__button-add'>
                + Add New Warehouse
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='warehouses__subtitle'>
        <div className='warehouses__details-wrapper-left'>
          <div className='warehouses__warehouse-subtitle'>
            WAREHOUSE
            <img
              className='warehouses__sort-icon'
              src={sortArrow}
              alt='sort'
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
          <div className='warehouses__address-subtitle'>
            ADDRESS
            <img
              className='warehouses__sort-icon'
              src={sortArrow}
              alt='sort'
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
        <div className='warehouses__details-wrapper-right'>
          <div className='warehouses__contact-name-subtitle'>
            CONTACT NAME
            <img
              className='warehouses__sort-icon'
              src={sortArrow}
              alt='sort'
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
          <div className='warehouses__contact-info-subtitle'>
            CONTACT INFORMATION
            <img
              className='warehouses__sort-icon'
              src={sortArrow}
              alt='sort'
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
          <div className='warehouses__actions-subtitle'>ACTIONS</div>
        </div>
      </div>
      <div className='warehouses__container'>{warehouseList}</div>

      <div>
        {showModal && (
          <DeleteItemModal
            selectedItem={selectedWarehouse.name}
            showDeleteModal={showDeleteModal}
            getInventories={getWarehouses}
            deleteItem={() => deleteWarehouse(selectedWarehouse)}
            list='list of warehouses'
            description='warehouse'
          />
        )}
      </div>
    </section>
  );
};

export default Warehouses;
