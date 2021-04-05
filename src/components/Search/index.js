import React, { Component } from "react";
// import React, { useContext } from "react";
// import SearchContext from "../../utils/SearchContext";
// import "./style.css";

class Search extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {value: ''};
    
    //     this.handleChange = this.handleChange.bind(this);
    //     // this.handleSubmit = this.handleSubmit.bind(this);
    //   }
    
    //   handleChange(e) {
    //     this.setState({value: e.target.value});
    //   }

    noEnter = () => {
        return !(window.event && window.event.keyCode === 13);
    };

    // const Search = () => {
    //     const context = useContext(SearchContext);

    render() {
        return (
            <form className="search" >
                <div className="form-group text-center">
                    <input
                    // className="form-control mr-sm-2"
                    // type="search"
                    // placeholder="Search"
                    // aria-label="Search"
                    // onChange={e => context.handleOrderChange(e)}
                        // value={this.state.value}
                        onChange={e => {
                            this.props.handler(e.target.value)
                            console.log(e.target.value);
                        }}
                        onKeyPress={this.noEnter}
                        type="text"
                        className="form-control"
                        placeholder="Employee Search"
                        id="employee"
                    />
                </div>
            </form >
        )
    }
};

export default Search;