import React from 'react';

function TenantDetails({ tenant }) {
    const {id, ref, property, fname, lname, mobile, email, term, sdate, edate, note} = tenant

    return (
        <div>
            <p>Ref: {ref}</p>
            <p>Property Address: {property}</p>
            <p>Name: {fname + " " +lname}</p>
            <p>Mobile: {mobile}</p>
            <p>Email: {email}</p>
            <p>Lease Term: {term} months</p>
            <p>Lease Start Date: {sdate}</p>
            <p>Lease End Date: {edate}</p>
            <p>Note: {note}</p>       
        </div>
    )
}

export default TenantDetails;