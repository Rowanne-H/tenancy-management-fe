import React from 'react';

function Tenant({ tenant }) {
    const {id, ref, property, fname, lname, mobile, email, term, sdate, edate, note} = tenant
    return (
        <tr>
            <td>{ref}</td>
            <td>{property}</td>
            <td>{fname + " " +lname}</td>
            <td>{mobile}</td>
            <td>{email}</td>
            <td>{term} months</td>
            <td>{sdate}</td>
            <td>{edate}</td>
            <td>{note}</td>
            <td>
                <button>View</button>
                <button>Edit</button>
                <button>Delete</button>
            </td>
            
        </tr>
    )
}

export default Tenant;