import React, { Component } from 'react'
import styles from './home.module.css';  
import Wave from 'react-wavify'
export default class Home extends Component {
    render() {
        return (
            <div className={styles.br_home} >
                <div className={styles.br_homeInner}>
                    <div className={styles.col_6}>
                        <h1>Welcome to Brevade</h1>
                        <p>
                            Turning your ideas in reality <br/>
                            Empowering your business
                        </p>
                        <button class="ui primary button">
                            Contact Us
                        </button>
                    </div>
                    <div className={styles.col_6}>
                        <img src={require('../../assets/puzzle3.png')} />
                    </div>
                </div>
                <div className={styles.wave}>
                    <Wave fill='rgba(255, 255, 255, 0.2)'
                        paused={false}
                        options={{
                        height: 10,
                        amplitude:10,
                        speed: 0.2,
                        points: 4
                        }}
                    />
                </div>
                <div className={styles.wave2}>
                    <Wave fill='rgba(251, 249, 252, 1)'
                        paused={false}
                        options={{
                        height: 10,
                        amplitude:10,
                        speed: 0.2,
                        points: 4
                        }}  
                    />
                </div>           
            </div>
        )
    }
}
