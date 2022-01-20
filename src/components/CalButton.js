import React from 'react';
import styled from 'styled-components';

const CalButton = ({getDataFromChild}) => {
    const btnNumber = ["1","2","3","4","5","6","7","8","9","+","0"]

    const onBtnClick = (e) => {
        getDataFromChild(e.target.value)  //부모에게 데이터보내기 
    }

    return (
        <BtnDivStyled>
            {
                btnNumber.map( btnNum => (<BtnStyled onClick={onBtnClick} value={btnNum} key={btnNum}>{btnNum}</BtnStyled>))
            }
            <MinusBtnStyled onClick={onBtnClick} value="-" key="-">-</MinusBtnStyled>
        </BtnDivStyled>
    );
};


const BtnDivStyled = styled.div`
    text-align: center; 
    padding-top: 17px;
    padding-bottom:30px;
    border-bottom: 1px solid #e9ecef;
`;

const BtnStyled = styled.button`
  font-size: 35px;
  margin: 6px;
  padding: 13px 47px;
  background : #E8E8E9;
  border: 2px  ;
  border-radius: 10px;
  font-weight: bold;
  text-align: center;
  
  &:hover {
    background-color: #F47378;
  }
`;

const MinusBtnStyled = styled.button`
  font-size: 35px;
  margin: 6px;
  padding: 13px 50px;
  background : #E8E8E9;
  border: 2px  ;
  border-radius: 10px;
  font-weight: bold;
  text-align: center;

  &:hover {
    background-color: #F47378;
  }
`;

export default CalButton;

