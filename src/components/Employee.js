import React from "react";

function Employees(props) {

    return (
        <tr scope="col">
        {/* <div className="row" style={{marginTop: "5px"}} > */}
            <th scope="row"><img alt={`${props.fullName}`} src={props.photo} /></th>
            {/* <div className="col-md"><img alt={`${props.fullName}`} src={props.photo} /></div> */}
            <td>{props.fullName}</td>
            <td>{props.address}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.nationality}</td>
            <td>{props.age}</td>

        </tr>
    )
};

export default Employees;