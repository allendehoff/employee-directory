import React from "react";
import "./style.css"
import Moment from 'moment';
import TableHeader from "../TableHeader/TableHeader"
import Table from 'react-bootstrap/Table';


function UserTable(props) {
    console.log(props)
    return (
        // <div className="table">
        <Table striped className="table">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                    {/* <TableHeader /> */}
                </tr>
            </thead>
            <tbody>
                {props.users.map((user) => (
                    <tr key={user.login.uuid}>
                            {/* <li className="list-group-item tableItem flex-row" key={user.login.uuid}> */}
                            {/* <img src={user.picture.thumbnail} alt="User thumbnail"></img> */}
                            <td><img src={user.picture.medium} alt="User thumbnail"></img></td>
                            <td className="align-middle">{user.name.first}</td>
                            <td className="align-middle">{user.phone}</td>
                            <td className="align-middle">{user.email}</td>
                            <td className="align-middle">{Moment(user.dob.date).format("MM-DD-YYYY")}</td>
                        {/* </li> */}
                    </tr>
                ))}
            </tbody>
        </Table>
        // </div>
    )
}

export default UserTable