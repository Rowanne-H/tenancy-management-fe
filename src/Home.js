import React from 'react';

function Home() {
    return (
        <div id="description">
            <h3>Tenancy Management System</h3>
            <h4>You can use Tenancy Management System to keep and update tenants record</h4>
            <h5> "Tenants" page</h5>
            <p>
                You will see a list for all tenants with options for you to view selected tenant's details, edit selected tenant and delete selected tenant. 
                When "view" is clicked, you will see a new page for this selected tenant's detials.
                When "Edit" is clicked, you will see an edit form with pre-filled selected tenant's details in input areas which you can edit. Once "Save" button is clicked, all changes will be saved into the record.
                When "Delete" is clicked, this selected tenant will be deleted from the record.
            </p>
            <h5>"Add New Tenant" page</h5>
            <p>You will see a form which you can key in new tenant's information and add this new tenant to the record.</p>
        </div>
    )
}

export default Home;
