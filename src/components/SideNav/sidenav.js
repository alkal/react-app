import React from 'react';
import SideNav from 'react-simple-sidenav';

import SideNavsItems from '../../components/SideNav/sidenav_items';

const SideNavigation=(props)=>{
    return(
        <div>
            <SideNav
                showNav = {props.showNav}
                onHideNav = {props.onHideNav}
                style={{                   
                    maxWidth:'220px'
                }}
            >
                <SideNavsItems/>
            </SideNav>
        </div>
    )
}

export default SideNavigation;
