import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/tenants" exact>Tenants</NavLink>
            <NavLink to="/tenants/new" exact>Add New Tenant</NavLink>
        </nav>
    )
}

export default Navbar;