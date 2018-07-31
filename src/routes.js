import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from './components/Layout/layout';
import Home from './components/Home/home';
import NewsArticle from './components/Articles/News/Posts/index';
import NewsVideos from './components/Articles/News/Videos/index';
import NewsMain from './components/Articles/News/PostsMain/index';
import VideoMain from './components/Articles/News/VideosMain/index';

export default class Routes extends Component{
   render(){
       return(
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/news" exact component={NewsMain}/>
                    <Route path="/videos" exact component={VideoMain}/>
                    <Route path="/articles/:id" exact component={NewsArticle}/>
                    <Route path="/videos/:id" exact component={NewsVideos}/>
                </Switch>
            </Layout>
       )
   }

}