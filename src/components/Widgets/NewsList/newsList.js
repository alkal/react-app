import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {URL} from '../../config';
import styles from './newsList.css';

import NewsListTpl from '../../Widgets/NewsList/newsListTemplate';
import Button from '../../Widgets/buttons/buttons';

export default class NewsList extends Component{
    state={
        newsList:[],
        start:this.props.start,
        end:this.props.start+this.props.amount,
        amount:this.props.amount
    }

    componentWillMount(){
        this.request(this.state.start,this.state.end)
    }

    request=(start,end)=>{
        axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
        .then(response=>{
            this.setState({
                newsList:[...this.state.newsList,...response.data]
            })
        });
    }

    loadMore=()=>{
        let endPoint=this.state.end+this.state.amount;
        this.request(this.state.end,endPoint);
        this.setState({
            end:endPoint
        })
    }

    render(){
        console.log(this.state.newsList);
        return(
            <div>
                <NewsListTpl data={this.state.newsList} type="card"/>
                <Button 
                    type="loadmore"
                    loadmore={()=>this.loadMore()}
                    cta="Load More News"
                />
            </div>
        )
    }

}