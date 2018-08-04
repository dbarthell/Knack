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
        axios.get('/api/tip')
            .then(res => {
                this.setState({ tips: res.data });
                console.log(this.state.tips);
            });
    }

    addTip(e) {
        e.preventDefault();
        if (this._inputElement.value !== "") {
            const newTip = {
                tip: this._inputElement.value,
                key: Date.now(),
                proven: false
            };

            this.setState((prevState) => {
                return {
                    tips: prevState.tips.concat(newTip)
                }
            })
            console.log("New tip ", newTip);
            axios.post('/api/tip', newTip)
                .then((data) => {
                    console.log(data);
                });

        }

        this._inputElement.value = "";

        console.log(this.state.tips);
        console.log(this._inputElement.value)
    }

    deleteTip(key) {
        console.log("KnackList delete is ", key);
        const filteredTips = this.state.tips.filter(function (tip) {
            return (tip.key !== key)
        });

        this.setState({
            tips: filteredTips
        })

        axios.delete('/api/tip/' + key)
            .then((data) => {
                console.log(data)
            });
    }

    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default KnackList;