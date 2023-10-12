import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'antd';

const Navigation = () => {
    return (
        <nav className='header'>
            <div className='logo-hd'></div>
            <div>
                <button  className='btn-hd'>
                    <NavLink to={"/"} className='text-nav'>Home page</NavLink>
                </button >
                <button className='btn-hd' >
                    <NavLink to={"/about"} className='text-nav'>About page</NavLink>
                </button >
                <button className='btn-hd' >
                    <NavLink to={"/products"} className='text-nav' >Product Page</NavLink>
                </button>
                <button className='btn-hd' >
                    <NavLink to={"/shoppingcart"} className='text-nav'>Shopping Cart Page</NavLink>
                </button>
            </div>
           
        </nav>
    )
}

export default Navigation