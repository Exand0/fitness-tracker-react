import React from "react";

const Control = props => {
    return (
        <div className="control">
            <button
                className="control__previous"
                onClick={() => props.setDate(props.type, -1)}
            >
                &lt;
            </button>
            <p
                className="control__label"
                onClick={() => props.handleClick("up")}
            >
                {props.label}
            </p>
            <button
                className="control__next"
                onClick={() => props.setDate(props.type, 1)}
            >
                &gt;
            </button>
        </div>
    );
};

export default Control;
