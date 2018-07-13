import React,{Component} from 'react';
import axios from 'axios';
import FontAwesome from 'react-fontawesome';

export default class LabelTeam extends Component{

    state={
        teamID:[]
    }

    componentWillMount(){
        axios.get(`${URL}/teams`)
    }
    
    render(){
        return(
            <div>
                LabelTeam
            </div>
        )
    }
}
