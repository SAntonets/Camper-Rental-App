import { useState } from 'react';

import css from './BookingForm.module.css';
import svgSprite from '../../img/icons.svg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { SubmitButton } from 'components/Button/Button';
import { validateForm } from 'helpers/bookingFormValidation';
import { successSubmit } from 'helpers/notifications';

const BookingForm = () => {
  const [startDate, setStartDate] = useState();

  const handleSubmit = event => {
    event.preventDefault();

    const formData = new FormData(event.target);

    let bookingData = Object.fromEntries(formData.entries());
    bookingData = {
      ...bookingData,
      bookingDate: startDate?.toISOString().split('T')[0],
    };

    const errors = validateForm(bookingData);

    if (Object.keys(errors).length === 0) {
      console.log('form bookingData :>> ', bookingData);
      successSubmit('Your booking request has been successfully sent');
      reset(event);
    } else {
      console.log('Form is invalid :>> ', errors);
    }
  };

  const reset = event => {
    event.target.reset();
    setStartDate('');
  };

  return (
    <div className={css.bookForm_wrapper}>
      <form
        name="BookingForm"
        className={css.book_form}
        onSubmit={handleSubmit}
      >
        <div className={css.bookForm_title}>
          <h3 className="subtitle_h3">Book your campervan now</h3>
          <p className="text">
            Stay connected! We are always ready to help you.
          </p>
        </div>

        <div className={css.bookForm_inputs}>
          <label htmlFor="name">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              autoComplete="auto"
              className={css.bookForm_input}
              required
            />
          </label>
          <label htmlFor="email">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="auto"
              className={css.bookForm_input}
              required
            />
          </label>

          <label htmlFor="bookingDate" className={css.calendar_container}>
            <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
              placeholderText="Booking date"
              minDate={new Date()}
              dateFormat="dd/MM/yyyy"
              className={`${css.bookForm_input} ${css.date_input}`}
              formatWeekDay={nameOfDay => nameOfDay.slice(0, 3)}
              required
            />
            <svg className={css.calendar_svg} width={20} height={20}>
              <use href={`${svgSprite}#calendar`}></use>
            </svg>
          </label>

          <label htmlFor="comment">
            <textarea
              id="comment"
              name="comment"
              placeholder="Comment"
              className={css.bookForm_textarea}
            ></textarea>
          </label>
        </div>
        <SubmitButton type="submit">Send</SubmitButton>
      </form>
    </div>
  );
};

export default BookingForm;
