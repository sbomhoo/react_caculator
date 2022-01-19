import React from 'react';
import styled from 'styled-components';

const BtnDivStyled = styled.div`
    text-align: center;
    margin-top: 17px;
`;

const BtnStyled = styled.button`
  font-size: 30px;
  margin: 7px;
  padding: 17.5px 48px;
  background : #E8E8E9;
  border: 2px  ;
  border-radius: 10px;
  font-weight: bold;
  text-align: center;

  &:hover {
    background-color: #F47378;
  }
`;
const CalButton = ({getDataFromChild}) => {
    const btnNumber = ["1","2","3","4","5","6","7","8","9","+","0","-"]

    const onBtnClick = (e) => {
        getDataFromChild(e.target.value)  //부모에게 데이터보내기 
    }

    return (
        <BtnDivStyled>
            {
                btnNumber.map( btnNum => (<BtnStyled onClick={onBtnClick} value={btnNum} key={btnNum}>{btnNum}</BtnStyled>))
            }
        </BtnDivStyled>
    );
};

export default CalButton;

