import React from "react";
import "./style.css"

function SearchBar(props) {
    return (
        <div className="searchBar">
            <input 
            type="text" 
            placeholder="Search"
            // value={props.search}
            onChange={props.handleInputChange}/>
        </div>
    )
}

export default SearchBar