import React, { useEffect, useState } from 'react';

function TenantForm({ onAddNewTenant }) {
    let form = document.querySelector('form');
    const [tenant, setTenant] = useState({status: "active"});

    function handleChange(e) {
        const key = e.target.id
        setTenant({
            ...tenant,
            [key]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("https://tenancy-management-be.onrender.com/tenants", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            },
            body: JSON.stringify(tenant),
        })
            .then(r => r.json())
            .then(newTenant => {
                onAddNewTenant(newTenant)
                alert(newTenant.fname + " " + newTenant.lname + " has been saved!")
            });
        form.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label> Ref:
                <input type="text" id="ref" placeholder="e.g. 123John" onChange={handleChange} />
            </label>
            <label> Property:
                <input type="text" id="property" placeholder="e.g. 123 StreetName Street Suburb NSW 1111" onChange={handleChange} />
            </label>
            <label> First Name:
                <input type="text" id="fname" placeholder="e.g. John" onChange={handleChange} />
            </label>
            <label> Last Name:
                <input type="text" id="lname" placeholder="e.g. Doe" onChange={handleChange} />
            </label>
            <label> Mobile:
                <input type="tel" id="mobile" pattern="04[0-9]{8}" placeholder="e.g. 0400111000" onChange={handleChange} />
            </label>
            <label> Email:
                <input type="email" id="email" name="email" placeholder="e.g. hi@example.com" onChange={handleChange} />
            </label>
            <label> Lease Term (months):
                <input type="text" id="term" name="term" placeholder="e.g. 12" onChange={handleChange} />
            </label>
            <label> Lease Start Date:
                <input type="date" id="sdate" name="sdate" onChange={handleChange} />
            </label>
            <label> Lease End Date:
                <input type="date" id="edate" name="edate" onChange={handleChange} />
            </label>
            <label> Note:
                <input type="text" id="note" name="note" onChange={handleChange} />
            </label>
            <button id="submit">Submit</button>
        </form>
    )
}

export default TenantForm;