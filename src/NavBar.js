import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/tenants" exact>Tenants</NavLink>
            <NavLink to="/tenants/new" exact>Add New Tenant</NavLink>
        </div>
    )
}

export default Navbar;