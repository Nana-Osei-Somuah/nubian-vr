import React from 'react'

const LifeSkills = () => {
    return (
        <div >
            <div className="row">
                <h1 style={{fontSize:45, marginTop:300}} className="whatWeDoText">Life Skills App</h1>
                <p className="whatWeDoText">Adolescence is often an unfamiliar and challenging <br></br> experience for teens. The Life Skills App provides <br></br> access to the relevant resources &amp; 
                    counsel required <br></br> to ease the transition through adolescence
                </p>
            </div>
            <button className="butt whatWeDoText">Learn More</button>

            <div className="row">
                <div className="column">
                    <img className="whatWeDoImage lifeskillsImage" src='/LifeSkillsImage.png' style={{width:300, height:450, float:'right'}} />
                </div>
            </div>
            
        </div>
    )
}

export default LifeSkills
