import React from "react";

const Users = (props) => {

    // const [users,setUsers] = props

    // here on top when i do this i got a error props is not iterable

    const {users,setUsers} = props

    // const [searchUser,setSearchuser]=useState("");

    // const searchUserHandler = (e) => {
    //     // setSearchuser(e.target.value)
    //     // setUsers(users)
    // }

    // searchUserHandler();

    return(
        <div>
            <h1>This is Users Component</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user,i)=>(
                            <tr key={user.userId}>
                                <td>{user.userId}</td>
                                <td>{user.fname}</td>
                                <td>{user.lname}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>
    )
}

export default Users