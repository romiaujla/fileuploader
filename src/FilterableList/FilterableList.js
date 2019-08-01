import React from 'react';
import './FilterableList.css';
import ListItem from '../ListItem/ListItem';

export default class FilterableList extends React.Component {
    render(){
        return (
            <div className='FilterableList'>
                <ListItem />
            </div>
        )
    }
}