import React, { Component } from "react";
import FlipMove from "react-flip-move"

class KnackTips extends Component {

    delete(key) {
        console.log(key);
        this.props.delete(key);
    }

    render() {
        const knackEntries = this.props.entries;

        return (
            <ul className="theList">
                <FlipMove duration={250} easing="ease-out">
                    {knackEntries.map(tip => 
                    <li key={tip.key} onClick={() => this.delete(tip._id)}
                        >{tip.tip}
                    </li>)}
                </FlipMove>
            </ul>
        )
    }
}

export default KnackTips;