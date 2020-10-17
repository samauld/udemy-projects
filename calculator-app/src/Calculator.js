import React, {Component} from 'react';
import Display from './Display';

class Calculator extends Component {
    constructor(props) {
        super(props);       
        
        this.state = {
            total: 0,
            entry: 0
        }
    }

    handleNumberClick = (e) => {
        if(this.state.entry === 0) {
            this.setState({entry: e});
        } else {
            this.setState({entry:"" + this.state.entry + e});
        }
    }

    //TODO: implement the math logic
    handleOpClick = (e) => {
        switch(e) {
            case '+':
                this.setState({total: this.state.total + this.state.entry})
                this.setState({entry: 0});
                break;
            case '-':
                console.log(e, "clicked");
                break;
            case '*':
                console.log(e, "clicked");
                break;
            case '/':
                console.log(e, "clicked");
                break;
            case '=':
                this.setState({entry: this.state.total});
                this.setState({total: 0});
                break;
            default:
                console.log("error");
        }
    }

    clear = (e) => {
        this.setState({
            total: 0,
            entry: 0
        });
    }

    //TODO: add a digit clear button
    render() {
        return(
            <div>               
                <Display
                    total={this.state.total}
                    entry={this.state.entry}
                />               
                <div>
                    <span>
                        <button onClick={(e) => this.handleNumberClick(7)}>7</button>
                        <button onClick={(e) => this.handleNumberClick(8)}>8</button>
                        <button onClick={(e) => this.handleNumberClick(9)}>9</button>
                    </span>
                    <br />
                    <span>
                        <button onClick={(e) => this.handleNumberClick(4)}>4</button>
                        <button onClick={(e) => this.handleNumberClick(5)}>5</button>
                        <button onClick={(e) => this.handleNumberClick(6)}>6</button>
                    </span>
                    <br />
                    <span>
                        <button onClick={(e) => this.handleNumberClick(1)}>1</button>
                        <button onClick={(e) => this.handleNumberClick(2)}>2</button>
                        <button onClick={(e) => this.handleNumberClick(3)}>3</button>
                    </span>
                </div>
                <div>
                    <button onClick={(e) => this.handleOpClick('+')}>+</button>
                    <button onClick={(e) => this.handleOpClick('-')}>-</button>
                    <button onClick={(e) => this.handleOpClick('*')}>*</button>
                    <button onClick={(e) => this.handleOpClick('/')}>/</button>
                </div>
                <div>
                    <button onClick={this.clear}>clear</button>
                    <button onClick={(e) => this.handleOpClick('=')}>=</button>
                </div>
            </div>
        )
    }
}

export default Calculator;