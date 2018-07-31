import React from 'react';

import Slider from '../../../Widgets/Slider/slider';
import NewsList from '../../../Widgets/NewsList/newsList';

const NewsMain=()=>{



    return(
        <div>
            <Slider
                start={0}
                amount={4}
                settings={{
                    dots: false,
                    arrows:false
                }}    
            />
            <NewsList 
                type="card"
                loadmore={true}
                start={0}
                amount={10}
            />
        </div>
    )
}

export default NewsMain;
