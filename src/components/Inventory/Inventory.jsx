import axios from "axios";
import { default as React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import arrowRight from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import sortArrow from "../../assets/icons/sort-24px.svg";
import { sortItems } from "../../utils/sortingHelpers.mjs";
import DeleteItemModal from "../DeleteItemModal/DeleteItemModal";
import "./Inventory.scss";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Inventories = () => {
  const [inventories, setInventories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [sortItem, setSortItem] = useState(false);
  const [sortCategory, setSortCategory] = useState(false);
  const [sortStatus, setSortStatus] = useState(false);
  const [sortQuantity, setSortQuantity] = useState(false);
  const [sortWarehouse, setSortWarehouse] = useState(false);

  const getInventories = async () => {
    const response = await axios.get(`${BASE_URL}/inventory`);
    setInventories(response.data);
  };

  useEffect(() => {
    getInventories();
  }, []);

  const deleteItem = async (selectedItem) => {
    await axios.delete(`${BASE_URL}/inventory/${selectedItem.id}`);
    getInventories();
    showDeleteModal();
  };

  const showDeleteModal = (id) => {
    const item = inventories.find((item) => {
      return id === item.id;
    });
    setSelectedItem(item);
    setShowModal(!showModal);
  };

  const inventoryList = inventories.map((inventories) => (
    <article key={inventories.id} className='inventories__details'>
      <div className='inventories__info-container'>
        <div className='inventories__details-container'>
          <div className='inventories__details-wrapper-left'>
            <div className='inventories__name-container'>
              <div className='inventories__inventory-name-label'>
                INVENTORY ITEM
              </div>
              <Link to={`/inventory/${inventories.id}`}>
                <div className='inventories__inventory-name'>
                  {inventories.itemName}
                  <img
                    className='inventories__arrow-icon'
                    src={arrowRight}
                    alt=''
                  />
                </div>
              </Link>
            </div>
            <div className='inventories__category-container'>
              <div className='inventories__inventory-category-label'>
                CATEGORY
              </div>

              <div className='inventories__inventory-category'>
                {inventories.category}
              </div>
            </div>
          </div>
          <div className='inventories__details-wrapper-right'>
            <div className='inventories__status-container'>
              <div className='inventories__status-label'>STATUS</div>
              <div
                className={
                  inventories.status === "In Stock"
                    ? "inventories__pill inventories__pill--green"
                    : "inventories__pill inventories__pill--red"
                }
              >
                {inventories.status}
              </div>
            </div>
            <div className='inventories__qty-container'>
              <div className='inventories__qty-label'>QTY</div>
              <div className='inventories__qty'>{inventories.quantity}</div>
            </div>

            <div className='inventories__warehouse-name-container'>
              <div className='inventories__warehouse-name-label'>WAREHOUSE</div>
              <div className='inventories__warehouse-name'>
                {inventories.warehouseName}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='inventories__icon-container'>
        {" "}
        <img
          className='inventories__delete-icon'
          src={deleteIcon}
          alt='delete'
          onClick={() => {
            showDeleteModal(inventories.id);
          }}
        />
        <Link to={`/inventory/${inventories.id}/edit`}>
          <img className='inventories__edit-icon' src={editIcon} alt='edit' />
        </Link>
      </div>
    </article>
  ));

  return (
    <section className='inventories'>
      <div className='inventories__title-container'>
        <h1 className='inventories__title'>Inventory</h1>
        <div className='inventories__title-wrapper-right'>
          <div className='inventories__wrapper-search'>
            <input
              placeholder='Search...'
              type='search'
              className='inventories__search'
            ></input>
          </div>
          <div className='inventories__button-container'>
            <Link to='/inventory/add'>
              <button className='inventories__button-add'>
                + Add New Item
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='inventories__subtitle'>
        <div className='inventories__subtitle-container'>
          <div className='inventories__details-wrapper-left'>
            <div className='inventories__inventory-item-subtitle'>
              INVENTORY ITEM
              <img
                className='inventories__sort-icon'
                src={sortArrow}
                alt='sort'
                onClick={() => {
                  sortItems(sortItem, setSortItem, "itemName", setInventories);
                }}
              />
            </div>
            <div className='inventories__category-subtitle'>
              CATEGORY
              <img
                className='inventories__sort-icon'
                src={sortArrow}
                alt='sort'
                onClick={() => {
                  sortItems(
                    sortCategory,
                    setSortCategory,
                    "category",
                    setInventories
                  );
                }}
              />
            </div>
          </div>
          <div className='inventories__details-wrapper-right'>
            <div className='inventories__status-subtitle'>
              STATUS
              <img
                className='inventories__sort-icon'
                src={sortArrow}
                alt='sort'
                onClick={() => {
                  sortItems(
                    sortStatus,
                    setSortStatus,
                    "status",
                    setInventories
                  );
                }}
              />
            </div>
            <div className='inventories__qty-subtitle'>
              QTY{" "}
              <img
                className='inventories__sort-icon'
                src={sortArrow}
                alt='sort'
                onClick={() => {
                  sortItems(
                    sortQuantity,
                    setSortQuantity,
                    "quantity",
                    setInventories
                  );
                }}
              />
            </div>
            <div className='inventories__warehouse-subtitle'>
              WAREHOUSE{" "}
              <img
                className='inventories__sort-icon'
                src={sortArrow}
                alt='sort'
                onClick={() => {
                  sortItems(
                    sortWarehouse,
                    setSortWarehouse,
                    "warehouseName",
                    setInventories
                  );
                }}
              />
            </div>
          </div>
        </div>
        <div className='inventories__actions-subtitle'>ACTIONS</div>
      </div>

      <div className='inventories__container'>{inventoryList}</div>
      <div>
        {showModal && (
          <DeleteItemModal
            selectedItem={selectedItem.itemName}
            showDeleteModal={showDeleteModal}
            getInventories={getInventories}
            deleteItem={() => deleteItem(selectedItem)}
            list='inventory list'
            description='inventory item'
          />
        )}
      </div>
    </section>
  );
};

export default Inventories;
