import React, { Component } from "react";
import FlipMove from "react-flip-move"

class KnackTips extends Component {
    constructor(props) {
        super(props);

        this.createTips = this.createTips.bind(this);
    }

    changeColor(event) {
        event.target.style.color = "gold";
    }

    createTips(tip) {
        return <li key={tip.key} >
            {tip.tip}
            <button onClick={this.changeColor} type="button" className="btn btn-light save">✔︎</button>
            <button onClick={() => this.delete(tip._id)} type="button" className="btn btn-light delete">✕</button>
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