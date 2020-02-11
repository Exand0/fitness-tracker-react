import React from "react";

const Control = props => {
    return (
        <div className="control">
            <button className="control__button control__button--today">
                Today
            </button>
            <div className="control__button--wrapper">
                <button
                    className="control__button control__button--previous"
                    onClick={() => props.setDate(props.type, -1)}
                ></button>
            </div>
            <button
                className="control__button control__label"
                onClick={() => props.handleClick("up")}
            >
                {props.label}
            </button>
            <div className="control__button--wrapper">
                <button
                    className="control__button control__button--next"
                    onClick={() => props.setDate(props.type, 1)}
                ></button>
            </div>
        </div>
    );
};

export default Control;
