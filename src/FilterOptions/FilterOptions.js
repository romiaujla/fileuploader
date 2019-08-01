import React from 'react';
import './FilterOptions.css';

export default class FilterOprions extends React.Component {

    render(){
        return (
            <div className='FilterOptions'>
                <div className='FilterOptions__option'>
                    <label htmlFor='filter_all'>
                        <input type='radio' valut='All' id='filter_all' name='filter_all' /> All
                    </label>
                </div>
                <div className='FilterOptions__option'>
                    <label htmlFor='filter_uploaded'>
                        <input type='radio' value='Uploaded' id='filter_uploaded' name='filter_uploaded' /> Uploaded
                    </label>
                </div>
                <div className='FilterOptions__option'>
                    <label htmlFor='filter_synced'>
                        <input type='radio' value='Synced' id='filter_synced' name='filter_synced' /> Synced
                    </label>
                </div>
                <div className='FilterOptions__option'>
                    <label htmlFor='filter_new'>
                        <input type='radio' value='New' id='filter_new' name='filter_new' /> New
                    </label>
                </div>
            </div>
        );
    }
}