import React from 'react';
import s from './Contact.module.scss';
import subscribe from '../img/SUBSCRIBE.png';
import youtube from '../img/youtube.png';
import facebook from '../img/facebook.png';

const Contact = () => {
    return (
        <div className={s.Main}>
            <span className={s.Title}>
                <div style={{color: "#241c18"}}>CONTACT</div>
                <div style={{color: "white"}}>+48 202 - 555 - 0114</div>
            </span>
            <div className={s.Button}>
                <a href='#'><img src={subscribe}/></a>
                <a href='#'><img src={facebook}/></a>
                <a href='#'><img src={youtube}/></a>
            </div>
        </div>
    );
}

export default Contact;
