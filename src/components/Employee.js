import React from "react";

function Employees(props) {

    return (
        <div className="row" style={{marginTop: "5px"}} >
            <div className="col-md"><img alt={`${props.fullName}`} src={props.photo} /></div>
            <div className="col-md">{props.fullName}</div>
            <div className="col-md">{props.address}</div>
            <div className="col-md">{props.phone}</div>
            <div className="col-md">{props.email}</div>
            <div className="col-md">{props.nationality}</div>
            <div className="col-md">{props.age}</div>

        </div>
    )
};

export default Employees;