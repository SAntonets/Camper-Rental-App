import React from 'react';
import Header from '../Header/Header';
import { ToastContainer } from 'react-toastify';

const Layout = ({ children }) => {
  return (
    <div className="appContainer">
      <Header />
      <ToastContainer />
      <main className="content">
        {children}
      </main>
    </div>
  );
};

export default React.memo(Layout);
