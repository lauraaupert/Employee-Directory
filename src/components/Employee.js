import React from "react";

function Employees(props) {

    return (
        <div className="row">
            <div className="col-md"><img alt={`${props.fullName}`} src={props.photo} /></div>
            <div className="col-md">{props.fullName}</div>
            <div className="col-md">{props.address}</div>
            <div className="col-md">{props.phone}</div>
            <div className="col-md">{props.email}</div>
        </div>
    )
};

export default Employees;