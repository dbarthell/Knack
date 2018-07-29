import React, { Component } from "react";
import KnackTips from "./KnackTips";
import "./KnackList.css";
import axios from 'axios';

class KnackList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tips: [],
        }

        this.addTip = this.addTip.bind(this);
        this.deleteTip = this.deleteTip.bind(this);
    }

    componentDidMount() {
        axios.get('/')
            .then(res => {
                this.setState({ tips: res.data });
                console.log(this.state.tips);
            });
    }

    addTip(e) {
        e.preventDefault();
        if (this._inputElement.value !== "") {
            let newTip = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    tips: prevState.tips.concat(newTip)
                }
            })

        }

        this._inputElement.value = "";

        console.log(this.state.tips);
    }

    deleteTip(key) {
        const filteredTips = this.state.tips.filter(function (tip) {
            return (tip.key !== key)
        });

        this.setState({
            tips: filteredTips
        })
    }

    render() {
        return (
            <div className="knackListMain">
                <div className="header">
                    <form onSubmit={this.addTip}>
                        <input ref={(a) => this._inputElement = a}
                            placeholder="Enter tip...">
                        </input>
                        <button type="submit">Add</button>
                    </form>
                </div>
                <KnackTips entries={this.state.tips}
                    delete={this.deleteTip} />
            </div>
        );
    }
}

export default KnackList;