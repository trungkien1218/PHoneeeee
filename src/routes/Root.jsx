import React from 'react'
import Header from '../component/Header'
import Navigation from '../component/Navigation'
import Footer from '../component/Footer'
import { Outlet } from 'react-router-dom'

const Root = () => {
    return (
        <>
            <Header />
            <Navigation />
            
            <Outlet />

            <Footer />
        </>
    )
}

export default Root