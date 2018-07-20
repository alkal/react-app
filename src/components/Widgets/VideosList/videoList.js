import React, {Component} from 'react';
import styles from './videoList.css';
import axios from 'axios';
import {URL} from '../../config';
import Button from '../buttons/buttons';
import VideosListTpl from '../../../components/Widgets/VideosList/VideosListTpl';

export default class VideoList extends Component{
    state={
        teams:[],
        videos:[],
        start:this.props.start,
        end:this.props.start+this.props.amount,
        amount:this.props.amount
    }

    componentWillMount(){
        this.request(this.state.start, this.state.end)
    }

    request=(start,end)=>{
        axios.get(`${URL}/videos?_start=${start}&_end=${end}`)
        .then(response=>{
            this.setState({
                videos:[...this.state.videos,...response.data]
            })
        })
    }

    loadMore=()=>{
        let endPoint=this.state.end+this.state.amount;
        this.request(this.state.end,endPoint);
        this.setState({
            end:endPoint
        })
    }

    renderTitle=()=>{
        return this.props.title ? <h3><strong>NBA</strong> Videos</h3>:null;
    }

    renderButton=(type)=>{
        return type==='button' ? 
            <Button type="loadmore" cta="Load More Videos" loadmore={()=>this.loadMore()}/> 
            : 
            <Button type="link" cta="More videos"/>
    }

    render(){
        return(
            <div className={styles.videoList_wrapper}>
                {this.renderTitle()}
                <VideosListTpl data={this.state.videos} type="card"/>
                {this.renderButton('link')}
            </div>
        )
    }
}