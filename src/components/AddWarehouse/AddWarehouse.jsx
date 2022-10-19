import React from "react";
import { useNavigate } from "react-router";
import BackArrow from "../../assets/icons/arrow_back-24px.svg";
import ErrorIcon from "../../assets/icons/error-24px.svg";
import "./AddWarehouse.scss";

const AddWarehouse = ({ addWarehouse, showError, inputErrors }) => {
  const navigate = useNavigate();

  return (
    <section className="add-warehouse">
      <div className="add-warehouse__title-wrapper">
        <img
          src={BackArrow}
          alt=""
          className="add-warehouse__back-arrow"
          onClick={() => navigate("/warehouses")}
        />
        <h1 className="add-warehouse__title">Add New Warehouse</h1>
      </div>
      <form className="form" onSubmit={(e) => addWarehouse(e)}>
        <div className="form__container">
          <h2 className="form__subtitle">Warehouse Details</h2>
          {/* <Input label="Warehouse Name" name="name"  /> */}
          <label htmlFor="name" className="form__label">
            Warehouse Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form__input"
            placeholder="Warehouse Name"
          />
          {inputErrors.name && (
            <div className="upload__success">
              <img src={ErrorIcon} alt="" />
              <p className="upload__message">This field is required</p>
            </div>
          )}
          <label htmlFor="address" className="form__label">
            Street Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className="form__input"
            placeholder="Street Address"
          />
          {inputErrors.address && (
            <div className="upload__success">
              <img src={ErrorIcon} alt="" />
              <p className="upload__message">This field is required</p>
            </div>
          )}
          <label htmlFor="city" className="form__label">
            City
          </label>
          <input
            type="text"
            name="city"
            id="city"
            className="form__input"
            placeholder="City"
          />
          <label htmlFor="country" className="form__label">
            Country
          </label>
          <input
            type="text"
            name="country"
            id="country"
            className="form__input"
            placeholder="Country"
          />
        </div>
        <div className="form__container">
          <h2 className="form__subtitle">Contact Details</h2>
          <label htmlFor="contactName" className="form__label">
            Contact Name
          </label>
          <input
            type="text"
            name="contactName"
            id="contactName"
            className="form__input"
            placeholder="Contact Name"
          />
          <label htmlFor="position" className="form__label">
            Position
          </label>
          <input
            type="text"
            name="position"
            id="position"
            className="form__input"
            placeholder="Position"
          />
          <label htmlFor="phone" className="form__label">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="form__input"
            placeholder="Phone Number"
          />
          <label htmlFor="email" className="form__label">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="form__input"
            placeholder="Email"
          />
        </div>
        <div className="form__buttons">
          <button>Cancel</button>
          <button>Add Warehouse</button>
        </div>
      </form>
    </section>
  );
};

export default AddWarehouse;
