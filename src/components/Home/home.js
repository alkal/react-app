import React from 'react';
import Slider from '../../components/Widgets/Slider/slider';
import NewsList from '../../components/Widgets/NewsList/newsList';

const Home = ()=>{
    return(
        <div>
            <Slider
                start={0}
                amount={4}
                settings={{
                    dots: false
                }}    
            />
            <NewsList 
                type="card"
                loadmore={true}
                start={0}
                end={3}
                amount={3}
            />
        </div>
    )
}

export default Home;