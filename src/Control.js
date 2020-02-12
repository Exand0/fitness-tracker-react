import React from "react";

const Control = props => {
    return (
        <div className="control">
            <button
                className="control__button control__button--today"
                onClick={() => {
                    props.setDate(new Date());
                    props.navigateView(2);
                }}
            >
                Today
            </button>
            <button
                className="control__button control__button--previous"
                onClick={() => props.adjustDate(props.type, -1)}
            ></button>
            <button
                className="control__button control__button--back"
                onClick={() => props.navigateView(-1)}
            >
                {props.label}
            </button>
            <button
                className="control__button control__button--next"
                onClick={() => props.adjustDate(props.type, 1)}
            ></button>
        </div>
    );
};

export default Control;
