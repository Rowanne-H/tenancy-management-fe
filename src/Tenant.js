import React from 'react';

function Tenant({ tenant }) {
    const {id, ref, property, fname, lname, mobile, email, term, sdate, edate, note} = tenant
    function handleDeleteClick() {
        fetch(`https://tenancy-management-be.onrender.com/tenants/${id}`, {
            method: "DELETE",
        })
            .then(r => r.json())
            .then(() => console.log("deleted!"));
    }
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
                <button onClick={handleDeleteClick}>Delete</button>
            </td>
            
        </tr>
    )
}

export default Tenant;