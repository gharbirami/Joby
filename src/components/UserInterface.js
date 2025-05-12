import React from 'react'
import data from '../data.json'

export default function UserInterface() {
  return (
    <div>
        <h1>Users</h1>
        <table className="table">
    <thead>
      <tr>
        <th style={{textAlign:'center'}}>NAME</th>
        <th style={{textAlign:'center'}}>EMAIL</th>
        <th style={{textAlign:'center'}}>ROLE</th>
        <th style={{textAlign:'center'}}>ACTIONS</th>
      </tr>
    </thead>
    <tbody>
      { data.users.map((user) => (
        <tr key={user._id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td style={{textAlign:'center'}}>{user.isAdmin ? 'Admin' : 'User'}</td>
          <td style={{textAlign:'center'}}>
          <button
              style={{ padding:'5px 15px'}}
                type="button"
                className="small edit"
                // onClick={() => props.history.push(`/user/${user._id}/edit`)}
                
              >
                <i class="fa fa-pencil-square-o fa-x" aria-hidden="true"></i>
              </button>
              <button
               style={{ padding:'5px 15px'}}
                type="button"
                className="small delet"
                // onClick={() => deleteHandler(user)}
              >
                <i class="fa fa-trash-o fa-x" aria-hidden="true"></i>
              </button>
          
          </td>
        </tr>
      ))}
    </tbody>
  </table></div>
  )
}
