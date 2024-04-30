# Tenancy Management System
The Tenancy Management System is an app for clients to keep tenants records.
### `Components`
#### Home
A description for this app
\
**Route: http://localhost:3000/**
#### Tenants
A list for all tenants with options for you to view selected tenant's details, edit selected tenant and delete selected tenant
\
**Search** bar allow clients to filter tenants by their reference, property, firt name, last name, mobile and email and **"Active Tenants Only"** checkbox allow clients to show the active tenants only. 
\
**Route: http://localhost:3000/tenants**
\
**Route: http://localhost:3000/tenants**
\
When **"view"** is clicked, clients will be directed to a new page for this selected tenant's detials.
\
**Route: http://localhost:3000/tenants/:id**
\
When **"Edit"** is clicked, clients will be directed to a page with an edit form with pre-filled selected tenant's details in input areas. Clients can edit tenant's detail and once "Save" button is clicked, all changes will be saved into the record.
\
**Route: http://localhost:3000/tenants/:id/edit**
\
When **"Delete"** is clicked, this selected tenant will be deleted from the record.
\
**Route: http://localhost:3000/tenants**
#### Add New Tenant
A form for clients to add new tenant. Once "Submit" button is clicked, this new tenant will be added to the record.
\
**Route: http://localhost:3000/tenants/new**
#### Github page
**Github page:https://rowanne-h.github.io/tenancy-management-fe/**

#### References
1. Academic learning materials and Google
2. StackOverflow
3. W3Schools
4. MDN Web Docs
5. https://render.com/ for db.json








