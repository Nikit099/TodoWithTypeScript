import React from 'react';
import { Link } from "react-router-dom"

interface NavbarProps {
  theme: boolean
  handleTheme(): void
}

const Navbar: React.FC<NavbarProps> = ({theme, handleTheme}) => {

    return (
        <nav>
        <div className={'px1 nav-wrapper  transition ' + (theme ? 'blue lighten-2' : 'indigo darken-4')}>
          <a href="/" className="brand-logo ">Todo + TypeScript</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to='/'>Список дел</Link></li>
            <li><Link to='/about'>Информация</Link></li>
            <li><button onClick={handleTheme} className=' indigo lighten-3 btn waves-effect waves-light'>{theme ? 'установить темную тему': 'установить светлую тему'}</button></li>
          </ul>
        </div>
      </nav>
    );
};

export default Navbar;