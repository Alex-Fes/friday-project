import React from 'react';
import styles from "./Error.module.scss";

const Error = () => {
    return (<div className={styles.main}>
            <div className={styles.firstBlock}>

            </div>
            <div className={styles.description}>
                Error 404, not found.
            </div>
        </div>
    )
}

export default Error;