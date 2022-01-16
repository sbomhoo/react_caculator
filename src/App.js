import React, { Component } from 'react';
import CalTemplate from './components/CalTemplate';
import CalButton from './components/CalButton';
import CalPannel from './components/CalPannel';
import CalResultView from './components/CalResultView';

class App extends Component {

    state = {
        input : ''
    }

    getDataFromChild = (data) => {
        //아무 값이 없을때 0 이나 + - 누르면 렌더링 안되게
        if(!(this.state.input === "" && (data ==="+" || data ==="-"  || data ==="0"))){
            this.setState({
                input: this.state.input + data
            })
        }
    }

    render() {
        return (
            <div>
                <CalTemplate  cButton= {<CalButton getDataFromChild= {this.getDataFromChild}/>}
                            cPannel = {<CalPannel calInput = {this.state.input}/>}
                        >
                    <CalResultView inputData = {this.state.input}></CalResultView>
                </CalTemplate>
            </div>
            
        );
    }
}

export default App;