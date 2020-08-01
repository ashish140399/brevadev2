import React, { Component } from 'react'
import styles from './work.module.css';  

export default class WorkBox extends Component {
    render() {
        const workImage =this.props.FeatureImage
        return (
            
                <div className={styles.sec_mainbox} >
                    <div className={styles.topright}></div>
                    <div className={styles.topleft}></div>
                    <div className={styles.bottomright}></div>
                    <div className={styles.bottomleft}></div>
                    <img src={require('../../assets/Projects/'+workImage+'/feature.png')} alt="Our Works" className={styles.work_mainboxFeatureImg}/>
                    <div className={styles.work_boxdescription}>{workImage}</div>
                </div>
        )
    }
}
