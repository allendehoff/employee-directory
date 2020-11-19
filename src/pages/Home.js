import React, { useState, useEffect } from "react";
import API from "../utils/API";
import UserTable from "../components/Table/Table"
import Container from "../components/Container/Container";
import Header from "../components/Header/Header"
import SearchBar from "../components/SearchBar/SearchBar"
import TableHeader from "../components/TableHeader/TableHeader"

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
                setUsers(res.data.results)
            })
    }, []);
    // (console.log(users))
    return (
        <div>
            <Container>
                <Header/>
                <SearchBar/>
                {/* <TableHeader/> */}
                <UserTable users={users} />
            </Container>
        </div>
    )
}

export default Search