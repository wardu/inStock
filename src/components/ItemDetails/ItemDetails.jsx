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
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!itemDetails) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="itemDetails">
      <div className="itemDetails__header">
        <Link to="/inventory" className="itemDetails__header--back">
          <img src={arrowBack} alt="back" />
        </Link>
        <h1 className="itemDetails__header--name">{itemDetails.itemName}</h1>
        <Link
          className="itemDetails__header--edit"
          to={`/inventory/${itemDetails.id}/edit`}
        >
          <img
            className="itemDetails__header--edit"
            src={editIcon}
            alt="edit"
          />
        </Link>
      </div>
      <div className="itemDetails__info">
        <div className="itemDetails__info--first-half">
          <h3 className="itemDetails__info--header">ITEM DESCRIPTION</h3>
          <p className="itemDetails__info--text">{itemDetails.description}</p>
          <h3 className="itemDetails__info--header">CATEGORY</h3>
          <p className="itemDetails__info--text">{itemDetails.category}</p>
        </div>
        <div className="itemDetails__info--second-half">
          <div className="itemDetails__stock-container">
            <div className="itemDetails__status">
              <h3 className="itemDetails__info--header">STATUS</h3>
              <p
                className={
                  itemDetails.status === "In Stock"
                    ? "itemDetails__pill itemDetails__pill--green"
                    : "itemDetails__pill itemDetails__pill--red"
                }
              >
                {itemDetails.status}
              </p>
            </div>
            <div className="itemDetails__quantity">
              <h3 className="itemDetails__info--header">QUANTITY</h3>
              <p className="itemDetails__info--text">{itemDetails.quantity}</p>
            </div>
          </div>
          <h3 className="itemDetails__info--header">WAREHOUSE</h3>
          <p className="itemDetails__info--text">{itemDetails.warehouseName}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
