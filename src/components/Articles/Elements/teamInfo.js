import React from 'react'
import styles from '../articles.css';

const TeamInfo = (props)=>{
    return(
        <div className={styles.articleTeamHeader}>
            <div className={styles.left}>
               <img src={`/images/teams/${props.team.logo}`} alt={props.team.name}/>
            </div>
            <div className={styles.right}>
                <div>
                    <strong>{props.team.city} - {props.team.name}</strong>
                </div>
            </div>

        </div>
    );
}

export default TeamInfo;