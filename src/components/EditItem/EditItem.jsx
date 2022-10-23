import React from "react";
import { useNavigate } from "react-router";
import BackArrow from "../../assets/icons/arrow_back-24px.svg";
import ErrorIcon from "../../assets/icons/error-24px.svg";
import "./EditItem.scss";
import { useParams } from "react-router";
import { getInventory } from "../../utils/apiHelpers.mjs";
import { useEffect, useState } from "react";

const EditItem = ({
  editInventory,
  inputErrors,
  inventories,
  selectedItem,
  warehouses,
}) => {
  const navigate = useNavigate();
  const { itemId } = useParams();
  const [inventory, setInventory] = useState(null);
  useEffect(() => {
    getInventory(itemId).then((response) => {
      setInventory(response.data);
    });
  }, []);
  //Change handlers that allow the input fields to be
  // inserted into the UseState
  console.log(inventories);

  // let categories = new Set();

  // inventories.forEach((item) => {
  //   categories.add(item.category);
  // });

  console.log(inventories);

  const inputChangeHandler = (e) => {
    setInventory({
      ...inventory,
      [e.target.name]: e.target.value,
    });
  };

  // const contactHandler = (e) => {
  //   setInventory({
  //     ...inventory,
  //     contact: {
  //       [e.target.name]: e.target.value,
  //     },
  //   });
  // };

  //Gets the data to populate the fields upon load

  const getData = async () => {
    const response = await getInventory(itemId);
    setInventory(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  if (!inventory) {
    return <p>Loading...</p>;
  }

  console.log(inventory.category);
  console.log(inventory.description);
  console.log(inventory.itemName);
  console.log(inventory.status);
  console.log(inventory.warehouseName);

  return (
    <section className="edit-inventory">
      <div className="edit-inventory__title-wrapper">
        <img
          src={BackArrow}
          alt=""
          className="edit-inventory__back-arrow"
          onClick={() => navigate("/inventory")}
        />
        <h1 className="edit-inventory__title">Edit Inventory Item</h1>
      </div>
      <form className="form" onSubmit={(e) => editInventory(e, itemId)}>
        <div className="form__outer">
          <div className="form__container form__container--left">
            <div className="form__inner">
              <h2 className="form__subtitle">Item Details</h2>
              <div className="form__question">
                <label htmlFor="name" className="form__label">
                  Item Name
                </label>
                <input
                  className="form__input"
                  type="text"
                  name="itemName"
                  id="itemName"
                  value={inventory.itemName}
                  placeholder="Item Name"
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="form__question">
                <label htmlFor="description" className="form__label">
                  Description
                </label>
                <textarea
                  className="form__textarea"
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Description"
                  value={inventory.description}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="form__question">
                <label htmlFor="category" className="form__label">
                  Category
                </label>
                <select
                  className="form__select"
                  type="select"
                  name="category"
                  id="category"
                  // placeholder={inventory.category}
                  // defaultValue={inventory.category}
                  onChange={(e) => inputChangeHandler(e)}
                >
                  <option>{inventory.category}</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form__container">
            <div className="form__inner">
              <h2 className="form__subtitle">Item Availability</h2>
              <div className="form__question">
                <label htmlFor="status" className="form__label">
                  Status
                </label>
                <div className="form__question--status">
                  <div className="form__question-radio-wrapper">
                    <input
                      type="radio"
                      checked={"In Stock"}
                      name="status"
                      id="In Stock"
                      value="In Stock"
                      onChange={(e) => inputChangeHandler(e)}
                      //onchange change state false
                    />
                    <label htmlFor="In Stock" className="form__label--status">
                      In Stock
                    </label>
                  </div>
                  <div className="form__question-radio-wrapper">
                    <input
                      type="radio"
                      name="status"
                      id="Out of Stock"
                      value="Out of Stock"
                      onChange={(e) => inputChangeHandler(e)}
                    />
                    <label
                      htmlFor="Out of Stock"
                      className="form__label--status"
                    >
                      Out of Stock
                    </label>
                  </div>
                </div>
              </div>
              <div className="form__question">
                <label htmlFor="warehouse" className="form__label">
                  Warehouse
                </label>
                <select
                  className="form__select"
                  type="select"
                  name="warehouse"
                  id="warehouse"
                >
                  {" "}
                  <option>{inventory.warehouseName}</option>{" "}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="form__buttons">
          <button
            className="form__button form__button--cancel"
            onClick={() => navigate(`/inventory`)}
          >
            Cancel
          </button>
          <button className="form__button form__button--add">Save</button>
        </div>
      </form>
    </section>
  );
};

export default EditItem;
