import React, { Component } from "react";
import Search from "./Search/index"

function Header() {
    return (

<div className="container">
<div className="jumbotron">
  <h1>Your Project</h1>
  <p>
    Enim adipisicing enim reprehenderit ex ullamco consectetur Lorem laboris magna
    exercitation. Aliquip reprehenderit magna elit cillum adipisicing dolore aliquip velit.
    Ipsum ullamco nostrud tempor eu deserunt ipsum incididunt fugiat esse ipsum. Exercitation
    nostrud exercitation sit ex nostrud aliqua officia magna nostrud deserunt et esse eu
    deserunt. Non dolor consequat qui ea culpa tempor magna nulla consectetur est occaecat.
  </p>
  <Search />
  {/* handler={this.props.handler} /> */}
</div>
</div>
    );
}

export default Header;
