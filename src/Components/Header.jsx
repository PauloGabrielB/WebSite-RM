import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logorm.png';
import menu from '../img/menu_white_36dp.svg';
import closeMenu from '../img/close_white_36dp.svg';


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
        console.log("Toggle menu:", isMenuOpen);
        
    }

    return (
        <header>
            <nav className='nav-bar'>
                <div className='logo-div'>
                    <img className='logo' src={logo} alt="" />
                </div>

                <div className="nav-list">
                    <ul className={isMenuOpen ? 'nav-list-open' : 'nav-list-closed'}>
                        <Link to={'/'}>
                        <li className='nav-item'><a className='nav-link' href="#home">Home</a></li>
                        </Link>
                        <Link to={'/Equipamentos'}>
                            <li className='nav-item'><a className='nav-link' href="#equipamentos">Equipamentos</a></li>
                        </Link>
                        <Link to={'/Sobre'}>
                            <li className='nav-item'><a className='nav-link' href="#sobre">Sobre</a></li>
                        </Link>
                        
                        <li className='nav-item'><a className='nav-link' href="#contato">Contato</a></li>
                        <li className='nav-item'><a className='nav-link' href="#contato">Trabalhe Conosco</a></li>
                        <li className='nav-item'><a className='nav-link' href="#contato">SAC</a></li>
                    </ul>
                </div>

                <div className="mobile-menu-icon">
                    <button onClick={toggleMenu}>
                        <img className='icon-menu' src={isMenuOpen ? closeMenu : menu} alt="" />
                    </button>
                </div>
            </nav>
        </header>
    );
}
