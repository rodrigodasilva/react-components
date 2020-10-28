import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CustomContainerToast = styled(ToastContainer).attrs({
  // custom props
})`
  .Toastify__toast {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    padding: 6px 12px;
    border-radius: 5px;

    .custom-toastify-content {
      display: flex;
      flex-direction: column;
    }
    .custom-toastify-icon {
      margin-right: 10px;
    }
    .custom-toastify-title {
      color: #3d4859;
      font-size: 14px;
      margin-bottom: 2px;
    }
    .custom-toastify-description {
      color: var(--text-color);
      font-size: 13px;
      margin-bottom: 2px;
    }
  }

  .Toastify__toast--default {
    background: #fff;
    border-left: 5px solid var(--default-color);
  }

  .Toastify__toast--success {
    background: #fff;
    border-left: 5px solid var(--blue-2);
  }

  .Toastify__toast--error {
    background: #fff;
    border-left: 5px solid var(--danger-color);
  }

  .Toastify__toast--warning {
    border-left: 5px solid var(--orange-1);
    background: #fff;
  }

  .Toastify__close-button {
    color: #858f9e;
  }

  .Toastify__toast-body {
    margin: auto 0px;
    font-size: 16px;
    flex: 1 1 0%;
    display: flex;
    align-items: center;
  }

  .Toastify__progress-bar {
    background: #3d48593d;
  }
`;
