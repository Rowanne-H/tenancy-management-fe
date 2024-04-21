import React from 'react';

function Tenant({ tenant }) {
    //if (tenants === []) return <h3>Loading...</h3>
    const {id, ref, fname, lname, address, mobile, email, note} = tenant
    return (
        <div>
            <p>Ref: {ref}</p>
            <p>Name: {fname +' ' + lname}</p>
            <p>address: {address}</p>
            <p>mobile: {mobile}</p>
            <p>email: {email}</p>
            <p>note: {note}</p>
            <button>close</button>
            <button>Edit</button>
        </div>
    )
}

export default Tenant;