import React from "react";
import ListHead from "./ListHead"

function EmployeeList(props) {
    return (
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Employees</h3>
            </div>

            <div class="container">
  <ListHead
                    // orderChange={props.orderChange}
                />

    {/* <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div> */}
  {/* </div> */}
</div>
          <div className="card-body">
            <p className="card-text">
              Aliquip dolore commodo nostrud minim. Cillum do enim non ullamco. Commodo magna eu ex
              mollit sunt amet fugiat. In irure eu enim id ea sit nostrud incididunt ad
              adipisicing.Aliquip dolore commodo nostrud minim. Cillum do enim non ullamco. Commodo
              magna eu ex mollit sunt amet fugiat. In irure eu enim id ea sit nostrud incididunt ad
              adipisicing.
            </p>
          </div>
        </div>
    );
  }
  
  export default EmployeeList;