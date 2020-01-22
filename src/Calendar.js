import React, { Component } from "react";
import Years from "./Years";
import Year from "./Year";
import Month from "./Month";

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleMonthChange = this.handleMonthChange.bind(this);
        this.handleDayChange = this.handleDayChange.bind(this);
    }
    handleYearChange(year) {
        console.log(year);
        console.log(this);
        this.setState({
            date: new Date(year, 0, 1)
        });
    }
    handleMonthChange(month) {
        this.setState((state, month) => ({
            date: new Date(state.date.getFullYear(), month, 1)
        }));
    }
    handleDayChange(day) {
        this.setState((state, day) => ({
            date: new Date(state.date.getFullYear(), state.date.getMonth(), day)
        }));
    }
    render() {
        return (
            <div>
                <Years
                    date={this.state.date}
                    onYearChange={this.handleYearChange}
                ></Years>
                <Year
                    date={this.state.date}
                    onMonthChange={this.handleMonthChange}
                ></Year>
                <Month
                    date={this.state.date}
                    onDayChange={this.handleDayChange}
                ></Month>
            </div>
        );
    }
}

export default Calendar;
