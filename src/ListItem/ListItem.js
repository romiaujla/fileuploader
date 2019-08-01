import React, {Component} from 'react';
import './ListItem.css';
import ControlBar from '../ControlBar/ControlBar';

export default class ListItem extends Component {
    render(){
        return (
            <div className='ListItem'>
                ListItem
                <ControlBar />
            </div>
        )
    }
}