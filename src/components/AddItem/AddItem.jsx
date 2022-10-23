import { useNavigate } from 'react-router';
import BackArrow from '../../assets/icons/arrow_back-24px.svg';
import ErrorIcon from '../../assets/icons/error-24px.svg';

import './AddItem.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

//   -------------------- starts here
const AddItem = ({ addInventory, inputErrors, warehouses }) => {
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [warehouse, setWarehouse] = useState([]);
  const [inventory, setInventory] = useState(null);

  const categories = [
    'Electronics',
    'Gear',
    'Apparel',
    'Accessories',
    'Health',
  ];
  // Change handlers that allow the input fields contacts to be
  // inserted into the UseState

  const inputChangeHandler = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className='edit-inventory'>
      <div className='edit-inventory__title-wrapper'>
        <img
          src={BackArrow}
          alt=''
          className='edit-inventory__back-arrow'
          onClick={() => navigate('/inventory')}
        />
        <h1 className='edit-inventory__title'>Add New Inventory Item</h1>
      </div>

      <form className='form' onSubmit={(e) => addInventory(e)}>
        <div className='form__outer'>
          <div className='form__container form__container--left'>
            <div className='form__inner'>
              <h2 className='form__subtitle'>Item Details</h2>
              <div className='form__question'>
                <label htmlFor='name' className='form__label'>
                  Item Name
                </label>

                <input
                  type='text'
                  name='itemName'
                  id='itemName'
                  className={`form__input ${
                    inputErrors.name && 'form__input--error'
                  }`}
                  placeholder='Item Name'
                />
                {inputErrors.name && (
                  <div className='form__error'>
                    <img
                      src={ErrorIcon}
                      alt='An exclamation mark icon'
                      className='form__error-icon'
                    />
                    <p className='form__error-message'>
                      This field is required
                    </p>
                  </div>
                )}
              </div>

              <div className='form__question'>
                <label htmlFor='address' className='form__label'>
                  Description
                </label>
                <input
                  type='text'
                  name='address'
                  id='address'
                  className={` form__textarea ${
                    inputErrors.address && 'form__input--error'
                  }`}
                  placeholder='Please enter a brief description...'
                  // value={inventory.description}
                  onChange={(e) => inputChangeHandler(e)}
                />
                {inputErrors.address && (
                  <div className='form__error'>
                    <img
                      src={ErrorIcon}
                      alt='An exclamation mark icon'
                      className='form__error-icon'
                    />
                    <p className='form__error-message'>
                      This field is required
                    </p>
                  </div>
                )}
              </div>

              <div className='form__question'>
                <label htmlFor='city' className='form__label'>
                  Category
                </label>

                <select
                  className={`form__select ${
                    inputErrors.address && 'form__input--error'
                  }`}
                  onChange={(e) => setItem(e.target.value)}
                  // defaultValue={item}
                >
                  <option>Gear</option>
                  <option>Apparel</option>
                  <option>Accessories</option>
                  <option>Health</option>
                  <option>Electronics</option>
                </select>

                {inputErrors.city && (
                  <div className='form__error'>
                    <img
                      src={ErrorIcon}
                      alt='An exclamation mark icon'
                      className='form__error-icon'
                    />
                    <p className='form__error-message'>
                      This field is required
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className='form__container'>
            <div className='form__inner'>
              <h2 className='form__subtitle'>Item Availability</h2>
              <div className='form__question'>
                <label htmlFor='contactName' className='form__label'>
                  Status
                </label>

                <div className='container'>
                  <input
                    type='radio'
                    className='choice'
                    name='choice'
                    id='choice-1'
                    value='In stock'
                  ></input>
                  <label htmlFor='choice-1' className='radio-button-label'>
                    <span className='radio-button-icon'></span>In stock
                  </label>

                  <input
                    type='radio'
                    className='choice'
                    name='choice'
                    id='choice-2'
                    value='Out of stock'
                  ></input>
                  <label htmlFor='choice-2' className='radio-button-label'>
                    <span className='radio-button-icon'></span>Out of stock
                  </label>
                </div>

                {inputErrors.contactName && (
                  <div className='form__error'>
                    <img
                      src={ErrorIcon}
                      alt='An exclamation mark icon'
                      className='form__error-icon'
                    />
                    <p className='form__error-message'>
                      This field is required
                    </p>
                  </div>
                )}
              </div>

              <div className='form__question'>
                <label htmlFor='contactPosition' className='form__label'>
                  Quantity
                </label>
                <input
                  type='text'
                  name='address'
                  id='address'
                  className={`form__input ${
                    inputErrors.address && 'form__input--error'
                  }`}
                  placeholder='0'
                  onChange={(e) => inputChangeHandler(e)}
                />

                {inputErrors.contactPosition && (
                  <div className='form__error'>
                    <img
                      src={ErrorIcon}
                      alt='An exclamation mark icon'
                      className='form__error-icon'
                    />
                    <p className='form__error-message'>
                      This field is required
                    </p>
                  </div>
                )}
              </div>

              <div className='form__question'>
                <label htmlFor='contactPhone' className='form__label'>
                  Warehouse
                </label>

                <select
                  className={`form__select ${
                    inputErrors.address && 'form__input--error'
                  }`}
                  onChange={(e) => setItem(e.target.value)}
                >
                  <option>Manhattan</option>
                  <option>New Jersey</option>
                  <option>San Fran</option>
                  <option>Santa Monica</option>
                  <option>Miami</option>
                  <option>Boston</option>
                </select>

                {inputErrors.contactPhone && (
                  <div className='form__error'>
                    <img
                      src={ErrorIcon}
                      alt='An exclamation mark icon'
                      className='form__error-icon'
                    />
                    <p className='form__error-message'>
                      This field is required
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='form__buttons'>
          <button
            className='form__button form__button--cancel'
            onClick={() => navigate(`/warehouses`)}
          >
            Cancel
          </button>
          <button className='form__button form__button--add'>+ Add Item</button>
        </div>
      </form>
    </section>
  );
};

export default AddItem;
