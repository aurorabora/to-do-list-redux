import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleItem } from '../actions';
import { Link } from 'react-router-dom';


class SingleItem extends Component {
    componentDidMount() {
        this.props.getSingleItem(this.props.match.params.id);
    }
    render() {
        console.log('Single Props:', this.props);

        const { title, details } = this.props.item;
        return (
            <div>
                <h1 className="center"> Some New Item </h1>
                <p> Here are some Details about my new Item </p>
                <div className="row align-right">
                    <Link to="/" className="btn blue-gray"> View full List </Link>
                </div>
                <h4>{title}</h4>
                <p>{details}</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        item: state.list.single
    }
}

export default connect(mapStateToProps, { getSingleItem: getSingleItem })(SingleItem);