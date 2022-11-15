import React from 'react';
import Navigation from "../routes/Navigation";
import style from '../common/styles/container.module.scss'

const Header = () => {
    return (
        <div className={style.container}>
            <div>
                Friday Project
            </div>
            <div>
                <Navigation/>
            </div>
        </div>
    )
}

export default Header;

//test