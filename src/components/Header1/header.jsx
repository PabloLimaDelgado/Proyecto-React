import './header.scss'
import { NavBar1 } from '../NavBar/navBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHorse } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export const Header1 = () => {
    return (
      <header className='header1'>
        <div className='div-titulo'>
          <FontAwesomeIcon icon={faHorse} bounce className='logo'/>
          <h1>Cheval Marché</h1>
        </div>

        <div className='div-input'>
            <input type="text" placeholder='Buscar producto'/>
            <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='lupa'/>
            </button>
        </div>
        <NavBar1/>
      </header>
    );
  };

