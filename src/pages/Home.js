import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Table from "../components/Table"

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
                setUsers(res.data.results )
            })
        }, []);
        // (console.log(users))
    return(
        <div>
            <Table users={users}/>
        </div>
    )
}

export default Search