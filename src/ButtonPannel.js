import React, {Component} from 'react';
import Button from './Button';
class ButtonPannel extends Component {

    render() {
        return (
            <div class="buttonWrap">
                <Button name="AC" value="AC" handclick={this.props.cilckHandler}></Button>
                <Button name="+/-" value="+/-" handclick={this.props.cilckHandler}></Button>
                <Button name="%" value="%" handclick={this.props.cilckHandler}></Button>
                <Button name="÷" value="/" handclick={this.props.cilckHandler}></Button>
                <Button name="7" value="7" handclick={this.props.cilckHandler}></Button>
                <Button name="8" value="8" handclick={this.props.cilckHandler}></Button>
                <Button name="9" value="9" handclick={this.props.cilckHandler}></Button>
                <Button name="x" value="*" handclick={this.props.cilckHandler}></Button>
                <Button name="4" value="4" handclick={this.props.cilckHandler}></Button>
                <Button name="5" value="5" handclick={this.props.cilckHandler}></Button>
                <Button name="6" value="6" handclick={this.props.cilckHandler}></Button>
                <Button name="-" value="-" handclick={this.props.cilckHandler}></Button>
                <Button name="1" value="1" handclick={this.props.cilckHandler}></Button>
                <Button name="2" value="2" handclick={this.props.cilckHandler}></Button>
                <Button name="3" value="3" handclick={this.props.cilckHandler}></Button>
                <Button name="+" value="+" handclick={this.props.cilckHandler}></Button>
                <Button name="0" value="0" handclick={this.props.cilckHandler}></Button>
                <Button name="." value="." handclick={this.props.cilckHandler}></Button>
                <Button name="←" value="←" handclick={this.props.cilckHandler}></Button>
                <Button name="=" value="=" handclick={this.props.cilckHandler}></Button>
            </div>
        )
    }
}
export default ButtonPannel;
