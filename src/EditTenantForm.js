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

    if (!tenant) return <h3>Loading...</h3>

    function handleChange(e) {
        const key = e.target.id
        setTenant({
            ...tenant,
            [key]: e.target.value
        })
    }

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
                <input type="text" id="ref" placeholder="e.g. 123John" onChange={handleChange} value={tenant.ref} />
            </label>
            <label> Property:
                <input type="text" id="property" placeholder="e.g. 123 StreetName Street Suburb NSW 1111" onChange={handleChange} value={tenant.property} />
            </label>
            <label> First Name:
                <input type="text" id="fname" placeholder="e.g. John" onChange={handleChange} value={tenant.fname} />
            </label>
            <label> Last Name:
                <input type="text" id="lname" placeholder="e.g. Doe" onChange={handleChange} value={tenant.lname} />
            </label>
            <label> Mobile:
                <input type="tel" id="mobile" pattern="04[0-9]{8}" placeholder="e.g. 0400111000" onChange={handleChange} value={tenant.mobile} />
            </label>
            <label> Email:
                <input type="email" id="email" placeholder="e.g. hi@example.com" onChange={handleChange} value={tenant.email} />
            </label>
            <label> Lease Term (months):
                <input type="text" id="term" placeholder="e.g. 12" onChange={handleChange} value={tenant.term} />
            </label>
            <label> Lease Start Date:
                <input type="date" id="sdate" name="sdate" onChange={handleChange} />
            </label>
            <label> Lease End Date:
                <input type="date" id="edate" name="edate" onChange={handleChange} />
            </label>
            <label> Note:
                <input type="text" id="note" name="note" onChange={handleChange} value={tenant.note} />
            </label>
            <button id="submit">Save</button>
        </form>
    )
}

export default EditTenantForm;