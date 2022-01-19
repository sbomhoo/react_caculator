import React from "react";
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  width: 460px;
  height: 700px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white; 
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  
  h1 {
    padding: 10px;
    color : #20c997;  //연두색
    font-size: 41px;
    text-align: center;
  }

`;

const CalTemplate = ({cPannel,cButton,children}) => {
    return(
        <TodoTemplateBlock>
            
            <h1>React Calculator</h1>
            <div>{cPannel}</div>
            <div>{cButton}</div>
            <div>{children}</div>


        </TodoTemplateBlock>
    )
}

export default CalTemplate;
