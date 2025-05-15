import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div className='mb-10'>
             <NavLink className="mr-5" to="/">Home</NavLink>
             <NavLink to="/addCoffee">Add Coffee</NavLink>
        </div>
    );
};

export default Header;