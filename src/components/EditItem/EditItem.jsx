import axios from "axios";
import { useNavigate } from "react-router";
import BackArrow from "../../assets/icons/arrow_back-24px.svg";
import ErrorIcon from "../../assets/icons/error-24px.svg";
import "./EditItem.scss";
import { useParams } from "react-router";
import { getInventory } from "../../utils/apiHelpers.mjs";
import { useEffect, useState } from "react";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const categories = ["Electronics", "Gear", "Apparel", "Accessories", "Health"];

const EditItem = ({ warehouses }) => {
  const navigate = useNavigate();
  const { itemId } = useParams();

  const [inventory, setInventory] = useState(null);
  const [errors, setErrors] = useState({
    itemName: false,
    description: false,
    status: false,
    quantity: false,
    warehouseId: false,
    warehouseName: false,
  });

  const inputChangeHandler = (e) => {
    setInventory({
      ...inventory,
      [e.target.name]: e.target.value,
    });
  };

  // Ensure the quantity is reset if the user selects out of stock
  const statusChangeHandler = (e) => {
    if (e.target.value === "Out of Stock") {
      setInventory({
        ...inventory,
        quantity: 0,
        status: "Out of Stock",
      });
    } else {
      inputChangeHandler(e);
    }
  };

  const changeWarehouse = (e) => {
    const warehouse = warehouses.find(
      (warehouse) => warehouse.id === e.target.value
    );
    setInventory({
      ...inventory, //spread operator, to keep all other values the same, but change other values below
      warehouseName: warehouse.name,
      warehouseID: e.target.value,
    });
  };

  useEffect(() => {
    const getData = async () => {
      const response = await getInventory(itemId);
      setInventory(response.data);
    };

    getData();
  }, [itemId]);

  const editInventory = async (e, itemId, inventory) => {
    e.preventDefault();

    setErrors({
      itemName: false,
      description: false,
      category: false,
      country: false,
      status: false,
      quantity: false,
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

    if (showError) {
      return;
    }

    await axios.put(`${BASE_URL}/inventory/${itemId}`, inventory);

    navigate("/inventory");
  };

  if (!inventory) {
    return <p>Loading...</p>;
  }

  return (
    <section className='edit-inventory'>
      <div className='edit-inventory__title-wrapper'>
        <img
          src={BackArrow}
          alt=''
          className='edit-inventory__back-arrow'
          onClick={() => navigate("/inventory")}
        />
        <h1 className='edit-inventory__title'>Edit Inventory Item</h1>
      </div>
      <form
        className='form'
        onSubmit={(e) => editInventory(e, itemId, inventory)}
      >
        <div className='form__outer'>
          <div className='form__container form__container--left'>
            <div className='form__inner'>
              <h2 className='form__subtitle'>Item Details</h2>
              <div className='form__question form__question--item-name'>
                <label htmlFor='name' className='form__label'>
                  Item Name
                </label>
                <input
                  className='form__input'
                  type='text'
                  name='itemName'
                  id='itemName'
                  value={inventory.itemName}
                  placeholder='Item Name'
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
                  className='form__textarea'
                  type='text'
                  name='description'
                  id='description'
                  placeholder='Description'
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
                  className='form__select'
                  type='select'
                  name='category'
                  id='category'
                  value={inventory.category}
                  onChange={(e) => inputChangeHandler(e)}
                >
                  {categories.map((category, i) => {
                    return <option key={i}>{category}</option>;
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className='form__container'>
            <div className='form__inner'>
              <h2 className='form__subtitle'>Item Availability</h2>
              <div className='form__question'>
                <label htmlFor='status' className='form__label'>
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
                      onChange={(e) => statusChangeHandler(e)}
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
                      onChange={(e) => statusChangeHandler(e)}
                    />
                    <label
                      htmlFor='Out of Stock'
                      className='form__label--status'
                    >
                      Out of Stock
                    </label>
                  </div>
                </div>
              </div>
              <div
                className={
                  inventory.status === "Out of Stock"
                    ? "form__question form__quantity-outstock"
                    : "form__question form__quantity-instock"
                }
              >
                <label htmlFor='name' className='form__label'>
                  Quantity
                </label>
                <input
                  className='form__input'
                  type='number'
                  name='quantity'
                  id='quantity'
                  value={inventory.quantity}
                  placeholder='Quantity'
                  onChange={(e) => inputChangeHandler(e)}
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
                  {warehouses.map((warehouse) => {
                    return (
                      <option key={warehouse.id} value={warehouse.id}>
                        {warehouse.name}
                      </option>
                    );
                  })}
                  {/* <option>{inventory.warehouseName}</option> */}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className='form__buttons'>
          <button
            className='form__button form__button--cancel'
            onClick={() => navigate(`/inventory`)}
          >
            Cancel
          </button>
          <button className='form__button form__button--add' type='submit'>
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditItem;
