import React from "react";
import Control from "./Control";

function Decade(props) {
    let rows = [];
    let cells = [];
    let week = 0;
    let fullYear = props.date.getFullYear();
    let decade = fullYear;
    while (decade % 10 !== 0) {
        decade++;
    }
    for (let year = 0; year < 12; year++) {
        let currYear = decade - 1 + year;
        cells.push(
            <td
                id={year}
                key={year}
                className={
                    currYear === fullYear
                        ? "decade__cell decade__cell--current"
                        : "decade__cell"
                }
                onClick={e => props.handleClick("down", currYear)}
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
                handleClick={props.handleClick}
                // passing switcher from Calendar further to controls
                label="Decade"
                setDate={props.setDate}
                date={props.date}
                type="dec"
            ></Control>
            <p>Decade</p>
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
