import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import React, { Component } from 'react';

class App extends Component {
    state = { len: 0, str: ''};
    changeListenerHandler = (event) => {
        const leng = !!event.target.value ? event.target.value.length : 0;
        this.setState({ len: leng, str: event.target.value });
    }

    clickHandler = (index) => {
        //const indexValue = [...this.state.str].findIndex((ch, ind) => {

        //    return ind === index;
        //});
        const finalArray = [...this.state.str].map((ch, ind) => {
            if (index !== ind)
                return ch;

            return null;
        });
        const finalO = finalArray.filter(Boolean);
        this.setState({ len: finalO.length, str: finalO.join('') })
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.changeListenerHandler} value={ this.state.str }/>
                <p> Number of characters you entered is {this.state.len} </p>
                <Validation leng={this.state.len} />
                <br />
                <br />
                {
                    [...this.state.str].map((ch, index) => {
                        return <Char chars={ch} click={this.clickHandler.bind(this, index)} key={index }/>;
                    })
                }
               


            </div >
        );

    }
}

export default App;
