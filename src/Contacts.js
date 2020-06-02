import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contacts extends Component {
    render() {
        return (
            <div class ="conters">
                <h1> {this.props.name} </h1>
                <ul>
                    <li>mobile phone number: {this.props.mobile}</li>
                    <li>work phone number: {this.props.work}</li>
                    <li>email address: {this.props.email}</li>
                </ul>
            </div>
        );
    }
}

Contacts.propTypes = {
    name: PropTypes.string.isRequired,
    mobile: PropTypes.string.isRequired,
    work: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
};

export default Contacts;