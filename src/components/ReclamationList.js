import React from 'react'
import data from '../data.json'

export default function ReclamationList() {
  return (
    <div>
        <h1>Réclamation</h1>
        <table className="table">
    <thead>
      <tr>
        <th style={{textAlign:'center'}}>NAME</th>
        <th style={{textAlign:'center'}}>EMAIL</th>
        <th style={{textAlign:'center'}}>TEL</th>
        <th style={{textAlign:'center'}}>DESCRIPTION</th>
      </tr>
    </thead>
    <tbody>
      { data.reclamation.map((user) => (
        <tr key={user._id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td style={{textAlign:'center'}}>{user.tel}</td>
          <td style={{textAlign:'center'}}>{user.reclamation}</td>
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
