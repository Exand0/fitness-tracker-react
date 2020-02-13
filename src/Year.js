import React from "react";
import Control from "./Control";

function Year(props) {
    let rows = [];
    let cells = [];
    let rowKey = 0;
    for (let i = 0; i < 12; i++) {
        let date = new Date(props.date.getFullYear(), i, 1);
        cells.push(
            <td
                key={i}
                className={
                    i === props.date.getMonth()
                        ? "year__cell year__cell--current"
                        : "year__cell"
                }
                onClick={() => {
                    props.navigateView(1);
                    props.setDate(
                        new Date(
                            props.date.getFullYear(),
                            props.date.getMonth(),
                            i
                        )
                    );
                }}
            >
                {date.toLocaleString("default", { month: "long" })}
            </td>
        );
        if ((i + 1) % 3 === 0) {
            rows.push(<tr key={rowKey++}>{cells}</tr>);
            cells = [];
        }
    }
    return (
        <div>
            <Control
                navigateView={props.navigateView}
                label={`Year: ${props.date.getFullYear()}`}
                setDate={props.setDate}
                adjustDate={props.adjustDate}
                type="y"
            ></Control>
            <table className="year">
                <thead>
                    <tr></tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    );
}

export default Year;
