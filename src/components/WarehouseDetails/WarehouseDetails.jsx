import React, { useEffect, useState } from "react";
import edit from "../../assets/icons/edit-white.svg";
import { Link, useParams } from "react-router-dom";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import "./WarehouseDetails.scss";
import WarehouseDetailsList from "../WarehouseDetailsList/WarehouseDetailsList";
import { getWarehouse } from "../../utils/apiHelpers.mjs";
const { v4: uuid } = require("uuid");

const WarehouseDetails = () => {
  const [warehouse, setWarehouse] = useState(null);

  const { warehouseId } = useParams();

  const getData = async () => {
    const response = await getWarehouse(warehouseId);
    setWarehouse(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  if (!warehouse) {
    return <p>Loading</p>;
  }

  return (
    <section className="details">
      <section className="details__title-box">
        <div className="details__title-row">
          <h2 className="details__title">
            <Link to="/warehouses" className="details__arrow-link">
              <img src={arrowBack} alt="go back" className="details__arrow" />
            </Link>
            {warehouse.name}
          </h2>
        </div>

        <div className="details__title-edit">
          <div className="details__edit-wrapper">
            <img src={edit} alt="edit" className="details__edit-icon " />
            <p className="details__edit-text">Edit</p>
          </div>
        </div>
      </section>

      <article className="details__address">
        <section className="details__address-box">
          <p className="details__address-title">WAREHOUSE ADDRESS:</p>
          <p className="details__address-location">{warehouse.address}</p>
        </section>

        <article className="details__info">
          <section className="details__info-box">
            <p className="details__info-contact">CONTACT NAME:</p>
            <p className="details__info-name">{warehouse.contact.name}</p>
            <p className="details__info-title">{warehouse.contact.position}</p>
          </section>

          <section className="details__contact">
            <p className="details__contact-info">CONTACT INFORMATION:</p>
            <p className="details__contact-number">{warehouse.contact.phone}</p>
            <p className="details__contact-email"> {warehouse.contact.email}</p>
          </section>
        </article>
      </article>
      <WarehouseDetailsList warehouseId={warehouseId} key={uuid()} />
    </section>
  );
};

export default WarehouseDetails;
