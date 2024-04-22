import React, {useEffect, useState} from 'react';

function TenantForm({ etenant, onAddNewTenant }) {
    let form=document.querySelector('form');
    const [tenant, setTenant] = useState({
        ref: "", 
        property: "", 
        fname: "", 
        lname: "",  
        mobile: "", 
        email:"", 
        term: "", 
        sdate: "", 
        edate: "", 
        note:""
      })

    useEffect(() => {
        if (etenant !== undefined) {
            setTenant(etenant)
        }
    }, [])
    
    function handleChange(e) {
        const key=e.target.id
        setTenant({
            ...tenant,
            [key]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (etenant !== undefined) {
            console.log('change code later')
        } else {
            fetch("https://tenancy-management-be.onrender.com/tenants", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(tenant),
            })
                .then(r => r.json())
                .then(newTenant => onAddNewTenant(newTenant));
        }
        form.reset();
    } 
    
    return (
        <form onSubmit={handleSubmit}>
            <label> Ref:
                <input type="text" id="ref" placeholder="e.g. 123John" onChange={handleChange} value={tenant.ref}/>
            </label> 
            <label> Property: 
                <input type="text" id="property" placeholder="e.g. 123 StreetName Street Suburb NSW 1111" onChange={handleChange} value={tenant.property}/>
            </label> 
            <label> First Name:
                <input type="text" id="fname" placeholder="e.g. John" onChange={handleChange} value={tenant.fname}/>
            </label> 
            <label> Last Name:
                <input type="text" id="lname" placeholder="e.g. Doe" onChange={handleChange} value={tenant.lname}/>
            </label> 
            <label> Mobile:
                <input type="tel" id="mobile" pattern="04[0-9]{8}" placeholder="e.g. 0400111000" onChange={handleChange} value={tenant.mobile}/>
            </label> 
            <label> Email:
                <input type="email" id="email" placeholder="e.g. hi@example.com" onChange={handleChange} value={tenant.email}/>
            </label> 
            <label> Lease Term (months):
                <input type="text" id="term" placeholder="e.g. 12" onChange={handleChange} value={tenant.term}/>
            </label> 
            <label> Lease Start Date:
                <input type="date" id="sdate" name="sdate" onChange={handleChange} />
            </label> 
            <label> Lease End Date:
                <input type="date" id="edate" name="edate" onChange={handleChange} />
            </label> 
            <label> Note:
                <input type="text" id="note" name="note" onChange={handleChange} value={tenant.note}/>
            </label>
            <button id="submit">Save</button>
        </form>
    )
}

export default TenantForm;