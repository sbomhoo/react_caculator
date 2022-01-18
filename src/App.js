import React, { useState } from 'react';
import CalTemplate from './components/CalTemplate';
import CalButton from './components/CalButton';
import CalPannel from './components/CalPannel';
import CalResultView from './components/CalResultView';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

const App = () => {
    const [ inputs, setInputs ] = useState({
        input : '',
    }) 

    const { input } = inputs;   //비구조화 할당

    const getDataFromChild = (data) => {
        //아무 값이 없을때 0 이나 + - 누르면 렌더링 안되게
        if(!(input === "" && (data ==="+" || data ==="-"  || data ==="0"))){
            setInputs({
                ...inputs,
                input: input + data
            });
        }
    }

    return (
        <div>
            <GlobalStyle/>
            <CalTemplate  cButton= {<CalButton getDataFromChild= {getDataFromChild}/>}
                            cPannel = {<CalPannel calInput = {input}/>}>
                <CalResultView inputData = {input}></CalResultView>
            </CalTemplate>
        </div>
    );
};

export default App;
