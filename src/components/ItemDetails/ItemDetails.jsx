import React, { useEffect, useState } from "react";
import "./ItemDetails.scss";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
const ItemDetails = () => {
  const [itemDetails, setItemDetails] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/inventory/${itemId}`)
      .then((res) => {
        setItemDetails(res.data);
        // setItemDetails({ itemDetails: res.data[0] });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!itemDetails) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <main className="main-container">
        <section className="main-heading">
          <div to="/inventory" className="main-heading__nav-link">
            <img
              className="main-heading__back-button"
              src={arrowBack}
              alt="Go back"
            />
          </div>
          <h1 className="main-heading__title">{itemDetails.itemName}</h1>
          <div className="main-heading__nav-link main-heading__nav-link--right">
            <img
              className="main-heading__edit-icon"
              src={editIcon}
              alt="edit"
            />
          </div>
        </section>

        <article className="item-details">
          <section className="item-details__section item-details__section--left">
            <p className="item-details__label">ITEM DESCRIPTION:</p>
            <p className="item-details__text">{itemDetails.description}</p>
            <p className="item-details__label">CATEGORY:</p>
            <p className="item-details__text">{itemDetails.category}</p>
          </section>
          <section className="item-details__section item-details__section--right">
            <div className="item-details__group">
              <div className="item-details__wrapper">
                <p className="item-details__label">STATUS:</p>
                <p
                  className={
                    itemDetails.status === "In Stock"
                      ? "item-details__pill item-details__pill--green"
                      : "item-details__pill item-details__pill--red"
                  }
                >
                  {itemDetails.status}
                </p>
              </div>
              <div className="item-details__wrapper--col">
                <p className="item-details__label">QUANTITY:</p>
                <p className="item-details__text">{itemDetails.quantity}</p>
              </div>
            </div>
            <div className="item-details__wrapper">
              <p className="item-details__label">WAREHOUSE:</p>
              <p className="item-details__text">{itemDetails.warehouseName}</p>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
};

export default ItemDetails;
