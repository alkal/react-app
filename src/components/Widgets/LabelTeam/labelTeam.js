import React,{Component} from 'react';
import axios from 'axios';
import {URL} from '../../config';
import FontAwesome from 'react-fontawesome';

export default class LabelTeam extends Component{

    state={
        teamID:[]
    }

    componentWillMount(){
        axios.get(`${URL}/teams/${this.props.teamId}`)
        .then(response=>{
            this.setState({
                teamID:response.data.name
            })
        })
    }
    
    render(){
       
        return(
            <div>
                <label>{this.state.teamID}</label>
                <FontAwesome name="clock-o"/>{this.props.dateTime}
                <FontAwesome name="user"/>{this.props.author}
            </div>
        )
    }
}
