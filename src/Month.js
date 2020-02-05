import React from "react";
import Control from "./Control";

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
        let tdClassName = ["month__cell--day"];
        if ((i + firstWeekDay) % 7 === 6 || (i + firstWeekDay) % 7 === 0) {
            tdClassName.push("month__cell--weekend");
        }
        if (i == today) {
            tdClassName.push("month__cell--today");
        }

        cells.push(
            <td
                key={`day${i}`}
                id={i}
                className={tdClassName.join(" ")}
                onClick={e =>
                    props.handleClick(
                        "down",
                        props.date.getFullYear(),
                        props.date.getMonth(),
                        i
                    )
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
        <div>
            <Control
                handleClick={props.handleClick}
                // passing switcher from Calendar further to controls
                label="Month"
                setDate={props.setDate}
                date={props.date}
                type="m"
            ></Control>
            <table className="month">
                <thead>
                    <tr></tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    );
}

export default Month;
