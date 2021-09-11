import React from 'react'

const LifeSkills = () => {
    return (
        <div className="headerMargin">  
            <div className="row">
                <h1  className="whatWeDoText whatWeDoh1">Life Skills App</h1>
                <p className="whatWeDoText textsize">Adolescence is often an unfamiliar and challenging <br></br> experience for teens. The Life Skills App provides <br></br> access to the relevant resources &amp; 
                    counsel required <br></br> to ease the transition through adolescence
                </p>
            </div>
            <button className="butt lifeskillsText">Learn More</button>

            <div className="imageMarginTop row"  style={{marginTop:-350}}>
                <div className="column">
                    <img className="whatWeDoImage lifeskillsImage" src='/LifeSkillsImage.png'  />
                </div>
            </div>
            
        </div>
    )
}

export default LifeSkills
