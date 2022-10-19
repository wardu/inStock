import React, { useEffect, useState } from "react";
import "./ItemDetails.scss";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
const ItemDetails = () => {
  // axios
  //   .get(`http://localhost:8080/inventories/${itemId}`)
  //   .then((res) => {
  //     setState({ itemDetails: res.data[0] });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // if (!itemDetails) {
  //   return <h1>Loading...</h1>;
  // }

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
          <h1 className="main-heading__title">main heading</h1>
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
            <p className="item-details__text">item description</p>
            <p className="item-details__label">CATEGORY:</p>
            <p className="item-details__text">item catagory</p>
          </section>
          <section className="item-details__section item-details__section--right">
            <div className="item-details__group">
              <div className="item-details__wrapper">
                <p className="item-details__label">STATUS:</p>
                <p className={"item-details__pill item-details__pill--green"}>
                  item status
                </p>
              </div>
              <div className="item-details__wrapper--col">
                <p className="item-details__label">QUANTITY:</p>
                <p className="item-details__text">item quantity</p>
              </div>
            </div>
            <div className="item-details__wrapper">
              <p className="item-details__label">WAREHOUSE:</p>
              <p className="item-details__text">item warehouse name</p>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
};

export default ItemDetails;
