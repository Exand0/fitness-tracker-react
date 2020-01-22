import React from "react";

function Month(props) {
    let rows = [];
    let row = [];
    let cells = [];

    const date = props.date;

    const firstDayDate = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDayDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const today = date.getDate();

    const firstWeekDay = (firstDayDate.getDay() + 7 - 1) % 7;

    for (let i = 1; i <= firstWeekDay; i++) {
        cells.push(<td key={`empty${i}`} className="month__cell--empty"></td>);
    }

    for (let i = firstDayDate.getDate(); i <= lastDayDate.getDate(); i++) {
        cells.push(
            <td
                key={`day${i}`}
                id={i}
                className={
                    i === today
                        ? "month__cell--day month__cell--today"
                        : "month__cell--day"
                }
            >
                {i}
            </td>
        );
    }
    cells.forEach((cell, i) => {
        row.push(cell);
        if ((i + 1) % 7 === 0 || i === cells.length - 1) {
            rows.push(<tr key={`row${i}`}>{row}</tr>);
            row = [];
        }
    });

    return (
        <table className="month">
            <thead>
                <tr>
                    <td>Month</td>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

export default Month;
