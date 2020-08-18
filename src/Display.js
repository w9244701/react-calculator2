import React, { Component } from 'react';

class Display extends Component {

    render() {
        return (
            <div class="display">
                <div class="result" >
        <span class="operator">{this.props.operator}</span>
                    {this.props.result}</div>
            </div>
        )
    }
}
export default Display;
