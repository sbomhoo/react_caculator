import React from 'react';

const CalButton = ({getDataFromChild}) => {
    const btnNumber = ["1","2","3","4","5","6","7","8","9","+","0","-"]

    const onBtnClick = (e) => {
        getDataFromChild(e.target.value)  //부모에게 데이터보내기 
    }

    return (
        <div>
            {
                btnNumber.map( btnNum => (<button onClick={onBtnClick} value={btnNum}>{btnNum}</button>))
            }
        </div>
    );
};

export default CalButton;

