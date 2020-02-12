import React from "react";
import { Component } from "react";

class Day extends Component {
    constructor(props) {
        super(props);
        this.state = { entries: [], inputVal: "" };
        this.fetchEntries = this.fetchEntries.bind(this);
        this.addEntry = this.addEntry.bind(this);
        this.deleteEntry = this.deleteEntry.bind(this);
    }
    fetchEntries() {
        let output = [];
        for (let i = 0; i < this.state.entries.length; i++) {
            output.push(
                <li className="day__li" key={i}>
                    {this.state.entries[i]}
                    <button
                        className="day__button"
                        onClick={() => this.deleteEntry(i)}
                        data-id={i}
                    >
                        Delete
                    </button>
                </li>
            );
        }
        return output;
    }
    addEntry() {
        if (this.state.inputVal.length !== 0) {
            this.state.entries.push(this.state.inputVal);
            this.setState({ inputVal: "" });
        }
    }
    deleteEntry(id) {
        this.setState(state => state.entries.splice(id, 1));
    }
    render() {
        return (
            <ul>
                <li className="day__li">
                    <input
                        type="text"
                        value={this.state.inputVal}
                        onChange={e =>
                            this.setState({ inputVal: e.target.value })
                        }
                    />
                    <button
                        onClick={e => this.addEntry(e)}
                        className="day__button"
                    >
                        Add
                    </button>
                </li>
                {this.fetchEntries()}
            </ul>
        );
    }
}

export default Day;
