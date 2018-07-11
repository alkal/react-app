import React from 'react';
import style from './header.css'
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import SideNav from '../../components/SideNav/sidenav';

const Header = (props) => {

    const navBars = () =>{
        
        return(
            <div className={style.bars}>
                <FontAwesome name="bars" onClick={props.onOpenNav}/>
            </div>
        )
    }

    return(
        <header className={style.header}>
           
           <SideNav {...props}/>
           <div className={style.headerOpt}>
                {navBars()}
                <Link to="/" className={style.logo}>
                    <img alt="NBA Logo" src="/images/nba_logo.png"/>
                </Link>
           </div>
        </header>
    )
}

export default Header;