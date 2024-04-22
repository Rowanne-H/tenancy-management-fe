import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <NavLink className="navbar" to="/" exact>Home</NavLink>
            <NavLink className="navbar" to="/tenants" exact>Tenants</NavLink>
            <NavLink className="navbar" to="/tenants/new" exact>Add New Tenant</NavLink>
        </nav>
    )
}

export default Navbar;