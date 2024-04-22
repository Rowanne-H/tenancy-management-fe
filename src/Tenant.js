import React from 'react';
import {Link} from 'react-router-dom';

function Tenant({ tenant, onDeleteTenant }) {
    const {id, ref, property, fname, lname, mobile, email, term, sdate, edate, note} = tenant

    function handleDeleteClick() {
        fetch(`https://tenancy-management-be.onrender.com/tenants/${id}`, {
            method: "DELETE",
        })
            .then(r => r.json())
            .then(() => {
                onDeleteTenant(id)
                alert(fname + " " + lname + " has been deleted")
            });
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
                <Link to={`/tenants/${id}`}>View</Link>
                <Link to={`/tenants/${id}/edit`}>Edit</Link>
                <button onClick={handleDeleteClick}>Delete</button>
            </td>
            
        </tr>
    )
}

export default Tenant;