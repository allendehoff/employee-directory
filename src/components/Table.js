import React from "react";

function Table(props) {
    console.log(props)
    return (
        <ul className="list-group">
            {props.users.map((user) => (
                <li key={user}>
                    <p>{user.name.first}</p>
                </li>
            ))}
        </ul>
    )
}

export default Table