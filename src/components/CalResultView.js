import React, { useState } from 'react';
import styled, { css }  from 'styled-components';

const CalResultView = ({inputData, inintCalResult}) => {            //{inputData}  => 부모로 부터 받아온 props
    const [ inputs, setInputs ] = useState({        //state 지정 //const [ 상태 값 저장 변수 , 상태 값 갱신 함수 ] = useState(상태 초기 값)
        calResult : '',
        calculating : false  //계산 누르면  F->T    클리어 누르면 T -> F
    });

    const { calResult, calculating } = inputs;   //비구조화 할당
    

    const calculatingResult = (e) => {
      if(!calculating){   //계산
        setInputs({             //setState를 구현
          ...inputs,          //기존의 input 객체 복사 (함수형 컴포넌트는 자동으로 객체 안 만들어주기 때문에)
          calResult : eval(e.target.value) ,      //값 수정
          calculating : true
        });
      }else{         //클리어
        setInputs({       //계산 완료시 c버튼을 누르면 초기화
          calResult : '',
          calculating : false
        });
      }

      inintCalResult(calculating);  //부모에게 초기화 전달
      console.log(calculating)
    }

    return (
        <ResultDiv>
            <CircleButton onClick={calculatingResult}  value={inputData} calculating={calculating}> {calculating?"C":"="}</CircleButton>  {/** 함수 호출 시 this를 쓰지 않음 */}
            {calResult} 
        </ResultDiv>
    );
};


const ResultDiv = styled.div`
        padding-right : 70px;
        padding-top: 20px;
        text-align : right;
        color : #F47378;
        font-size: 50px;
        font-weight: bold;
`


const CircleButton = styled.button`

  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 70px;
  height: 70px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, -120%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;

  ${props => props.calculating &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
    `}
`;


export default CalResultView;