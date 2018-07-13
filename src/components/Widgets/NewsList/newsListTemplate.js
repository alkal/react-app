import React from 'react';
import {Link} from 'react-router-dom';
import styles from './newsList.css';

import LabelTeam from '../../Widgets/LabelTeam/labelTeam';

const newsListTemplate=(props)=>{

    let template=null;
    
    switch(props.type){

        case('card'):
            template=props.data.map((item,i)=>{
                return(
                    <div key={i} className={styles.newsListCard_item}>
                        <Link to={`/articles/${item.id}`}>
                            <LabelTeam teamId={item.team}/>
                            <h2>{item.title}</h2>
                        </Link>
                    </div>
                )
            });
            break;
        case('list'):
            template=props.data.map((item,i)=>{
                return(
                    <div key={i}>
                        List
                    </div>
                )
            });
            break;
        default:
            template=null;
    }

    return(
        <div>
            {template}
        </div>
    )
}

export default newsListTemplate;