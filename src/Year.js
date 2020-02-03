import React from "react";

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
                        ? "months__cell months__cell--current"
                        : "months__cell"
                }
                onClick={e =>
                    props.handleClick("down", props.date.getFullYear(), i)
                }
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
            <p onClick={e => props.handleClick("up")}>Months</p>
            <table className="months">
                <thead>
                    <tr></tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    );
}

export default Year;
