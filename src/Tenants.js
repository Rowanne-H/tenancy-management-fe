import React, { useState } from 'react';
import Tenant from './Tenant';

function Tenants({ tenants, deleteTenant }) {
    const [search, setSearch] = useState('');
    const [showActiveTenants, setShowActiveTenants] = useState(false);
    const filteredTenants = tenants
    .filter(tenant => {
        if (showActiveTenants) {
            return tenant.status === 'Active'
        } else {
            return true
        }
    })
    .filter(tenant => 
        tenant.ref.toLowerCase().includes(search)
        || tenant.property.toLowerCase().includes(search) 
        || tenant.fname.toLowerCase().includes(search)
        || tenant.lname.toLowerCase().includes(search)
        || tenant.mobile.toLowerCase().includes(search)
        || tenant.email.toLowerCase().includes(search)
    )    
    
    return (
        <div>
            <input type="text" id="search" name="search" placeholder="search..." onChange={(e) => setSearch(e.target.value.toLowerCase())}/>
            <span>Active Tenants Only</span><input type="checkbox" checked={showActiveTenants} onChange={() => setShowActiveTenants(!showActiveTenants)}/>
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
                    {filteredTenants.map(tenant => <Tenant key={tenant.id} tenant={tenant} onDeleteTenant={deleteTenant} />)}
                </tbody>
            </table>
        </div>
    )
}

export default Tenants;