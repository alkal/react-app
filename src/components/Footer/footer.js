import React from 'react';
import styles from './footer.css'

import {current_year} from '../config';

const Footer = () => {




    return(
        <footer className={styles.footer}>
            <div>
                @App {current_year} All rights reserved.
            </div>
        </footer>
    )
}

export default Footer;