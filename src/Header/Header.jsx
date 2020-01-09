import React from 'react';
import s from './Header.module.scss';
import { Link} from "react-scroll";
const Header = () => {
    return (
        <div className={s.Header}>
            <ul>
                <li><Link to='main' smooth={true}> HOME </Link></li>
                <li><Link to='singers' smooth={true}> ABOUT </Link> </li>
                <li><Link to='discography' smooth={true}> MUSIC </Link> </li>
                <li><Link to='contact' smooth={true}> CONTACT </Link> </li>
            </ul>
        </div>
    );
}

export default Header;
