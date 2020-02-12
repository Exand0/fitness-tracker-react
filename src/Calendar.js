import React, { Component } from "react";
import Decade from "./Decade";
import Year from "./Year";
import Month from "./Month";

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            view: 0,
            decade: Math.floor(new Date().getFullYear()),
            dayIsAcitve: false
        };
        this.navigateView = this.navigateView.bind(this);
        this.setDate = this.setDate.bind(this);
        this.adjustDate = this.adjustDate.bind(this);
        this.toggleDayView = this.toggleDayView.bind(this);
    }

    toggleDayView(val) {
        this.setState({ dayIsAcitve: val });
    }

    /*     navigateView(to) {
        let ind = 0;
        if (to >= 1) {
            if (this.state.view >= 0 && this.state.view < 2) {
                ind = 1;
            }
            if (this.state.view === 2) {
                this.toggleDayView(true);
            }
        } else if (to < 0) {
            if (this.state.view > 0 && this.state.view <= 2) {
                ind = -1;
            }
            if (this.state.view === 2) {
                this.toggleDayView(false);
            }
        }
        this.setState(state => ({ view: state.view + ind }));
    } */
    /* 
    navigateView(to) {
        let ind = 0;
        if (to === "down") {
            if (this.state.view >= 0 && this.state.view < 2) {
                ind = 1;
            }
            if (this.state.view === 2) {
                this.toggleDayView(true);
            }
        } else if (to === "up") {
            if (this.state.view > 0 && this.state.view <= 2) {
                ind = -1;
            }
            if (this.state.view === 2) {
                this.toggleDayView(false);
            }
        }
        this.setState(state => ({ view: state.view + ind }));
    } */
    navigateView(to) {
        if (this.state.view + to < 0) {
            to = 0;
        } else if (this.state.view + to > 2) {
            to = 2;
        }
        this.setState(state => ({
            view: state.view + to
        }));
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
        return <div>{view}</div>;
    }
}

export default Calendar;
