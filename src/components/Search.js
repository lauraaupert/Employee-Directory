import React, { Component } from "react";
// import React, { useContext } from "react";
// import SearchContext from "../../utils/SearchContext";
// import "./style.css";

// const Search = () => {
// const inputRef = useRef();
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

    // noEnter = () => {
    //     return !(window.event && window.event.keyCode === 13);
    // };

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
                        // onChange={
                        //     function handler(e) {e.target.value
                        // //     (e) => {this.props.handler(e.target.value)
                        // //     // this.handleChange(e);
                        // //     // this.props.handler(e.target.value)
                        //      console.log(e.target.value);
                        //   }}
                        onKeyPress={this.noEnter}
                        type="search"
                        // value={searchTerm}
                        // ref={inputRef}
                        className="form-control text-center"
                        placeholder="Search"
                        id="search"
                    />
                </div>
            </form >
        )
    }
};

export default Search;