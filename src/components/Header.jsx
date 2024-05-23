import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 767);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    const nav = [
        { id: 1, number: '00', title: 'Home', url: '/Space-tourism/' },
        { id: 2, number: '01', title: 'Destination', url: '/Space-tourism/destination/' },
        { id: 3, number: '02', title: 'Crew', url: '/Space-tourism/crew/' },
        { id: 4, number: '03', title: 'Technology', url: '/Space-tourism/technology/' }
    ];

    return (
        <header>
            <NavLink to={nav[0].url} exact>
                <img src={logo} alt="Space Tourism logo" className="logo" />
            </NavLink>
            {isMobile && (
                <button className="nav-toggler" aria-expanded={isMenuOpen} aria-controls="menu" onClick={toggleMenu}>
                    <span>{isMenuOpen ? 'Close Navigation' : 'Open Navigation'}</span>
                </button>
            )}
            <nav className={isMenuOpen ? 'open' : ''} data-visible={isMenuOpen}>
                <ul id="menu">
                    {nav.map(({ id, number, title, url }) => (
                        <li key={id}>
                            <NavLink to={url} activeClassName="active" exact>
                                <span className="number" aria-hidden="true">{number}</span>{title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
