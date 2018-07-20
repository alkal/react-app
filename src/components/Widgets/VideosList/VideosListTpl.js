import React from 'react';
import {Link} from 'react-router-dom';
import styles from './videoList.css';

import LabelTeam from '../LabelTeam/labelTeam';

const VideosListTemplate=(props)=>{

    let template=null;


    switch(props.type){

        case('card'):
            template=props.data.map((item,i)=>{
                return(
                     <Link to={`/videos/${item.id}`} key={i} className={styles.videosCardList_item}>
                        <img src={`../images/videos/${item.image}`} alt={item.team}/>
                        <LabelTeam teamId={item.team} dateTime={item.date} className={styles.videoInfo}/>
                        <h2>{item.title}</h2>
                    </Link>
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

export default VideosListTemplate;