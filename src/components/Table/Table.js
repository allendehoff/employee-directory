import React from "react";
import "./style.css"
import Moment from 'moment';
import TableHeader from "../TableHeader/TableHeader"
import Table from 'react-bootstrap/Table';

// class UserTable extends React.Component {

// }

function UserTable(props) {
    let filter
    { props.search ? filter=props.search : filter=props.users}
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
                {filter.map((user) => (
                    <tr key={user.email}>
                        {/* <li className="list-group-item tableItem flex-row" key={user.login.uuid}> */}
                        {/* <img src={user.picture.thumbnail} alt="User thumbnail"></img> */}
                        <td><img src={user.picture.medium} alt="User thumbnail"></img></td>
                        <td className="align-middle">{user.name.first} {user.name.last}</td>
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