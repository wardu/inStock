import { default as React, useEffect, useState } from "react";
import arrowRight from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import sortArrow from "../../assets/icons/sort-24px.svg";
import DeleteItemModal from "../DeleteItemModal/DeleteItemModal";

import "./Inventory.scss";

import axios from "axios";

const Inventories = () => {
  const [inventories, setInventories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const getInventories = async () => {
    const response = await axios.get("http://localhost:8080/inventory");
    setInventories(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getInventories();
  }, []);

  const showDeleteModal = (id) => {
    const item = inventories.find((item) => {
      return id === item.id;
    });
    setSelectedItem(item);
    setShowModal(!showModal);
  };

  const inventoryList = inventories.map((inventories) => (
    <article key={inventories.id} className="inventories__details">
      <div className="inventories__info-container">
        <div className="inventories__details-container">
          <div className="inventories__details-wrapper-left">
            <div className="inventories__name-container">
              <div className="inventories__inventory-name-label">
                INVENTORY ITEM
              </div>

              <div className="inventories__inventory-name">
                {inventories.itemName}
                <img
                  className="inventories__arrow-icon"
                  src={arrowRight}
                  alt=""
                />
              </div>
            </div>
            <div className="inventories__category-container">
              <div className="inventories__inventory-category-label">
                CATEGORY
              </div>

              <div className="inventories__inventory-category">
                {inventories.category}
              </div>
            </div>
          </div>
          <div className="inventories__details-wrapper-right">
            <div className="inventories__status-container">
              <div className="inventories__status-label">STATUS</div>
              <div className="inventories__status">{inventories.status}</div>
            </div>
            <div className="inventories__qty-container">
              <div className="inventories__qty-label">QTY</div>
              <div className="inventories__qty">{inventories.quantity}</div>
            </div>
            <div className="inventories__warehouse-name-container">
              <div className="inventories__warehouse-name-label">WAREHOUSE</div>
              <div className="inventories__warehouse-name">
                {inventories.warehouseName}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inventories__icon-container">
        {" "}
        <img
          className="inventories__delete-icon"
          src={deleteIcon}
          alt="delete"
          onClick={() => {
            showDeleteModal(inventories.id);
          }}
        />
        <img className="inventories__edit-icon" src={editIcon} alt="edit" />
      </div>
    </article>
  ));

  return (
    <section className="inventories">
      <div className="inventories__title-container">
        <h1 className="inventories__title">Inventory</h1>
        <div className="inventories__title-wrapper-right">
          <div className="inventories__wrapper-search">
            <input
              placeholder="Search..."
              type="search"
              className="inventories__search"
            ></input>
          </div>
          <div className="inventories__button-container">
            <button className="inventories__button-add">+ Add New Item</button>
          </div>
        </div>
      </div>
      <div className="inventories__subtitle">
        <div className="inventories__subtitle-container">
          <div className="inventories__details-wrapper-left">
            <div className="inventories__inventory-item-subtitle">
              INVENTORY ITEM
              <img
                className="inventories__sort-icon"
                src={sortArrow}
                alt="sort"
              />
            </div>
            <div className="inventories__category-subtitle">
              CATEGORY
              <img
                className="inventories__sort-icon"
                src={sortArrow}
                alt="sort"
              />
            </div>
          </div>
          <div className="inventories__details-wrapper-right">
            <div className="inventories__status-subtitle">
              STATUS
              <img
                className="inventories__sort-icon"
                src={sortArrow}
                alt="sort"
              />
            </div>
            <div className="inventories__qty-subtitle">
              QTY{" "}
              <img
                className="inventories__sort-icon"
                src={sortArrow}
                alt="sort"
              />
            </div>
            <div className="inventories__warehouse-subtitle">
              WAREHOUSE{" "}
              <img
                className="inventories__sort-icon"
                src={sortArrow}
                alt="sort"
              />
            </div>
          </div>
        </div>
        <div className="inventories__actions-subtitle">ACTIONS</div>
      </div>

      <div className="inventories__container">{inventoryList}</div>
      <div>
        {showModal && (
          <DeleteItemModal
            selectedItem={selectedItem}
            showDeleteModal={showDeleteModal}
            getInventories={getInventories}
          />
        )}
      </div>
    </section>
  );
};

export default Inventories;
