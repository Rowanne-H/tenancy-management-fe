import React from 'react';
import Tenant from './Tenant';

function Tenants({ tenants }) {
    if (tenants === []) return <h3>Loading...</h3>
    return (
        <div>
            {tenants.map(tenant => <Tenant key={tenant.id} tenant={tenant}/>)}
        </div>
    )
}

export default Tenants;