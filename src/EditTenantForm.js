import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

function EditTenantForm({ onUpdateTenant }) {
    const [tenant, setTenant] = useState(null);
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        fetch(`https://tenancy-management-be.onrender.com/tenants/${id}`)
            .then(r => r.json())
            .then(tenant => {
                setTenant(tenant)
            });
    }, [])

    function handleChange(e) {
        const key = e.target.name
        setTenant({
            ...tenant,
            [key]: e.target.value
        })
    }

    if (!tenant) return <h3>Loading...</h3>

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`https://tenancy-management-be.onrender.com/tenants/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(tenant),
        })
            .then(r => r.json())
            .then(updatedTenant => {
                onUpdateTenant(updatedTenant)
                history.push(`/tenants/${id}`)
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label> Ref:
                <input type="text" name="ref" placeholder="e.g. 123John" onChange={handleChange} value={tenant.ref} required/>
            </label>
            <label> Property:
                <input type="text" name="property" placeholder="e.g. 123 StreetName Street Suburb NSW 1111" onChange={handleChange} value={tenant.property} required/>
            </label>
            <label> First Name:
                <input type="text" name="fname" placeholder="e.g. John" onChange={handleChange} value={tenant.fname} required/>
            </label>
            <label> Last Name:
                <input type="text" name="lname" placeholder="e.g. Doe" onChange={handleChange} value={tenant.lname} required/>
            </label>
            <label> Mobile:
                <input type="tel" name="mobile" pattern="04[0-9]{8}" placeholder="e.g. 0400111000" onChange={handleChange} value={tenant.mobile} required/>
            </label>
            <label> Email:
                <input type="email" name="email" placeholder="e.g. hi@example.com" onChange={handleChange} value={tenant.email} required/>
            </label>
            <label> Lease Term (months):
                <input type="text" name="term" placeholder="e.g. 12" onChange={handleChange} value={tenant.term} required/>
            </label>
            <label> Lease Start Date: {tenant.sdate}
                <input type="date" name="sdate" onChange={handleChange} />
            </label>
            <label> Lease End Date: {tenant.edate}
                <input type="date" name="edate" onChange={handleChange} />
            </label>
            <label> Note:
                <input type="text" name="note" onChange={handleChange} value={tenant.note} />
            </label>
            <label> Status: {tenant.status}</label>
            <label> 
                Active<input type="radio" name="status" value="Active" onChange={handleChange}/> 
                Inactive<input type="radio" name="status" value="Inactive" onChange={handleChange}/>
            </label>            
            <button id="submit">Save</button>
        </form>
    )
}

export default EditTenantForm;