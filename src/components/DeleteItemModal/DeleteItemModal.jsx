import axios from "axios";
import React from "react";
import CrossIcon from "../../assets/icons/close-24px.svg";
import Button from "../Button/Button";
import "./DeleteItemModal.scss";

const DeleteItemModal = ({ selectedItem, showDeleteModal, getInventories }) => {
  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:8080/inventory/${id}`);
    getInventories();
    showDeleteModal();
  };

  return (
    <section className="delete-modal">
      <div className="delete-modal__container">
        <div className="delete-modal__icon-container">
          <img
            src={CrossIcon}
            alt="A cross icon"
            onClick={() => {
              showDeleteModal();
            }}
          />
        </div>
        <div className="delete-modal__wrapper">
          <div className="delete-modal__copy">
            <h2 className="delete-modal__title">
              Delete {selectedItem.itemName} inventory item?
            </h2>
            <p className="delete-modal__text">
              Please confirm that you'd like to delete {selectedItem.itemName}{" "}
              from the inventory list. You won't be able to undo this action.
            </p>
          </div>

          <div className="delete-modal__buttons">
            <Button
              buttonClass={"button button--cancel"}
              buttonAction={() => deleteItem(selectedItem.id)}
              buttonText="Cancel"
            />
            <Button
              buttonClass={"button button--delete"}
              buttonAction={() => deleteItem(selectedItem.id)}
              buttonText="Delete"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeleteItemModal;
