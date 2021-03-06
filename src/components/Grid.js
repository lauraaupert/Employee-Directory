import React, { Component } from "react";
import EmployeeList from "./EmployeeList";
import Header from "./Header"
import API from "../utils/API";

class Grid extends Component {
    state = {
        search: "",
        results: [],
        order: "ascend"
    };

    componentDidMount() {
        this.searchEmployee();
    };

    searchEmployee = () => {
        API.search()
            .then(res => {
                this.setState({ results: res.data.results })
                console.log(this.state.results)
            })
            .catch(err => console.log(err));
    };

    handleOrderChange = () => this.state.order === "ascend" ? this.setState({ order: "descend" }) : this.setState({ order: "ascend" });

    compareFnc = (a, b) => {

        //Ascending
        if (this.state.order === "ascend") {
            if (a.name.first < b.name.first) {
                return -1;
            }
            if (a.name.first > b.name.first) {
                return 1;
            }
            return 0;
        }
        //Descending
        else {
            if (a.name.first < b.name.first) {
                return 1;
            }
            if (a.name.first > b.name.first) {
                return -1;
            }
            return 0;
        }
    };


    handleInputChange = value => {
        this.setState({ search: value })
    };

    render() {
        return (
            <div style={{backgroundColor: "teal"}}>
                <Header
                    handler={this.handleInputChange} />
                <EmployeeList
                    query={this.state.search}
                    results={this.state.results}
                    compareFnc={this.compareFnc}
                    orderChange={this.handleOrderChange} />
            </div>
        )
    };
};

export default Grid;