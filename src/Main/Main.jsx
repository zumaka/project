import React from 'react';
import s from './Main.module.scss';

const Main = () => {
    return (
        <div className={s.Main}>
            <span className={s.Title}>
                <div style={{color: "white"}}>WE ARE</div>
                <div style={{color: "#241c18"}}>THE BAND</div>
            </span>
        </div>
    );
}

export default Main;
