import { useNavigate } from 'react-router';
import BackArrow from '../../assets/icons/arrow_back-24px.svg';
import ErrorIcon from '../../assets/icons/error-24px.svg';
import './EditWarehouse.scss';
import { useParams } from 'react-router';
import { getWarehouse } from '../../utils/apiHelpers.mjs';
import { useEffect, useState } from 'react';

const EditWarehouse = ({ editWarehouse, inputErrors }) => {
  const navigate = useNavigate();
  const { warehouseId } = useParams();
  const [warehouse, setWarehouse] = useState(null);

  // Change handlers that allow the input fields contacts to be
  // inserted into the UseState
  const inputChangeHandler = (e) => {
    setWarehouse({
      ...warehouse,
      [e.target.name]: e.target.value,
    });
  };
  const contactHandler = (e) => {
    setWarehouse({
      ...warehouse,
      contact: {
        [e.target.name]: e.target.value,
      },
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

  if (!warehouse) {
    return <p> Loading ...</p>;
  }

  return (
    <section className='edit-warehouse'>
      <div className='edit-warehouse__title-wrapper'>
        <img
          src={BackArrow}
          alt=''
          className='edit-warehouse__back-arrow'
          onClick={() => navigate('/warehouses')}
        />
        <h1 className='edit-warehouse__title'>Edit Warehouse</h1>
      </div>
      <form className='form' onSubmit={(e) => editWarehouse(e, warehouseId)}>
        <div className='form__outer'>
          <div className='form__container form__container--left'>
            <div className='form__inner'>
              <h2 className='form__subtitle'>Warehouse Details</h2>
              <div className='form__question'>
                <label htmlFor='name' className='form__label'>
                  Warehouse Name
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  className={`form__input ${
                    inputErrors.name && 'form__input--error'
                  }`}
                  placeholder='Warehouse Name'
                  value={warehouse.name}
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
                  Street Address
                </label>
                <input
                  type='text'
                  name='address'
                  id='address'
                  className={`form__input ${
                    inputErrors.address && 'form__input--error'
                  }`}
                  placeholder='Street Address'
                  value={warehouse.address}
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
                  City
                </label>
                <input
                  type='text'
                  name='city'
                  id='city'
                  className={`form__input ${
                    inputErrors.city && 'form__input--error'
                  }`}
                  value={warehouse.city}
                  onChange={(e) => inputChangeHandler(e)}
                />
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

              <div className='form__question'>
                <label htmlFor='country' className='form__label'>
                  Country
                </label>
                <input
                  type='text'
                  name='country'
                  id='country'
                  className={`form__input ${
                    inputErrors.country && 'form__input--error'
                  }`}
                  value={warehouse.country}
                  onChange={(e) => inputChangeHandler(e)}
                />
                {inputErrors.country && (
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
              <h2 className='form__subtitle'>Contact Details</h2>
              <div className='form__question'>
                <label htmlFor='contactName' className='form__label'>
                  Contact Name
                </label>
                <input
                  type='text'
                  name='name'
                  id='contactName'
                  className={`form__input ${
                    inputErrors.contactName && 'form__input--error'
                  }`}
                  defaultValue={warehouse.contact.name}
                  onChange={(e) => contactHandler(e)}
                />

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
                  Position
                </label>
                <input
                  type='text'
                  name='position'
                  id='contactPosition'
                  className={`form__input ${
                    inputErrors.contactPosition && 'form__input--error'
                  }`}
                  defaultValue={warehouse.contact.position}
                  onChange={(e) => contactHandler(e)}
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
                  Phone Number
                </label>
                <input
                  type='text'
                  name='phone'
                  id='contactPhone'
                  className={`form__input ${
                    inputErrors.contactPhone && 'form__input--error'
                  }`}
                  defaultValue={warehouse.contact.phone}
                  onChange={(e) => contactHandler(e)}
                />
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

              <div className='form__question'>
                <label htmlFor='contactEmail' className='form__label'>
                  Email
                </label>
                <input
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
          <button className='form__button form__button--add'>Save</button>
        </div>
      </form>
    </section>
  );
};

export default EditWarehouse;
