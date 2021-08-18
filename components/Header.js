import React from 'react'
import HeaderImage from './HeaderImage'


const Header = () => {
    return (
        <div>
           <header>
            {// eslint-disable-next-line @next/next/no-img-element
            <img src='/headerLogo.png' style={{width:250, height:250}} />}
               <button className="headbutt">Say Hi!</button>
           </header>
        </div>
    )
}

export default Header
