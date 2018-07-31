import React from 'react';
import styles from '../articles.css';

const postData = (props)=>{

    const displayDate=(dateValue)=>{
        return dateValue?
        <div>
            Date: 
            <span>{dateValue}</span>
        </div>
        :
        null;
    }

    const displayAuthor=(authorValue)=>{
        return authorValue?
        <div>
            Author: 
            <span>{authorValue}</span>
        </div>
        :
        null;
    }



    return(
        <div className={styles.articlePostData}>
            {displayDate(props.data.date)}
            {displayAuthor(props.data.author)}
        </div>
    )
}

export default postData;