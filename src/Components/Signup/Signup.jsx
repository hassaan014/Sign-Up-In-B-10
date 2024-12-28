import React from 'react'
import styles from "./Signup.module.css"

const Signup = () => {
    return (
        <div id={styles.signup}>
            <div id={styles.headup}>Sign Up</div>
            <div id={styles.fieldsup}>
                <div className={styles.labup}>
                    <label htmlFor="namup">Name</label>
                    <input type="text" id="nameup" placeholder="Enter your name" />
                </div>
                <div className={styles.labup}>
                    <label htmlFor="mailup">Email id</label>
                    <input type="email" id="mailup" placeholder="Enter email address" />
                </div>
                <div className={styles.labup}>
                    <label htmlFor="passup">Password</label>
                    <input type="password" id="passup" placeholder="Enter Password" />
                </div>
            </div>
            <div id={styles.btnup}><button type="button">Submit</button></div>
        </div>
    )
}

export default Signup