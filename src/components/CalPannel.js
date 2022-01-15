import React, { Component } from 'react';

class CalPannel extends Component {
    render() {
        return (
            <h1>
                {this.props.calInput}
            </h1>
        );
    }
}

export default CalPannel;