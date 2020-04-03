import React from 'react';
import preloader from "../../img/preloader.svg";
import s from './preloader.module.css';

let Preloader = (props) => {
    return <div className={s.preloader}>
        <img src={preloader}/>
    </div>
}

export default Preloader;
