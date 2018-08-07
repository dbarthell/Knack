import React, { Component } from "react";
import FlipMove from "react-flip-move"

class KnackTips extends Component {
    constructor(props) {
        super(props);

        this.createTips = this.createTips.bind(this);
    }

    createTips(tip) {
        let saveButtonClasses = "btn btn-light save";
        if (tip.proven) {
            saveButtonClasses += " proven";
        }
        return <li key={tip.key} >
            {tip.tip}
            <button onClick={() => this.save(tip._id)} type="button" className={saveButtonClasses}>✔︎</button>
            <button onClick={() => this.delete(tip._id)} type="button" className="btn btn-light delete">✕</button>
        </li>

    }

    delete(key) {
        console.log("Knacktips delete key is ", key);
        this.props.delete(key);
    }

    save(key) {
        this.props.save(key);
        // event.target.style.color = "gold";
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