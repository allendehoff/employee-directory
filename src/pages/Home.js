import React, { useState, useEffect } from "react";
import API from "../utils/API";
import UserTable from "../components/Table/Table"
import Container from "../components/Container/Container";
import Header from "../components/Header/Header"
import SearchBar from "../components/SearchBar/SearchBar"
import TableHeader from "../components/TableHeader/TableHeader"

function Search() {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState()

    useEffect(() => {
        // if (!search){
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
        // }
        
    }, []);

    function filterResults(query) {
        const searchResults = users.filter(o =>
            Object.keys(o).some(k => o[k].toString().toLowerCase().includes(query.toLowerCase())))
        setSearch(searchResults)
    }

    const handleInputChange = event => {
        // console.log(event.target.value)
        filterResults(event.target.value)
    };


    // (console.log(users))
    return (
        <div>
            <Container>
                <Header/>
                <SearchBar handleInputChange={handleInputChange}/>
                {/* <TableHeader/> */}
                <UserTable users={users} search={search} />
            </Container>
        </div>
    )
}

export default Search