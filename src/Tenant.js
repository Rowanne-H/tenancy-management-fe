import React from 'react';
import {NavLink} from 'react-router-dom';

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
                <NavLink className="more" to={`/tenants/${id}`}>View</NavLink>
                <NavLink className="more" to={`/tenants/${id}/edit`}>Edit</NavLink>
                <NavLink className="more" to={`/tenants`} onClick={handleDeleteClick}>Delete</NavLink>
            </td>
            
        </tr>
    )
}

export default Tenant;