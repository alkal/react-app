import React from 'react';
import Slick from "react-slick";
import styles from './slider.css';
import {Link} from 'react-router-dom';


const SliderTemplates = (props) => {

    const setting={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        ...props.settings
    }

    const SlickItem=()=>{
        return props.data.map((item,i)=>{
            return(
                <div key={i}>
                    <div className={styles.featured_item}>
                        <div className={styles.featured_image}
                            style={{
                                background:`url(../images/articles/${item.image})`
                            }}></div>
                        <Link to={`/articles/${item.id}`}>
                            <div className={styles.featured_caption}>
                                {item.title}
                            </div>
                        </Link>
                    </div>
                </div>
            )
        })
    }
    
    
    
    return(
        <Slick {...setting}>
            {SlickItem()}
        </Slick>
    )
}

export default SliderTemplates;