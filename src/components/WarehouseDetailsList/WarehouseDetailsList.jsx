import "./WarehouseDetailsList.scss";
import sortArrow from "../../assets/icons/sort-24px.svg";
import arrowRight from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const WarehouseDetailsList = () => {
  const [inventory, setInventory] = useState(null);

  const { warehouseId } = useParams();

  useEffect(() => {
    const getWarehouseInventory = async () => {
      const response = await axios.get(
        `http://localhost:8080/warehouses/${warehouseId}/inventory`
      );
      setInventory(response.data);
    };

    getWarehouseInventory();
  }, []);

  if (!inventory) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <section className="warehouseList">
        <article className="warehouseList__tablet-heading">
          <div className="warehouseList__header">
            <p className="warehouseList__inventory-title">
              INVENTORY ITEM
              <img
                className="warehouseList__sort-arrows"
                src={sortArrow}
                alt="sort"
              />
            </p>
          </div>

          <div className="warehouseList__header">
            <p className="warehouseList__inventory-title">
              CATEGORY
              <img
                className="warehouseList__sort-arrows"
                src={sortArrow}
                alt="sort"
              />
            </p>
          </div>
          <div className="warehouseList__header">
            <p className="warehouseList__inventory-title">
              STATUS
              <img
                className="warehouseList__sort-arrows"
                src={sortArrow}
                alt="sort"
              />
            </p>
          </div>

          <div className="warehouseList__header">
            <p className="warehouseList__inventory-title">
              QTY
              <img
                className="warehouseList__sort-arrows"
                src={sortArrow}
                alt="sort"
              />
            </p>
          </div>

          <div className="warehouseList__header-action">
            <p className="warehouseList__action-title">ACTIONS</p>
          </div>
        </article>

        {inventory.map((item) => (
          <article key={item.id} className="warehouseList__inventory">
            <section className="warehouseList__inventory-box">
              <p className="warehouseList__inventory-title warehouseList__header-mobile">
                INVENTORY ITEM
              </p>
              <div className="warehouseList__item-box">
                <div className="warehouseList__link">
                  <p className="warehouseList__inventory-item">
                    {item.itemName}
                  </p>
                  <img
                    className="warehouseList__chevron"
                    src={arrowRight}
                    alt=""
                  />
                </div>
              </div>
            </section>

            <section className="warehouseList__inventory-box">
              <p className="warehouseList__inventory-title warehouseList__header-mobile">
                CATEGORY
              </p>
              <p className="WarehouseList__category-item">{item.category}</p>
            </section>

            <section className="warehouseList__inventory-box">
              <p className="warehouseList__inventory-title warehouseList__header-mobile">
                STATUS
              </p>
              <div className="warehouseList__stock">
                <p
                  className={
                    item.status === "In Stock"
                      ? "warehouseList__pill warehouseList__pill--green"
                      : "warehouseList__pill warehouseList__pill--red"
                  }
                >
                  {item.status}
                </p>
              </div>
            </section>

            <section className="warehouseList__inventory-box">
              <p className="warehouseList__inventory-title warehouseList__header-mobile">
                QTY
              </p>
              <p className="warehouseList__category-item">{item.quantity}</p>
            </section>

            <section className="warehouseList__inventory-icon">
              <div className="warehouseList__action-icons">
                <img
                  className="warehouseList__delete-icon"
                  src={deleteIcon}
                  alt="delete"
                />

                <Link to={`/inventory/${item.id}/edit`}>
                  <img
                    className="warehouseList__edit-icon"
                    src={editIcon}
                    alt="edit"
                    // onClick={() => {
                    //   showDeleteModal(item.id);
                    // }}
                  />
                </Link>
              </div>
            </section>
          </article>
        ))}
      </section>
    </div>
  );
};

export default WarehouseDetailsList;
