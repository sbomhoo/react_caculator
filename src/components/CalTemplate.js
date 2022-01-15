import React from "react";

const CalTemplate = ({cPannel,cButton,cResultView}) => {
    return(
        <div>
            <h1>React Calculator</h1>
            <div>{cPannel}</div>
            <div>{cButton}</div>
            <div>{cResultView}</div>


        </div>
    )
}

export default CalTemplate;
