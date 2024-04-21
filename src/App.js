import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import Tenants from './Tenants';
import NavBar from './NavBar';
import TenantForm from './TenantForm';
import './App.css';


function App() {
  const tenants =[{
    id: 1, ref: "123John", address: "123 gogo st gggg ", fname: "John", lname: "Ou",  mobile: "0403123456", email:"1@gmail.com", term: "12", sdate: "12-2-1990", edate: "12-2-2055", note:""
  }]
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        <Route exact path="/tenants">
          <Tenants tenants={tenants}/>
        </Route>
        <Route exact path="/tenants/new">
          <TenantForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
