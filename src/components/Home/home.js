import React from 'react';
import Slider from '../../components/Widgets/Slider/slider';
import NewsList from '../../components/Widgets/NewsList/newsList';
import VideoList from '../../components/Widgets/VideosList/videoList';

const Home = ()=>{
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
                end={3}
                amount={3}
            />
            <VideoList
                type="card"
                title={true}
                loadmore={false}
                start={0}
                amount={3}
            />
        </div>
    )
}

export default Home;