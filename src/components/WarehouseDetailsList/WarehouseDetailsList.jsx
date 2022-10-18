import "./WarehouseDetailsList.scss";
import sortArrow from "../../assets/icons/sort-24px.svg";
import arrowRight from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import React from "react";

const WarehouseDetailsList = () => {
  return (
    <div>
      <section className="warehouseList">
        <article className="warehouseList__tablet-heading">
          <div className="warehouseList__header">
            <p className="warehouseList__inventory-title">INVENTORY ITEM</p>
            <section>
              <img
                className="warehouseList__sort-arrows"
                src={sortArrow}
                alt="sort"
              />
            </section>
          </div>

          <div className="warehouseList__header">
            <p className="warehouseList__inventory-title">CATEGORY</p>
            <section>
              <img
                className="warehouseList__sort-arrows"
                src={sortArrow}
                alt="sort"
              />
            </section>
          </div>
          <div className="warehouseList__header">
            <p className="warehouseList__inventory-title">STATUS</p>
            <section>
              <img
                className="warehouseList__sort-arrows"
                src={sortArrow}
                alt="sort"
              />
            </section>
          </div>

          <div className="warehouseList__header">
            <p className="warehouseList__inventory-title">QTY</p>
            <section>
              <img
                className="warehouseList__sort-arrows"
                src={sortArrow}
                alt="sort"
              />
            </section>
          </div>

          <div className="warehouseList__header">
            <p className="warehouseList__inventory-title">ACTIONS</p>
          </div>
        </article>

        <article className="warehouseList__inventory">
          <section className="warehouseList__inventory-box">
            <p className="warehouseList__inventory-title warehouseList__header--mobile">
              INVENTORY ITEM
            </p>

            <div className="warehouseList__item-box">
              <div className="warehouseList__link">
                <p className="warehouseList__inventory-item">item name </p>
                <img
                  className="warehouseList__chevron"
                  src={arrowRight}
                  alt=""
                />
              </div>
            </div>
          </section>

          <section className="warehouseList__inventory-box">
            <p className="warehouseList__inventory-title warehouseList__header--mobile">
              CATEGORY
            </p>
            <div>
              <p className="WarehouseList__category-item">Catagories</p>
            </div>
          </section>

          <section className="warehouseList__inventory-box">
            <p className="warehouseList__inventory-status warehouseList__header--mobile">
              STATUS
            </p>
            <div className="WarehouseList__stock">
              <p className="warehouseList__category-item">IN STOCK</p>
            </div>
          </section>

          <section className="warehouseList__inventory-box">
            <p className="warehouseList__header--mobile">QTY</p>
            <div>
              <p className="warehouseList__category-item">500</p>
            </div>
          </section>

          <section className="warehouseList__inventory-icon">
            <div className="warehouseList__action-icons">
              <img
                className="warehouseList__delete-icon"
                src={deleteIcon}
                alt="delete"
              />
              <img
                className="warehouseList__edit-icon"
                src={editIcon}
                alt="edit"
              />
            </div>
          </section>
        </article>
      </section>
    </div>
  );
};

export default WarehouseDetailsList;
