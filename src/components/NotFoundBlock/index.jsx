import React from 'react'

import styles from './NotFoundBlock.module.scss'

export const NotFoundBlock = () => {
    return (
        <div className={styles.root}>
            <h1>
                <span>🙍</span>
                <br />
                404 Not Found
            </h1>
            <p className={styles.description}>
                Sorry, this page is missing.    
            </p>
        </div>
    )
}
