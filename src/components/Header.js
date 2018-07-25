import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
    <h1>Portfolio</h1>
    <NavLink to={"/"} activeClassName="selected" exact>Home page</NavLink>
    <NavLink to={"/portfolio"} activeClassName="selected" exact >Portfolio</NavLink>
    {/* <NavLink to={"/portfolioItem/:id"} activeClassName="selected" >Individual</NavLink> */}
    <NavLink to={"/contact"} activeClassName="selected" >Contact page</NavLink>
    </header>
)

export default Header 