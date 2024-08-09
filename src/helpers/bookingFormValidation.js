import { invalidInput } from './notifications';

export const validateForm = ({ name, email, bookingDate }) => {
  const newErrors = {};

  // Validate name
  if (name.length < 3) {
    newErrors.name = 'Name must be at least 3 characters long';
    invalidInput(newErrors.name);
  }

  // Validate email
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    newErrors.email = 'Email is invalid';
    invalidInput(newErrors.email);
  }

  // Validate date
  const currentDate = new Date();
  const selectedDate = new Date(bookingDate);

  if (!bookingDate || selectedDate <= currentDate) {
    newErrors.bookingDate = 'Booking date must be in the future';
    invalidInput(newErrors.bookingDate);
  }

  return newErrors;
};
