import React from "react";
import "./style.css";

function TableHeader() {
    return(
        <div className="tableHeader ">
            <p className="headerItem">Image</p>
            <p className="headerItem">Name</p>
            <p className="headerItem">Phone</p>
            <p className="headerItem">Email</p>
            <p className="headerItem">DOB</p>
        </div>
    )
}

export default TableHeader