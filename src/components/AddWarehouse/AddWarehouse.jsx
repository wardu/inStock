import React from "react";
import { useNavigate } from "react-router";
import BackArrow from "../../assets/icons/arrow_back-24px.svg";
import ErrorIcon from "../../assets/icons/error-24px.svg";
import Button from "../Button/Button";
import "./AddWarehouse.scss";

const AddWarehouse = ({ addWarehouse, inputErrors }) => {
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
        <div className="form__outer">
          <div className="form__container form__container--left">
            <div className="form__inner">
              <h2 className="form__subtitle">Warehouse Details</h2>
              <div className="form__question">
                <label htmlFor="name" className="form__label">
                  Warehouse Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className={`form__input ${
                    inputErrors.name && "form__input--error"
                  }`}
                  placeholder="Warehouse Name"
                />
                {inputErrors.name && (
                  <div className="form__error">
                    <img
                      src={ErrorIcon}
                      alt="An exclamation mark icon"
                      className="form__error-icon"
                    />
                    <p className="form__error-message">
                      This field is required
                    </p>
                  </div>
                )}
              </div>
              <div className="form__question">
                <label htmlFor="address" className="form__label">
                  Street Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className={`form__input ${
                    inputErrors.address && "form__input--error"
                  }`}
                  placeholder="Street Address"
                />
                {inputErrors.address && (
                  <div className="form__error">
                    <img
                      src={ErrorIcon}
                      alt="An exclamation mark icon"
                      className="form__error-icon"
                    />
                    <p className="form__error-message">
                      This field is required
                    </p>
                  </div>
                )}
              </div>
              <div className="form__question">
                <label htmlFor="city" className="form__label">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  className={`form__input ${
                    inputErrors.city && "form__input--error"
                  }`}
                  placeholder="City"
                />
                {inputErrors.city && (
                  <div className="form__error">
                    <img
                      src={ErrorIcon}
                      alt="An exclamation mark icon"
                      className="form__error-icon"
                    />
                    <p className="form__error-message">
                      This field is required
                    </p>
                  </div>
                )}
              </div>

              <div className="form__question">
                <label htmlFor="country" className="form__label">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  className={`form__input ${
                    inputErrors.country && "form__input--error"
                  }`}
                  placeholder="Country"
                />
                {inputErrors.country && (
                  <div className="form__error">
                    <img
                      src={ErrorIcon}
                      alt="An exclamation mark icon"
                      className="form__error-icon"
                    />
                    <p className="form__error-message">
                      This field is required
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="form__container">
            <div className="form__inner">
              <h2 className="form__subtitle">Contact Details</h2>
              <div className="form__question">
                <label htmlFor="contactName" className="form__label">
                  Contact Name
                </label>
                <input
                  type="text"
                  name="contactName"
                  id="contactName"
                  className={`form__input ${
                    inputErrors.contactName && "form__input--error"
                  }`}
                  placeholder="Contact Name"
                />
                {inputErrors.contactName && (
                  <div className="form__error">
                    <img
                      src={ErrorIcon}
                      alt="An exclamation mark icon"
                      className="form__error-icon"
                    />
                    <p className="form__error-message">
                      This field is required
                    </p>
                  </div>
                )}
              </div>

              <div className="form__question">
                <label htmlFor="contactPosition" className="form__label">
                  Position
                </label>
                <input
                  type="text"
                  name="contactPosition"
                  id="contactPosition"
                  className={`form__input ${
                    inputErrors.contactPosition && "form__input--error"
                  }`}
                  placeholder="Position"
                />
                {inputErrors.contactPosition && (
                  <div className="form__error">
                    <img
                      src={ErrorIcon}
                      alt="An exclamation mark icon"
                      className="form__error-icon"
                    />
                    <p className="form__error-message">
                      This field is required
                    </p>
                  </div>
                )}
              </div>

              <div className="form__question">
                <label htmlFor="contactPhone" className="form__label">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="contactPhone"
                  id="contactPhone"
                  className={`form__input ${
                    inputErrors.contactPhone && "form__input--error"
                  }`}
                  placeholder="Phone Number"
                />
                {inputErrors.contactPhone && (
                  <div className="form__error">
                    <img
                      src={ErrorIcon}
                      alt="An exclamation mark icon"
                      className="form__error-icon"
                    />
                    <p className="form__error-message">
                      This field is required
                    </p>
                  </div>
                )}
              </div>

              <div className="form__question">
                <label htmlFor="contactEmail" className="form__label">
                  Email
                </label>
                <input
                  type="text"
                  name="contactEmail"
                  id="contactEmail"
                  className={`form__input ${
                    inputErrors.contactEmail && "form__input--error"
                  }`}
                  placeholder="Email"
                />
                {inputErrors.contactEmail && (
                  <div className="form__error">
                    <img
                      src={ErrorIcon}
                      alt="An exclamation mark icon"
                      className="form__error-icon"
                    />
                    <p className="form__error-message">
                      This field is required
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="form__buttons">
          <Button
            buttonClass={"button button--cancel button--form-cancel"}
            buttonAction={() => navigate("/warehouses")}
            buttonText="Cancel"
          />
          {/* <button
            className="form__button form__button--cancel"
            onClick={() => navigate("/warehouses")}
          >
            Cancel
          </button> */}
          <Button
            buttonClass={"button button--add"}
            // buttonAction={() => navigate("/warehouses")}
            buttonText="+ Add Warehouse"
          />
          {/* <button className="form__button form__button--add">
            + Add Warehouse
          </button> */}
        </div>
      </form>
    </section>
  );
};

export default AddWarehouse;
