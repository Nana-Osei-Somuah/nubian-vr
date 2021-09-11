import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer>
                <br></br>
                <br></br>
                <div>
                    <button className="butt footbutt" >Say Hi!</button>
                    <img src='/footerLogo.png' className="footerLogo" /> 
                    <img src='/instagram.webp' className="footerImages" /> 
                    <img src='/linkedin.webp' className="footerImages" /> 
                    <img src='/twitter.webp' className="footerImages" /> 
                    <img src='/youtube.webp' className="footerImages" /> 
                    <img src='/facebook.webp' className="footerImages" /> 
                </div>    
                <br></br>
                <br></br>
                    <p className="footerPtag"> &copy; 2020 by Nubian Virtual Reality Technology Company</p>
            </footer>
        </div>
    )
}

export default Footer
