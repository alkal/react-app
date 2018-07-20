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
    
    displayDateTime=()=>{

        return this.props.dateTime!=null?
            <span><FontAwesome name="clock-o"/>{this.props.dateTime}</span>
            :
            null;
    }

    displayAuthor=()=>{
        return this.props.author!=null?
            <span><FontAwesome name="user"/>{this.props.author}</span>
            :
            null;
    }

    
    render(){
       
        return(
            <div>
                <label>{this.state.teamID}</label>
                {this.displayDateTime()}
                {this.displayAuthor()}
            </div>
        )
    }
}
