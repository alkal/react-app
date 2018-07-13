import React from 'react';
//import {Link} from 'react-router-dom';
import styles from './buttons.css';

const buttons=(props)=>{
    
    let template=null;

    switch(props.type){
        case('loadmore'):
            template= (
                <div className={styles.loadBtn} 
                    onClick={props.loadmore}
                >
                    {props.cta}
                </div>
            )
            break;
        default:
            template=null;
            break;
    }
    
    return template;
}


export default buttons;
