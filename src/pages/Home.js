import React, { useState, useEffect } from "react";
import API from "../utils/API";

function Search() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        API.loadUsers()
            .then(res => {
                if (res.data.length === 0) {
                    throw new Error("No results found.");
                }
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                // console.log(res.data.results)
                setUsers({ users: res.data.results })
            })
        }, []);
        (console.log(users))
    return(
        <div>

        </div>
    )
}

export default Search