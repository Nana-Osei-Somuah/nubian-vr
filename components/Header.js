import React from 'react'
import HeaderImage from './HeaderImage'


const Header = () => {
    return (
        <div>
           <header className="headerMargin">
            {// eslint-disable-next-line @next/next/no-img-element
            <img src='/headerLogo.png' className="headerImg" />}
            <button className="headbutt">Say Hi!</button>
           </header>
        </div>
    )
}

export default Header
