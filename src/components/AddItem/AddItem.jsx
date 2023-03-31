import axios from "axios";
import { useNavigate } from "react-router";
import BackArrow from "../../assets/icons/arrow_back-24px.svg";
import ErrorIcon from "../../assets/icons/error-24px.svg";

import "./AddItem.scss";
import { useState } from "react";

const BASE_URL = process.env.REACT_APP_BASE_URL;

//   -------------------- starts here
const AddItem = ({ warehouses }) => {
  const navigate = useNavigate();

  const [inventory, setInventory] = useState({
    itemName: "",
    description: "",
    category: "",
    status: "",
    quantity: 0,
    warehouseName: "",
    warehouseID: "",
  });

  const [errors, setErrors] = useState({
    itemName: false,
    description: false,
    category: false,
    status: false,
    quantity: false,
    warehouse: false,
  });

  const addInventory = async (e) => {
    e.preventDefault();

    // On submit, reset all the errors just in case the user fixed any
    setErrors({
      itemName: false,
      description: false,
      category: false,
      status: false,
      quantity: false,
      warehouse: false,
    });

    let showError = false;

    if (!inventory.itemName) {
      showError = true;
      setErrors((prevErrors) => ({
        ...prevErrors,
        itemName: true,
      }));
    }

    if (!inventory.description) {
      showError = true;
      setErrors((prevErrors) => ({
        ...prevErrors,
        description: true,
      }));
    }

    if (!inventory.category) {
      showError = true;
      setErrors((prevErrors) => ({
        ...prevErrors,
        category: true,
      }));
    }

    if (!inventory.status) {
      showError = true;
      setErrors((prevErrors) => ({
        ...prevErrors,
        status: true,
      }));
    }

    if (inventory.status === "In Stock" && !inventory.quantity) {
      showError = true;
      setErrors((prevErrors) => ({
        ...prevErrors,
        quantity: true,
      }));
    }

    if (!inventory.warehouseName) {
      showError = true;
      setErrors((prevErrors) => ({
        ...prevErrors,
        warehouse: true,
      }));
    }

    if (showError) {
      return;
    }

    const newInventory = {
      itemName: inventory.itemName,
      description: inventory.description,
      category: inventory.category,
      status: inventory.status,
      quantity: inventory.quantity,
      warehouseName: inventory.warehouseName,
      id: inventory.warehouseID,
    };

    await axios.post("${BASE_URL}/inventory", newInventory);

    navigate("/inventory");
  };

  const categories = [
    "Electronics",
    "Gear",
    "Apparel",
    "Accessories",
    "Health",
  ];

  const inputChangeHandler = (e) => {
    setInventory({
      ...inventory,
      [e.target.name]: e.target.value,
    });
  };

  const changeWarehouse = (e) => {
    const warehouse = warehouses.find((warehouse) => {
      if (warehouse.id === e.target.value) return true;
    });
    setInventory({
      ...inventory,
      warehouseName: warehouse.name,
      warehouseID: e.target.value,
    });
  };

  return (
    <section className='add-inventory'>
      <div className='add-inventory__title-wrapper'>
        <img
          src={BackArrow}
          alt=''
          className='add-inventory__back-arrow'
          onClick={() => navigate("/inventory")}
        />
        <h1 className='add-inventory__title'>Add New Inventory Item</h1>
      </div>

      <form className='form' onSubmit={(e) => addInventory(e, inventory)}>
        <div className='form__outer'>
          <div className='form__container form__container--left'>
            <div className='form__inner'>
              <h2 className='form__subtitle'>Item Details</h2>
              <div className='form__question'>
                <label htmlFor='name' className='form__label'>
                  Item Name
                </label>

                <input
                  type='text'
                  name='itemName'
                  id='itemName'
                  className={`form__input ${
                    errors.itemName && "form__input--error"
                  }`}
                  placeholder='Item Name'
                  value={inventory.itemName}
                  onChange={(e) => inputChangeHandler(e)}
                />
                {errors.itemName && (
                  <div className='form__error'>
                    <img
                      src={ErrorIcon}
                      alt='An exclamation mark icon'
                      className='form__error-icon'
                    />
                    <p className='form__error-message'>
                      This field is required
                    </p>
                  </div>
                )}
              </div>

              <div className='form__question'>
                <label htmlFor='description' className='form__label'>
                  Description
                </label>
                <textarea
                  type='text'
                  name='description'
                  id='description'
                  className={` form__textarea ${
                    errors.description && "form__input--error"
                  }`}
                  placeholder='Please enter a brief description...'
                  value={inventory.description}
                  onChange={(e) => inputChangeHandler(e)}
                />
                {errors.description && (
                  <div className='form__error'>
                    <img
                      src={ErrorIcon}
                      alt='An exclamation mark icon'
                      className='form__error-icon'
                    />
                    <p className='form__error-message'>
                      This field is required
                    </p>
                  </div>
                )}
              </div>

              <div className='form__question'>
                <label htmlFor='category' className='form__label'>
                  Category
                </label>

                <select
                  className={`form__select ${
                    errors.category && "form__input--error"
                  }`}
                  name='category'
                  value={inventory.category}
                  onChange={(e) => inputChangeHandler(e)}
                >
                  <option className='form__option-placeholder'>
                    Please select
                  </option>
                  {categories.map((category, i) => {
                    return <option key={i}>{category}</option>;
                  })}
                </select>

                {errors.category && (
                  <div className='form__error'>
                    <img
                      src={ErrorIcon}
                      alt='An exclamation mark icon'
                      className='form__error-icon'
                    />
                    <p className='form__error-message'>
                      This field is required
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className='form__container'>
            <div className='form__inner'>
              <h2 className='form__subtitle'>Item Availability</h2>
              <div className='form__question'>
                <label htmlFor='contactName' className='form__label'>
                  Status
                </label>
                <div className='form__question--status'>
                  <div className='form__question-radio-wrapper'>
                    <input
                      type='radio'
                      checked={inventory.status === "In Stock" ? true : false}
                      name='status'
                      id='In Stock'
                      value='In Stock'
                      onChange={(e) => inputChangeHandler(e)}
                      //onchange change state false
                    />
                    <label htmlFor='In Stock' className='form__label--status'>
                      In Stock
                    </label>
                  </div>
                  <div className='form__question-radio-wrapper'>
                    <input
                      type='radio'
                      checked={
                        inventory.status === "Out of Stock" ? true : false
                      }
                      name='status'
                      id='Out of Stock'
                      value='Out of Stock'
                      onChange={(e) => inputChangeHandler(e)}
                    />
                    <label
                      htmlFor='Out of Stock'
                      className='form__label--status'
                    >
                      Out of Stock
                    </label>
                  </div>
                </div>
                {inventory.status === "In Stock" && (
                  <div className='form__question--quantity'>
                    <div className='form__question'>
                      <label htmlFor='quantity' className='form__label'>
                        Quantity
                      </label>
                      <input
                        type='number'
                        name='quantity'
                        id='quantity'
                        value={inventory.quantity}
                        onChange={(e) => inputChangeHandler(e)}
                        className='form__input'
                      />
                      {errors.quantity && (
                        <div className='form__error'>
                          <img
                            src={ErrorIcon}
                            alt='An exclamation mark icon'
                            className='form__error-icon'
                          />
                          <p className='form__error-message'>
                            This field is required
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                {errors.status && (
                  <div className='form__error'>
                    <img
                      src={ErrorIcon}
                      alt='An exclamation mark icon'
                      className='form__error-icon'
                    />
                    <p className='form__error-message'>
                      This field is required
                    </p>
                  </div>
                )}
              </div>

              <div className='form__question'>
                <label htmlFor='warehouse' className='form__label'>
                  Warehouse
                </label>
                <select
                  className='form__select'
                  type='select'
                  name='warehouse'
                  id='warehouse'
                  value={inventory.warehouseID}
                  onChange={changeWarehouse}
                >
                  <option className='form__option-placeholder'>
                    {" "}
                    Please select
                  </option>
                  {warehouses.map((warehouse) => {
                    return (
                      <option key={warehouse.id} value={warehouse.id}>
                        {warehouse.name}
                      </option>
                    );
                  })}
                </select>
                {errors.warehouse && (
                  <div className='form__error'>
                    <img
                      src={ErrorIcon}
                      alt='An exclamation mark icon'
                      className='form__error-icon'
                    />
                    <p className='form__error-message'>
                      This field is required
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className='form__buttons'>
          <button
            className='form__button form__button--cancel'
            onClick={() => navigate(`/warehouses`)}
          >
            Cancel
          </button>
          <button className='form__button form__button--add'>+ Add Item</button>
        </div>
      </form>
    </section>
  );
};

export default AddItem;
