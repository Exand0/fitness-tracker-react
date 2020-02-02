import React, { Component } from "react";
import Years from "./Years";
import Year from "./Year";
import Month from "./Month";

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date(), view: 0 };
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleMonthChange = this.handleMonthChange.bind(this);
        this.handleDayChange = this.handleDayChange.bind(this);
        this.handleYearClick = this.handleYearClick.bind(this);
        this.handleMonthClick = this.handleMonthClick.bind(this);
        this.navigateView = this.navigateView.bind(this);
        //this.handleDayClick = this.handleDayClick.bind(this);
    }

    navigateView(to) {
        let ind = 0;
        if (to === "down") {
            if (this.state.view % 2 !== 0 || this.state.view == 0) {
                ind = 1;
            }
        } else if (to === "up") {
            if (this.state.view % 2 !== 0 || this.state.view == 2) {
                ind = -1;
            }
        }
        this.setState(state => ({ view: state.view + ind }));
    }
    handleClick(
        direction,
        year = this.state.date.getFullYear(),
        month = this.state.date.getMonth(),
        day = 1
    ) {
        this.setState(state => ({
            date: new Date(year, month, day)
        }));
    }
    handleYearClick(year, direction) {
        this.handleYearChange(year);
        this.navigateView(direction);
    }
    handleMonthClick(month) {
        this.handleMonthChange(month);
        this.navigateView("down");
    }
    handleYearChange(year) {
        this.setState({
            date: new Date(year, 0, 1)
        });
    }
    handleMonthChange(month) {
        this.setState(state => ({
            date: new Date(state.date.getFullYear(), month, 1)
        }));
    }
    handleDayChange(day) {
        this.setState(state => ({
            date: new Date(state.date.getFullYear(), state.date.getMonth(), day)
        }));
    }
    render() {
        let view;
        switch (this.state.view) {
            case 0:
                view = (
                    <Years
                        date={this.state.date}
                        onYearClick={this.handleYearClick}
                    ></Years>
                );
                break;
            case 1:
                view = (
                    <Year
                        date={this.state.date}
                        onMonthClick={this.handleMonthClick}
                    ></Year>
                );
                break;
            case 2:
                view = (
                    <Month
                        date={this.state.date}
                        onDayChange={this.handleDayChange}
                    ></Month>
                );
                break;
        }
        return <div>{view}</div>;
    }
}

export default Calendar;
