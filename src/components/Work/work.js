import React, { Component } from 'react'
import styles from './work.module.css';  
import classNames from 'classnames';
import WorkBox from './workBox';
import ReactDOM from 'react-dom';

export default class Work extends Component {
    
    constructor(props){
        super();
        this.state={
            "Projects":[
                { "Name":"Brevade", "totalImages":1},
                { "Name":"hexbusiness", "totalImages":1},
                { "Name":"deepikachandrasekhar", "totalImages":1},
                { "Name":"GlmBetting", "totalImages":1},
               
            ],
            work_vertical_column_1:[],
            work_vertical_column_2:[],
            work_vertical_column_3:[]

        }
        var countcol1=0,countcol2=1;
        this.state.Projects.map((data,i) => {  
            if(countcol1==i){
                return ( 
                    this.state.work_vertical_column_1.push(<WorkBox key={i} FeatureImage={data.Name}/>),
                    countcol1=countcol1+3
                )  
            }
            else if(countcol2==i){
                return (
                    this.state.work_vertical_column_2.push(<WorkBox key={i} FeatureImage={data.Name}/>),
                    countcol2=countcol2+3
                )
            }
            else{
                return (
                    this.state.work_vertical_column_3.push(<WorkBox key={i} FeatureImage={data.Name}/>)
                )
            }
        })
    }
    

    render() {
        return (
            <div className={styles.br_work} >
                <div className={styles.sec_heading}>
                    Our Work
                </div>
                <div className={styles.sec_boxouter} >
                
                    
                    <div className={styles.vertical_column}>{this.state.work_vertical_column_1}</div>
                    <div className={styles.vertical_column}>{this.state.work_vertical_column_2}</div>
                    <div className={styles.vertical_column}>{this.state.work_vertical_column_3}</div>
                </div>
            </div>
        )
    }
}
