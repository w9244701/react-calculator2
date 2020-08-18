import React, { Component } from 'react';

class Button extends Component {
    
    render() {
        return (
            <div class="button" onClick={()=>this.props.handclick(this.props.value)}>{this.props.name}</div>
        )
    }
}
export default Button;