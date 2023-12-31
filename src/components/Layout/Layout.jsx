import React from 'react';
import { NavBar } from '../NavBar/navBar';
import { Footer } from '../Footer/Footer';
import './Layout.scss'

export const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};