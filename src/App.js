import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import Tenants from './Tenants';
import NavBar from './NavBar';
import TenantDetails from './TenantDetails';
import TenantForm from './TenantForm';
import EditTenantForm from './EditTenantForm';
import './App.css';


function App() {
  const [tenants, setTenants] = useState([]);
  useEffect(() => {
    fetch("https://tenancy-management-be.onrender.com/tenants")
      .then(r => r.json())
      .then(tenants => setTenants(tenants));
  }, [])

  function addNewTenant(newTenant) {
    setTenants([...tenants, newTenant])
  }

  function deleteTenant(id) {
    setTenants(tenants.filter(tenant => tenant.id !== id))
  }

  function updateTenant(uTenant) {
    setTenants(tenants.map(tenant => {
      if (tenant.id === uTenant.id) {
        return uTenant
      } else {
        return tenant
      }
    }))
  }

  if (tenants === []) return <h3>Loading...</h3>

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/tenants">
          <Tenants tenants={tenants} deleteTenant={deleteTenant} />
        </Route>
        <Route exact path="/tenants/new">
          <TenantForm onAddNewTenant={addNewTenant} />
        </Route>
        <Route exact path="/tenants/:id">
          <TenantDetails />
        </Route>
        <Route exact path="/tenants/:id/edit">
          <EditTenantForm onUpdateTenant={updateTenant} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
