import './navBar.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

import { faHorse } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import { NavLink, Outlet } from "react-router-dom";
import { Component } from 'react';


const Item = ({nombre}) => {
    return(
        <>{nombre}</>
    )
}

export const NavBar = () => {
    const [count, setCount] = useState(0)

    const handleCount = () => {
        setCount(count + 1)
    }
    return (
        <>
            <header className='header1'>
                    <div className='div-titulo'>
                        <NavLink to={"/"}
                        >
                            <FontAwesomeIcon icon={faHorse} bounce className='logo'/>
                        </NavLink>
                        <h1>Cheval Marché</h1>
                    </div>

                    <div className='div-input'>
                        <input 
                        type="text" 
                        placeholder='Buscar producto'
                        />
                        <button>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='lupa'/>
                        </button>
                    </div>

                    <div className="navBar">
                        <div className='div-carrito'>
                            <FontAwesomeIcon icon={faCartShopping} className='carrito'/>
                            <div>
                                <p>Mi carrito,</p>
                                <button onClick={() => handleCount()}>
                                    {count}
                                </button>
                            </div>
                        </div>

                        <>
                            <Navbar expand={false} className="bg-body-tertiary mb-3">
                                <Container fluid>
                                    <Navbar.Toggle aria-controls="offcanvasNavbar-expand" />
                                    <Navbar.Offcanvas
                                        id="offcanvasNavbar-expand"
                                        aria-labelledby="offcanvasNavbarLabel-expand"
                                        placement="end"
                                        className="offcanva-fondo"
                                    >
                                        <Offcanvas.Header closeButton className='navBarTitulo'>
                                            <Offcanvas.Title id="offcanvasNavbarLabel-expand">
                                                Productos
                                            </Offcanvas.Title>
                                        </Offcanvas.Header>

                                        <Offcanvas.Body className='navBarCuerpo'>
                                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                                <NavLink
                                                 to={"/categoria/remeras"}
                                                 style={({ isActive }) => ({
                                                    color: isActive ? "rgb(85,10,33)" : "black",
                                                  })}
                                             
                                                 >
                                                    <Item nombre="Remeras"/>
                                                </NavLink>
                                                <NavLink
                                                 to={"/categoria/camisas"}
                                                 style={({ isActive }) => ({
                                                    color: isActive ? "rgb(85,10,33)" : "black",
                                                  })}
                                                 >
                                                    <Item nombre="Camisas"/>
                                                </NavLink>
                                                <NavLink
                                                 to={"/categoria/pantalones"}
                                                 style={({ isActive }) => ({
                                                    color: isActive ? "rgb(85,10,33)" : "black",
                                                  })}
                                                 >
                                                    <Item nombre="Pantalones"/>
                                                </NavLink>

                                                <NavLink
                                                 to={"/categoria/trajedebaño"}
                                                 style={({ isActive }) => ({
                                                    color: isActive ? "rgb(85,10,33)" : "black",
                                                  })}
                                                 >
                                                    <Item nombre="Trajes de baño"/>
                                                </NavLink>
                                            </Nav>
                                        </Offcanvas.Body>
                                    </Navbar.Offcanvas>
                                </Container>
                            </Navbar>
                        </>
                    </div>
            </header>
            <Outlet />
        </>
    );
  };