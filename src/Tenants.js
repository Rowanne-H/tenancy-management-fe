import React from 'react';
import Tenant from './Tenant';

function Tenants({ tenants }) {
    if (tenants === []) return <h3>Loading...</h3>
    return (
        <table>
            <tr>
                <th>Ref</th>
                <th>Address</th>
                <th>Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Lease Term</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Note</th>
            </tr>
            {tenants.map(tenant => <Tenant key={tenant.id} tenant={tenant}/>)}
        </table>
    )
}

export default Tenants;