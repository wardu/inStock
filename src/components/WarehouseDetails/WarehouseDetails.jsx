import React from "react";
import edit from "../../assets/icons/edit-24px.svg";
import { Link } from "react-router-dom";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import "./WarehouseDetails.scss";
import WarehouseDetailsList from "../WarehouseDetailsList/WarehouseDetailsList";

const WarehouseDetails = () => {
  return (
    <section className="details">
      <section className="details__title-box">
        <img src={arrowBack} alt="go back" />
        <div className="details__title-row">
          <h2 className="details__title">Washington</h2>
        </div>

        <div className="details__title-row-contact">
          <div className="details__edit-wrapper">
            <img src={edit} alt="edit" className="details__edit-icon " />
          </div>
        </div>
      </section>

      <article className="details__address">
        <section className="details__address-box">
          <p className="details__address-title">WAREHOUSE ADDRESS:</p>
          <p className="details__address-location">warehouse location</p>
        </section>

        <article className="details__info">
          <section className="details__info-box">
            <p className="details__info-contact">CONTACT NAME:</p>
            <p className="details__info-name">contact name</p>
            <p className="details__info-title">contact position </p>
          </section>

          <section className="details__contact">
            <p className="details__contact-info">CONTACT INFORMATION:</p>
            <p className="details__contact-number">contact number </p>
            <p className="details__contact-email">contact email </p>
          </section>
        </article>
      </article>
      <WarehouseDetailsList />
    </section>
  );
};

export default WarehouseDetails;
