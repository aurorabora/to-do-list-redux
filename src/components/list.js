import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListData } from '../actions';

class List extends Component {
    componentDidMount(){
        this.props.getListData();
    }
    render (){
        return(
            <div>
            To Do List will go here
            </div>
        )
    }
}

export default connect(null, {getListData: getListData }) (List);