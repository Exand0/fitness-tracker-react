import React, { Component } from "react";
import Decade from "./Decade";
import Year from "./Year";
import Month from "./Month";
import Day from "./Day";
import OuterClick from "./OuterClick";

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            view: 0,
            decade: Math.floor(new Date().getFullYear()),
            day: {
                isActive: false,
                id: undefined
            }
        };
        this.navigateView = this.navigateView.bind(this);
        this.setDate = this.setDate.bind(this);
        this.adjustDate = this.adjustDate.bind(this);
        this.toggleDayView = this.toggleDayView.bind(this);
    }

    toggleDayView(val, id) {
        if (id && this.state.day.id === id) {
            if (val === true) {
                val = false;
                id = undefined;
            } else {
                val = true;
            }
        }
        this.setState({
            day: {
                isActive: val,
                id: id
            }
        });
    }
    navigateView(to) {
        let val = this.state.view;
        if (this.state.view + to < 0) {
            val = 0;
        } else if (this.state.view + to > 2) {
            val = 2;
        } else {
            val += to;
        }
        this.setState({
            view: val
        });
    }

    setDate(date) {
        this.setState({
            date: date,
            decade: Math.floor(new Date().getFullYear())
        });
    }
    adjustDate(type, ind) {
        let year = this.state.date.getFullYear();
        let month = this.state.date.getMonth();
        let day = this.state.date.getDate();
        let decade = this.state.decade;

        switch (type) {
            case "d": {
                day += ind;
                break;
            }
            case "m": {
                month += ind;
                break;
            }
            case "y": {
                year += ind;
                break;
            }
            case "dec": {
                decade += ind * 10;
                break;
            }
        }
        this.setState({
            date: new Date(year, month, day),
            decade: decade
        });
    }
    render() {
        let view = [];
        switch (this.state.view) {
            case 0:
                view.push(
                    <Decade
                        date={this.state.date}
                        navigateView={this.navigateView}
                        setDate={this.setDate}
                        adjustDate={this.adjustDate}
                        decade={this.state.decade}
                    ></Decade>
                );
                break;
            case 1:
                view.push(
                    <Year
                        date={this.state.date}
                        navigateView={this.navigateView}
                        setDate={this.setDate}
                        adjustDate={this.adjustDate}
                    ></Year>
                );
                break;
            case 2:
                view.push(
                    <Month
                        date={this.state.date}
                        navigateView={this.navigateView}
                        setDate={this.setDate}
                        adjustDate={this.adjustDate}
                        toggleDayView={this.toggleDayView}
                    ></Month>
                );
                break;
        }
        if (this.state.day.isActive) {
            view.push(
                <OuterClick
                    onOuterClick={this.toggleDayView}
                    excludeClass={"month__cell--day"}
                >
                    <Day date={this.state.date}></Day>
                </OuterClick>
            );
        }
        return <div>{view}</div>;
    }
}

export default Calendar;
