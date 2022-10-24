import "./DeleteWarehouseModal.scss";

const DeleteWarehouseModal = ({
  selectedWarehouse,
  showDeleteModal,
  getWarehouses,
}) => {
  // const deleteWarehouse = async (id) => {
  //   await axios.delete(`http://localhost:8080/warehouses/${id}`);
  //   getWarehouses();
  //   showDeleteModal();
  // };

  return (
    <section className="delete-modal">
      {/* <div className="delete-modal__container">
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
              Delete {selectedWarehouse.city} warehouse?
            </h2>
            <p className="delete-modal__text">
              Please confirm that you'd like to delete the{" "}
              {selectedWarehouse.city} from the list of warehouses. You won't be
              able to undo this action.
            </p>
          </div>

          <div className="delete-modal__buttons">
            <button
              className="delete-modal__button delete-modal__button--cancel"
              onClick={() => {
                showDeleteModal();
              }}
            >
              Cancel
            </button>
            <button
              className="delete-modal__button delete-modal__button--delete"
              onClick={() => deleteWarehouse(selectedWarehouse)}
            >
              Delete
            </button>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default DeleteWarehouseModal;
