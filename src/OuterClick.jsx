import React from "react";
import { Component } from "react";

class OuterClick extends Component {
    constructor(props) {
        super(props);
        this.node = React.createRef();
        this.detectClick = this.detectClick.bind(this);
    }

    detectClick(e) {
        if (
            this.node.current &&
            !this.node.current.contains(e.target) &&
            !e.target.classList.contains(this.props.excludeClass)
        ) {
            console.log(this.node.current);
            this.props.onOuterClick(false, undefined);
        }
    }

    componentDidMount() {
        document.addEventListener("click", e => this.detectClick(e));
    }
    componentWillUnmount() {
        document.removeEventListener("click", e => this.detectClick(e));
    }

    render() {
        return (
            <div className="outer-click" ref={this.node}>
                {this.props.children}
            </div>
        );
    }
}

export default OuterClick;
