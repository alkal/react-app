import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from './components/Layout/layout';
import Home from './components/Home/home';
import NewsArticle from './components/Articles/News/Posts/index';

export default class Routes extends Component{
   render(){
       return(
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/articles/:id" exact component={NewsArticle}/>
                </Switch>
            </Layout>
       )
   }

}