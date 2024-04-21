import React from 'react';


function Tenants({ tenants }) {
    if (tenants === []) return <h3>Loading...</h3>
    return (
        <h3>Tenants</h3>
    )
}

export default Tenants;