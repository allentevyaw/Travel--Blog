import React from 'react'
import airbnb from '../assets/airbnb.png'


export const Navbar = () => {
    return (
        <nav>
            <img src={airbnb} className="airbnbImg" />
        </nav>
    )
}