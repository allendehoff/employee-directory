import React from "react";
import "./style.css"

function Header(props) {
    return(
        <div className="header">
            <h1>Employee Directory</h1>
            <p>Click the carats to sort by a field or use the Search field to narrow your results</p>
        </div>
    )
}

export default Header
