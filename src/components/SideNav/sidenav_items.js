import React from 'react';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import style from './sideNav.css';

const SideNavItems = () =>{

    const items=[
        {
            icon:'home',
            text:'Home',
            link:'/'
        },
        {
            icon:'file-text-o',
            text:'News',
            link:'/news'
        },
        {
            icon:'play',
            text:'Videos',
            link:'/videos'
        },
        {
            icon:'sign-in',
            text:'Sign in',
            link:'/sign-in'
        },
        {
            icon:'sign-out',
            text:'Sign out',
            link:'/sign-out'
        },
    ]


    const showItems=()=>{
        return items.map((item,i) =>{
            return(
                <li key={i}>
                    <Link to={item.link}>
                        <FontAwesome name={item.icon} className={style.leftIcon}/>
                        {item.text}
                    </Link>
                </li>
            )
        })
    }


    return(
        <ul>
            {showItems()}
        </ul>
    )
}

export default SideNavItems;