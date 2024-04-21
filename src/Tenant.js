import React from 'react';

function Tenant({ tenant }) {
    //if (tenants === []) return <h3>Loading...</h3>
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
            <button>Delete</button>
            <button>Edit</button>
        </tr>
    )
}

export default Tenant;