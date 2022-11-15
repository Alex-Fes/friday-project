import React from 'react';
import Header from "./Header";
import styles from "../common/styles/container.module.scss";


const HeaderContainer = () => {
    return (
        <div className={styles.container}>
            <Header/>
        </div>
    )
}

// test
export default HeaderContainer;