import React, { Component } from "react";
import KnackItems from "./KnackItems";
import "./KnackItems.css";

class KnackList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        e.preventDefault();
        if (this._inputElement.value !== "") {
            let newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                }
            })
        }

        this._inputElement.value = "";

        console.log(this.state.items);
    }

    deleteItem(key) {
        const filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key)
        });

        this.setState({
            items: filteredItems
        })
    }

    render() {
        return (
            <div className="knackListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a}
                                placeholder="Enter task...">
                        </input>
                        <button type="submit">Add</button>
                    </form>
                </div>
                <KnackItems entries={this.state.items}
                            delete={this.deleteItem}/>
            </div>
        );
    }
}

export default KnackList;