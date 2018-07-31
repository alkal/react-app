import React, {Component} from 'react';
import axios from 'axios';
import {URL} from '../../../config';
import styles from '../../../Articles/articles.css';

import Header from '../header';

import VideosListTpl from '../../../Widgets/VideosList/VideosListTpl';

export default class NewsVideos extends Component{
    
    state={
        video:[],
        team:[],
        related:[]
    }

    componentWillMount(){
        axios.get(`${URL}/videos?id=${this.props.match.params.id}`)
        .then(response=>{
            let video=response.data[0];
            axios.get(`${URL}/teams?id=${video.team}`)
            .then(response=>{
                this.setState({
                    video,
                    team:response.data[0]
                })
                this.getRelated();
            })
        })
    }

    getRelated=()=>{
        axios.get(`${URL}/videos?q=${this.state.team.city}&_limit=3`)
        .then(response=>{
            console.log(response.data)
            this.setState({
                related:response.data
            })
        })
    }
    
    
    
    render(){
        const video=this.state.video;
        const team=this.state.team;
        
        return(
            <div className={styles.articleWrapper}>
                <Header 
                    teamData={team}
                    date={video.date}/>
                <div className={styles.articleBody}>
                    <h1>{video.title}</h1>
                    <iframe
                        title="videoplayer"
                        width="100%"
                        height="320px"
                        src={`https://www.youtube.com/embed/${video.url}`}
                    >
                    </iframe>
                </div>
                <VideosListTpl data={this.state.related} type="card"/>
            </div>
        )
    }
}