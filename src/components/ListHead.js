import React, { Component } from "react";

class ListHead extends Component {
    render() {
        const headings = [
            {
                key: 1,
                name: "Photo"
            },
            {
                key: 2,
                name: "Name"
            },
            {
                key: 3,
                name: "E-mail"
            },
            {
                key: 4,
                name: "Phone Number"
            },
            {
                key: 5,
                name: "Address"
            },
            {
                key: 6,
                name: "Nationality"
            },
            {
                key: 7,
                name: "Age"
            }];

        return (
            <div className="row">
                    {headings.map(header => (
                        <div className="col-md" style={{fontWeight: "bold"}} key={header.key} scope="col" onClick={this.props.orderChange}>{header.name}</div>
                    ))}
                </div>
        )
    };
};

export default ListHead;