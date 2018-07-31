import React from 'react';

import VideoList from '../../../Widgets/VideosList/videoList';

const VideoMain=()=>{
    return(
        <div>
            <VideoList
                type="card"
                title={true}
                loadmore={false}
                start={0}
                amount={10}
            />
        </div>
    )
}

export default VideoMain;