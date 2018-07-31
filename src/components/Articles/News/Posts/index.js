import React, {Component} from 'react';
import axios from 'axios';
import {URL} from '../../../config';
import styles from '../../../Articles/articles.css';

import Header from '../header';

export default class NewsArticles extends Component {

    state={
        article:[],
        team:[]
    }


    componentWillMount(){
        axios.get(`${URL}/articles?id=${this.props.match.params.id}`)
        .then(response=>{
            let article=response.data[0];
            axios.get(`${URL}/teams?id=${article.team}`)
            .then(response=>{
                this.setState({
                    article,
                    team:response.data[0]
                })
            })
        });
    }





    render(){
        const article=this.state.article;
        const team=this.state.team;
        return(
            <div className={styles.articleWrapper}>
                <Header 
                    teamData={team}
                    date={article.date}
                    author={article.author}/>
                <div className={styles.articleBody}>
                    <h1>{article.title}</h1>
                    <div className={styles.articleImage}>
                        <img src={`/images/articles/${article.image}`} alt={team.name}/>
                    </div>
                    <div className={styles.articleText}>
                        {article.body}
                    </div>
                </div>
            </div>
        )
    }
}