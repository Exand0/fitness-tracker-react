import React from "react";

function Years(props) {
    let rows = [];
    let cells = [];
    let week = 0;
    let fullYear = props.date.getFullYear();

    for (let year = 0; year < 12; year++) {
        let currYear = fullYear - 1 + year;
        cells.push(
            <td
                id={year}
                key={year}
                className={
                    currYear === fullYear
                        ? "years__cell years__cell--current"
                        : "years__cell"
                }
                onClick={e => props.onYearClick(currYear, "down")}
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
        <table className="years">
            <thead>
                <tr>
                    <td>Years</td>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

export default Years;
