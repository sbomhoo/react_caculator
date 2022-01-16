import React from "react";

const CalTemplate = ({cPannel,cButton,children}) => {
    return(
        <div>
            <h1>React Calculator</h1>
            <div>{cPannel}</div>
            <div>{cButton}</div>
            <div>{children}</div>


        </div>
    )
}

export default CalTemplate;
