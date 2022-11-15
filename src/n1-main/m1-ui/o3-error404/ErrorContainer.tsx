import React from 'react';
import Error from "./Error";
import styles from '../common/styles/container.module.scss'

const ErrorContainer = () => {
    return (
        <div className={styles.container}>
            <Error/>
        </div>
    )
}

export default ErrorContainer;