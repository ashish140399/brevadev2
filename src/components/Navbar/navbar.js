import React, { Component } from 'react'
import styles from './navbar.module.css';  
export default class Navbar extends Component {
    render() {
        return (
            <div className={styles.navbar} >
                <div className={styles.logo}>BREVADE</div>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Our Work</a>
                    </li>
                    <li>
                        <a href="#">Clients</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
        )
    }
}
