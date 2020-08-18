import React, {Component} from 'react';
import ButtonPannel from './ButtonPannel';
import Display from './Display';
import './App.css';

class App extends Component {

    state = {
        input: "",
        result: "0",
        operator: "",
        expresstion: "",
        counter: 0
    }

    clickBtn = (e) => {
        if (/[0-9]+/.test(e)) { //number
            this.setState({
                input: this.state.input + e,
                result: this.state.input + e
            })
        } else if (e === ".") { // dot
            if (this.state.input.indexOf('.') > -1) {
                //점 두번 찍기 방지
            } else {
                this.setState({
                    input: this.state.result + e,
                    result: this.state.result + e
                });
            }
        } else if (e === '=') { //enter
            if (this.state.operator !== "" & this.state.input === "") {
                this.setState({
                    result: String(eval(this.state.expresstion.slice(0, -1))),
                    input: '',
                    operator: '',
                    expresstion: ''
                })
            } else if (this.state.expresstion === "") {
                this.setState(
                    {input: '', operator: '', expresstion: '', result: this.state.result}
                )
            } else {
                this.setState({
                    result: String(eval(this.state.expresstion + this.state.input)),
                    input: '',
                    operator: '',
                    expresstion: '',
                    log: this.state.expresstion + this.state.input
                })
            }

        } else if (e === 'AC') { //clear
 

                this.setState({
                    input: '',
                    result: '0',
                    operator: '',
                    expresstion: '',
                    counter: this.state.counter + 1,
                    log: ""
                });

            

        } else if (e === '←') {
            this.setState({
                input: this.state.input.slice(0, -1),
                result: this.state.result.slice(0, -1)
            });
        } else if (e === '%') {} else if (e === '+/-') {} else if (/[+-/*]/.test(e)) { // operator
            this.setState({input: ""})
            if (e === '/') {
                this.setState({operator: '÷'})
            } else if (e === '*') {
                this.setState({operator: 'x'})
            } else {
                this.setState({operator: e})
            }

            if (this.state.operator !== "" & this.state.input !== "") {
                this.setState({
                    result: String(eval(this.state.expresstion + this.state.input)),
                    expresstion: String(eval(this.state.expresstion + this.state.input)) + e
                });
            } else {
                this.setState({
                    expresstion: this.state.result + e
                });
            }
        }
    }

    render() {
        return (
            <div class="app">
                <Display result={this.state.result} operator={this.state.operator}></Display>
                <ButtonPannel cilckHandler={this.clickBtn}></ButtonPannel>
            </div>
        );
    }

}

export default App;