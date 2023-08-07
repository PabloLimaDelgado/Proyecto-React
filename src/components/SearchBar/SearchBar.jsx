import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { searchRopa } from "../../lib/ropa.request";
import { useNavigate } from 'react-router-dom';
import './SearchBar.scss'

export const SearchBar = () => {
    const [busqueda, setBusqueda] = useState("");
    const [results, setResults] = useState([]);
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setBusqueda(event.target.value);
    }

    const handleSearch = () => {
        searchRopa(busqueda.toLowerCase()).then((res) => {
            setResults(res);
        });

        navigate(`/search/${busqueda}`);
        setBusqueda('');
    }

    return (
        <div className='div-input'>
            <input 
                type="text" 
                placeholder='Buscar producto'
                onChange={handleInputChange}
                value={busqueda}
            />
            <button onClick={handleSearch}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='lupa'/>
            </button>
        </div>
    );
}

