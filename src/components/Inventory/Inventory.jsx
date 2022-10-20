import React, { useState } from "react";
import DeleteItemModal from "../DeleteItemModal/DeleteItemModal";

const Inventory = () => {
  const [showModal, setShowModal] = useState(false);

  const showDeleteModal = () => {
    setShowModal(!showModal);
  };

  const selectedItem = {
    id: "9abbf2d2-45d5-463c-8429-ca5454d971d4",
    warehouseID: "bfc9bea7-66f1-44e9-879b-4d363a888eb4",
    warehouseName: "San Fran",
    itemName: "Water Bottle",
    description:
      "With a 1-litre capacity and BPA-free, this water-bottle is perfect for long days out.",
    category: "Accessories",
    status: "In Stock",
    quantity: 9875,
  };

  return (
    <div>
      Inventory
      <button
        onClick={() => {
          showDeleteModal();
        }}
      >
        Delete item
      </button>
      <div>
        {showModal && (
          <DeleteItemModal
            selectedItem={selectedItem}
            showDeleteModal={showDeleteModal}
          />
        )}
      </div>
    </div>
  );
};

export default Inventory;
