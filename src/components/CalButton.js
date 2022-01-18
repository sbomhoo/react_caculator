import React from 'react';
import styled from 'styled-components';

const BtnStyled = styled.div`
  width: 512px;
  height: 508px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);



`;
const CalButton = ({getDataFromChild}) => {
    const btnNumber = ["1","2","3","4","5","6","7","8","9","+","0","-"]

    const onBtnClick = (e) => {
        getDataFromChild(e.target.value)  //부모에게 데이터보내기 
    }

    return (
        <BtnStyled>
            {
                btnNumber.map( btnNum => (<button onClick={onBtnClick} value={btnNum} key={btnNum}>{btnNum}</button>))
            }
        </BtnStyled>
    );
};

export default CalButton;

