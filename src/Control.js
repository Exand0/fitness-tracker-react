import React from "react";

const Control = props => {
    return (
        <div className="control">
            <button
                className="control__previous"
                onClick={() => props.switchMonth(-1)}
            >
                &lt;
            </button>
            <p
                className="control__label"
                onClick={() => props.handleClick("up")}
            >
                Month
            </p>
            <button
                className="control__next"
                onClick={() => props.switchMonth(1)}
            >
                &gt;
            </button>
        </div>
    );
};
<div className="control"></div>;

export default Control;
