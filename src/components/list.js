import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getListData } from '../actions';

class List extends Component {
    componentDidMount() {
        this.props.getListData();
    }
    render() {
        const { listData } = this.props;
        const listItems = listData.map((item, index) => {
            return <li className="collection-item" key={item._id}>{item.title}</li>
        });

        return (
            <div>
                <h1 className="center"> To Do List </h1>
                <div className="row right-align">
                <Link className="btn purple lighten-2" to="/add-item">Add item</Link>
                </div>

            <ul className="collection">
            {listItems}
            </ul>
        </div>
        
        );
    }
}

    function mapStateToProps(state) {
        return {
            listData: state.list.all
    }
}

export default connect(mapStateToProps, { getListData: getListData })(List);