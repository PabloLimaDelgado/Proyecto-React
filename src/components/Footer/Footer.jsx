import React from 'react';
import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer-estilo">
        <p>&copy; {new Date().getFullYear()} Cheval Marché. Todos los derechos reservados.</p>
    </footer>
  );
};