import React, { Component } from 'react';

class CalButton extends Component {

    onBtnClick = (e) => {
        this.props.getDataFromChild(e.target.value)  //부모에게 데이터보내기 
    }

    render() {
        return (
            <div>
                <button onClick={this.onBtnClick} value="1">1</button>
                <button onClick={this.onBtnClick} value="2">2</button>
                <button onClick={this.onBtnClick} value="3">3</button>
                <button onClick={this.onBtnClick} value="4">4</button>
                <button onClick={this.onBtnClick} value="5">5</button>
                <button onClick={this.onBtnClick} value="6">6</button>
                <button onClick={this.onBtnClick} value="7">7</button>
                <button onClick={this.onBtnClick} value="8">8</button>
                <button onClick={this.onBtnClick} value="9">9</button>
                <button onClick={this.onBtnClick} value="+">+</button>
                <button onClick={this.onBtnClick} value="0">0</button>
                <button onClick={this.onBtnClick} value="-">-</button>
            </div>
        );
    }
}

export default CalButton;