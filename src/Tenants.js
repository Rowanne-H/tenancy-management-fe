import React from 'react';
import Tenant from './Tenant';

function Tenants({ tenants, deleteTenant }) {
    return (
        <div>
            <input type="text" id="search" name="search" placeholder="search..." />
            <span>Inactive</span><input type="checkbox" value="Inactive" />
            <table>
                <tbody>
                    <tr>
                        <th>Ref</th>
                        <th>Property</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Lease Term</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Note</th>
                        <th>Status</th>
                        <th>More</th>
                    </tr>
                    {tenants.map(tenant => <Tenant key={tenant.id} tenant={tenant} onDeleteTenant={deleteTenant} />)}
                </tbody>
            </table>
        </div>
    )
}

export default Tenants;