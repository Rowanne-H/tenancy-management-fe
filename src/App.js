import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import Tenants from './Tenants';
import NavBar from './NavBar';
import './App.css';


function App() {
  const tenants =[{
    id: 1, ref: "123John", fname: "John", lname: "Ou", address: "123 gogo", mobile: "0403123456", email:"1@gmail.com", note:""
  }]
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/tenants">
          <Tenants tenants={tenants}/>
        </Route>
        <Route path="/tenants/new">
          <Tenants tenants={tenants}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
