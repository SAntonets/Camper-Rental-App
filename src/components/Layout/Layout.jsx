import React from 'react';
import Header from '../Header/Header';

const Layout = ({ children }) => {
  return (
    <div className="appContainer">
      <Header />
      <main className="content">
        {children}
      </main>
    </div>
  );
};

export default React.memo(Layout);
