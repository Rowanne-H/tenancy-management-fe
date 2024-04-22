import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function TenantDetails() {
    const [tenant, setTenant] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://tenancy-management-be.onrender.com/tenants/${id}`)
            .then(r => r.json())
            .then(tenant => setTenant(tenant));
    }, [])
    if (!tenant) return <h3>Loading...</h3>

    return (
        <div>
            <p>Ref: {tenant.ref}</p>
            <p>Property Address: {tenant.property}</p>
            <p>Name: {tenant.fname + " " + tenant.lname}</p>
            <p>Mobile: {tenant.mobile}</p>
            <p>Email: {tenant.email}</p>
            <p>Lease Term: {tenant.term} months</p>
            <p>Lease Start Date: {tenant.sdate}</p>
            <p>Lease End Date: {tenant.edate}</p>
            <p>Note: {tenant.note}</p>
        </div>
    )
}

export default TenantDetails;