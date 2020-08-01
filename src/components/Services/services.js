import React, { Component } from 'react'
import styles from './services.module.css';  
import classNames from 'classnames'
export default class Services extends Component {
    render() {
        const serviceWebsite = classNames(styles.sec_mainbox, styles.service_website)
        const serviceMobile = classNames(styles.sec_mainbox, styles.service_mobile)
        const serviceEcommerce = classNames(styles.sec_mainbox, styles.service_Ecommerce)
        return (
            <div className={styles.br_services} >
                <div className={styles.sec_heading}>
                    Our Services
                </div>
                <div className={styles.sec_boxouter}>
                    <div className={serviceWebsite}>
                        <div className={styles.topright}></div>
                        <div className={styles.topleft}></div>
                        <div className={styles.bottomright}></div>
                        <div className={styles.bottomleft}></div>
                        <div className={styles.sec_boxdescription}>Website Development</div>
                    </div>
                    <div className={serviceMobile}>
                        <div className={styles.topright}></div>
                        <div className={styles.topleft}></div>
                        <div className={styles.bottomright}></div>
                        <div className={styles.bottomleft}></div>
                        <div className={styles.sec_boxdescription}>Mobile Development</div>
                    </div>
                    <div className={serviceEcommerce}>
                        <div className={styles.topright}></div>
                        <div className={styles.topleft}></div>
                        <div className={styles.bottomright}></div>
                        <div className={styles.bottomleft}></div>
                        <div className={styles.sec_boxdescription}>eCommerce</div>
                    </div>
                    <div className={serviceWebsite}>
                        <div className={styles.topright}></div>
                        <div className={styles.topleft}></div>
                        <div className={styles.bottomright}></div>
                        <div className={styles.bottomleft}></div>
                        <div className={styles.sec_boxdescription}>Website Development</div>
                    </div>    
                    <div className={serviceWebsite}>
                        <div className={styles.topright}></div>
                        <div className={styles.topleft}></div>
                        <div className={styles.bottomright}></div>
                        <div className={styles.bottomleft}></div>
                        <div className={styles.sec_boxdescription}>Website Development</div>
                    </div>                                   
                </div>
            </div>
        )
    }
}
