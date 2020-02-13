import React from "react";
import Control from "./Control";

function Decade(props) {
    let rows = [];
    let cells = [];
    let week = 0;
    let fullYear = props.date.getFullYear();
    for (let year = 0; year < 12; year++) {
        let currYear = year + props.decade - 1;
        cells.push(
            <td
                id={year}
                key={year}
                className={
                    currYear === fullYear
                        ? "decade__cell decade__cell--current"
                        : "decade__cell"
                }
                onClick={() => {
                    props.navigateView(1);
                    props.setDate(
                        new Date(
                            currYear,
                            props.date.getMonth(),
                            props.date.getDate()
                        )
                    );
                }}
            >
                {currYear}
            </td>
        );
        if ((year + 1) % 3 === 0) {
            rows.push(<tr key={week++}>{cells}</tr>);
            cells = [];
        }
    }
    return (
        <div>
            <Control
                navigateView={props.navigateView}
                // passing switcher from Calendar further to controls
                label="Decade"
                setDate={props.setDate}
                adjustDate={props.adjustDate}
                date={props.date}
                type="dec"
            ></Control>
            <table className="decade">
                <thead>
                    <tr></tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    );
}

export default Decade;
