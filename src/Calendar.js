import React, { Component } from "react";
import Years from "./Years";
import Year from "./Year";
import Month from "./Month";

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date(), view: 0 };
        this.navigateView = this.navigateView.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    navigateView(to) {
        let ind = 0;
        console.log(this.state.view);
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
        this.setState({
            date: new Date(year, month, day)
        });
        this.navigateView(direction);
    }
    render() {
        let view;
        switch (this.state.view) {
            case 0:
                view = (
                    <Years
                        date={this.state.date}
                        handleClick={this.handleClick}
                    ></Years>
                );
                break;
            case 1:
                view = (
                    <Year
                        date={this.state.date}
                        handleClick={this.handleClick}
                    ></Year>
                );
                break;
            case 2:
                view = (
                    <Month
                        date={this.state.date}
                        handleClick={this.handleClick}
                    ></Month>
                );
                break;
        }
        return <div>{view}</div>;
    }
}

export default Calendar;
