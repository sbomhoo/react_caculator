import React from 'react';
import styled from 'styled-components';

const PannelStyled = styled.div`
  width: 500px;
  height: 108px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: #e9ecef;; 

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  display: flex;
  flex-direction: column;

  .InputValue {
    padding-top : 25px;
    padding-left : 30px;
    color : #353232;  
    font-size: 38px;
    font-weight: bold;
  }

`;

const CalPannel = ({calInput}) => {
    return (
        <PannelStyled>
            <div className='InputValue'>{calInput}</div>
        </PannelStyled>
    );
};

export default CalPannel;
