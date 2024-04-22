import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import Tenants from './Tenants';
import NavBar from './NavBar';
import TenantForm from './TenantForm';
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
  
  const tenant = {
    id: 1, ref: "123John", property: "123 gogo st gggg ", fname: "John", lname: "Ou",  mobile: "0403123456", email:"1@gmail.com", term: "12", sdate: "12-2-1990", edate: "12-2-2055", note:""
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
          <Tenants tenants={tenants }/>
        </Route>
        <Route exact path="/tenants/new">
          <TenantForm onAddNewTenant={addNewTenant}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
