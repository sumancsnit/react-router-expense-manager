import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
    <h1>Portfolio</h1>
    <NavLink to={"/"}>Home page</NavLink>
    <NavLink to={"/portfolio"}>Portfolio</NavLink>
    <NavLink to={"/portfolio/:id"}>Individual</NavLink>
    <NavLink to={"/contact"}>Contact page</NavLink>
    </header>
)

export default Header 