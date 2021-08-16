import React from 'react'
import HeaderImage from './HeaderImage'


const Header = () => {
    return (
        <div>
           <header>
            <HeaderImage/>
               <button className="headbutt">Say Hi!</button>
           </header>
        </div>
    )
}

export default Header
