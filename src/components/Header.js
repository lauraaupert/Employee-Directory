import React from "react";
import Search from "./Search"

function Header() {

    return (

<div className="container" style={{backgroundColor: "teal"}}>
<div className="jumbotron text-center" style={{backgroundColor: "teal"}}>
  <h1 style={{color: "white"}}>Employee Directory</h1>
  <p style={{color: "white"}}>
    You can see Employee information here. 
    <br />
    Click on a category to sort employees.
  </p>
  <Search 
  // handler={this.props.handler} 
  />
</div>
</div>
    );
}

export default Header;
