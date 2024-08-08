import { toast } from 'react-toastify';

export function invalidInput(errorMessage) {
  toast.warn(errorMessage, {
    fontSize: '16px',
    width: '350px',
  });
}

export function successSubmit(message) {
  toast.success(message, {
    fontSize: '16px',
    width: '350px',
  });
}
