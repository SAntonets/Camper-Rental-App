import { toast } from 'react-toastify';

export function invalidInput(errorMessage) {
  toast.warn(errorMessage, {
    fontSize: '16px',
    width: '350px',
  });
}

