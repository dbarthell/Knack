import React, { Component } from "react";
import FlipMove from "react-flip-move"

class KnackTips extends Component {
    constructor(props) {
        super(props);

        this.createTips = this.createTips.bind(this);
    }

    createTips(tip) {
        return <li key={tip.key} onClick={() => this.delete(tip._id)}>
            {tip.tip}
            <button type="button" className="btn btn-light">✔︎</button>
        </li>

    }

    delete(key) {
        console.log("Knacktips delete key is ", key);
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