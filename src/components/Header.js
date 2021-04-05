import React from "react";
import Search from "./Search/index"

function Header() {
    return (

<div className="container" style={{backgroundColor: "teal"}}>
<div className="jumbotron" style={{backgroundColor: "teal"}}>
  <h1>Employee Directory</h1>
  <p>
    You can see Employee information here. Click on a category to sort employees.
  </p>
  <Search handler={this.props.handler} />
</div>
</div>
    );
}

export default Header;
