import React,{Component} from 'react';
//import Slider from "react-slick";
import axios from 'axios';

import SliderTemplates from '../../../components/Widgets/Slider/slider_templates'

export default class NewsSlider extends Component{
    
    state={
        news:[]
    }
    
    
    componentWillMount(){
        axios.get(`http://localhost:3004/articles?_start=0&_end=3`)
        .then(response=>{
            this.setState({
                news:response.data
            })
        });
    }
    
    
    render(){
        return(
            <SliderTemplates data={this.state.news}/>
        )
    }
}