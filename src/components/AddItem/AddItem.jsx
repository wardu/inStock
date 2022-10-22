import { useNavigate } from 'react-router';
import BackArrow from '../../assets/icons/arrow_back-24px.svg';
import ErrorIcon from '../../assets/icons/error-24px.svg';
import './AddItem.scss';

import { useParams } from 'react-router';
import { getWarehouse } from '../../utils/apiHelpers.mjs';
import { useEffect, useState } from 'react';

const AddItem = (inputErrors) => {
  const navigate = useNavigate();
  const { warehouseId } = useParams();
  const [warehouse, setWarehouse] = useState(null);
  const [item, setItem] = useState(null);

  // Change handlers that allow the input fields contacts to be
  // inserted into the UseState
  const inputChangeHandler = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  // Gets the data to populate the fields upon load
  const getData = async () => {
    const response = await getWarehouse(warehouseId);
    setWarehouse(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className='edit-warehouse'>
      <div className='edit-warehouse__title-wrapper'>
        <img
          src={BackArrow}
          alt=''
          className='edit-warehouse__back-arrow'
          onClick={() => navigate('/warehouses')}
        />
        <h1 className='edit-warehouse__title'>Add New Inventory Item</h1>
      </div>

      {/* -----------   Form --------------- */}
      <form className='form'>
        {' '}
        {/* onSubmit={(e) => editWarehouse(e, warehouseId)} */}
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
                  name='name'
                  id='name'
                  className={`form__input ${
                    inputErrors.name && 'form__input--error'
                  }`}
                  placeholder='Item Name'
                  onChange={(e) => inputChangeHandler(e)}
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
                  className={`form__input ${
                    inputErrors.address && 'form__input--error'
                  }`}
                  placeholder='Please enter a brief description...'
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

              {/* -----------   Category --------------- */}

              <div className='form__question'>
                <label htmlFor='city' className='form__label'>
                  Category
                </label>

                <select
                  className={`form__dropdown ${
                    inputErrors.address && 'form__input--error'
                  }`}
                  onChange={(e) => setItem(e.target.value)}
                  defaultValue={item}
                >
                  <option>Gear</option>
                  <option>Apparel</option>
                  <option>Accesories</option>
                  <option>Health</option>
                  <option>Electronics</option>
                </select>
                <h2>
                  {' '}
                  You selected{' '}
                  <span style={{ backgroundColor: 'yellow' }}>{item}</span>
                </h2>

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
                  {/* -----------   Radio buttons --------------- */}
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

                {/* <input
                  type='text'
                  name='position'
                  id='contactPosition'
                  className={`form__input ${
                    inputErrors.contactPosition && 'form__input--error'
                  }`}
                  defaultValue={warehouse.contact.position}
                  onChange={(e) => contactHandler(e)}
                /> */}
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
                  className={`form__dropdown ${
                    inputErrors.address && 'form__input--error'
                  }`}
                  onChange={(e) => setItem(e.target.value)}
                  defaultValue={item}
                >
                  <option>Manhattan</option>
                  <option>New Jersey</option>
                  <option>Accesories</option>
                  <option>Health</option>
                  <option>Electronics</option>
                </select>
                <h2>
                  {' '}
                  You selected{' '}
                  <span style={{ backgroundColor: 'yellow' }}>{item}</span>
                </h2>
                {/* <input
                  type='text'
                  name='phone'
                  id='contactPhone'
                  className={`form__input ${
                    inputErrors.contactPhone && 'form__input--error'
                  }`}
                  defaultValue={warehouse.contact.phone}
                  onChange={(e) => contactHandler(e)}
                /> */}
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

              {/* <div className='form__question'>
                <label htmlFor='contactEmail' className='form__label'>
                  Email
                </label>
                {/* <input
                  type='text'
                  name='email'
                  id='contactEmail'
                  className={`form__input ${
                    inputErrors.contactEmail && 'form__input--error'
                  }`}
                  defaultValue={warehouse.contact.email}
                  onChange={(e) => contactHandler(e)}
                />
                {inputErrors.contactEmail && (
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
              </div> */}
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
          <button className='form__button form__button--add'>Save</button>
        </div>
      </form>
    </section>
  );
};

export default AddItem;
