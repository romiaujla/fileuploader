import React from 'react';
import './FilterableList.css';
import ListItem from '../ListItem/ListItem';

export default class FilterableList extends React.Component {

    static defaultProps = {
        files: []
    };

    render(){

        const list = this.props.files.map((file, key) => <ListItem {...file} key={key} />)

        return (
            <div className='FilterableList'>
                {list}
            </div>
        )
    }
}