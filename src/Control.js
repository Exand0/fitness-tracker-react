import React from "react";

const Control = props => {
    return (
        <div className="control">
            <div
                onClick={() => props.setDate(props.type, -1)}
                className="control__button--wrapper"
            >
                <button className="control__button--previous"></button>
            </div>
            <p
                className="control__label"
                onClick={() => props.handleClick("up")}
            >
                {props.label}
            </p>
            <div
                onClick={() => props.setDate(props.type, 1)}
                className="control__button--wrapper"
            >
                <button
                    className="control__button--next"
                    onClick={() => props.setDate(props.type, 1)}
                ></button>
            </div>
        </div>
    );
};

export default Control;
