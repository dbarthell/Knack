import React, { Component } from "react";
import FlipMove from "react-flip-move"

class KnackTips extends Component {
    constructor(props) {
        super(props);

        this.createTips = this.createTips.bind(this);
    }

    createTips(tip) {
        return <li onClick={() =>this.delete(tip.key)}
                    key={tip.key}>{tip.text}</li>
    }

    delete(key) {
        this.props.delete(key);
    }

    render() {
        const knackEntries = this.props.entries;
        const knackTips = knackEntries.map(this.createTips);

        return (
            <ul className="theList">
            <FlipMove duration={250} easing="ease-out">
                {knackTips}
            </FlipMove>
            </ul>
        )
    }
}

export default KnackTips;