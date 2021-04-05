import React from "react";
import ListHead from "./ListHead"
import Employee from "./Employee"

function EmployeeList(props) {
    let query = props.query;
    return (
      <div className="table">
        <div className="card" style={{width: "100%"}}>
          <div className="card-header">
            <h3 className="card-title">Employees</h3>
          </div>
          </div>
          <table>
            
              <ListHead
                    orderChange={props.orderChange}
                />
                <tbody>
                {props.results.sort(props.compareFnc)
                        .filter(data => {
                            const fullName = `${data.name.first} ${data.name.last}`
                            if (!query) {
                                return data
                            } else if (fullName.toLowerCase().includes(query.toLowerCase())) {
                                return data
                            }
                        })
                        .map(employee => (
                <Employee 
                    photo={employee.picture.thumbnail}
                    fullName={`${employee.name.first} ${employee.name.last}`}
                    email={`${employee.email}`}
                    phone={`${employee.phone}`}
                    address={`${employee.location.street.number} ${employee.location.street.name}`}
                    nationality={`${employee.nat}`}
                    age={`${employee.dob.age}`}
                    key={employee.dob}
                    />
                ))}
            </tbody>        
          </table>
  {/* //   // {/* <div class="col-sm">
  //     One of three columns
  //   </div>
  //   <div class="col-sm">
  //     One of three columns
  //   </div>
  //   <div class="col-sm">
  //     One of three columns
  //   </div> 
  // </div> */}
</div>
          
    );
  }
  
  export default EmployeeList;