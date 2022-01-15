import React, { Component } from 'react';
import CalTemplate from './components/CalTemplate';
import CalButton from './components/CalButton';
import CalPannel from './components/CalPannel';

class App extends Component {

    state = {
        input : ''
    }

    getDataFromChild = (data) => {
        this.setState({
            input: this.state.input + data
        })
    }

    render() {
        return (
            <div>
                <CalTemplate  cButton= {<CalButton getDataFromChild= {this.getDataFromChild}/>}
                            cPannel = {<CalPannel calInput = {this.state.input}/>}
                        >


                </CalTemplate>
            </div>
            
        );
    }
}

export default App;