import React from 'react'
import styles from "./Signin.module.css"

const Signin = () => {
    return (
        <div id={styles.signin}>
            <div id={styles.head}>Sign In</div>
            <div id={styles.fields}>
                <div className={styles.labin}>
                    <label htmlFor="mailin">Email id</label>
                    <input type="email" id="mailin" placeholder="Enter email address"/>
                </div>
                <div className={styles.labin}>
                    <label htmlFor="passin">Password</label>
                    <input type="password" id="passin" placeholder="Enter Password"/>
                </div>
            </div>
            <div id={styles.btn}><button type="button">Submit</button></div>
        </div>
    )
}

export default Signin