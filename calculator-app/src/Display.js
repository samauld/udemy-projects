import React, {Component} from 'react';

class Display extends Component {

    render() {
        return(
        <h1>{this.props.entry}</h1>
        )
    }
}

export default Display;