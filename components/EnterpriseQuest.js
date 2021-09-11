import React from 'react'

const EnterpriseQuest = () => {
    return (
        <div className="headerMargin">
            <div className="row">
                <h1  className="enterpriseText whatWeDoh1">Enterprise Quest</h1>
                <p className="enterpriseText">Keeping trainings short &amp; engaging is a coveted <br></br> organisational goal. 
                    Enterprise Quest uses realistic <br></br> roleplaying games to condense training time while <br></br> improving trainee participation
                </p>
            </div>

            <button className="butt enterpriseText">Learn More</button>

            <div className="row" style={{marginTop:-350}}>
                <div className="column">
                    <img className="whatWeDoImage enterpriseImage" src='/enterpriseImage.webp' />
                </div>
            </div>

        </div>
    )
}

export default EnterpriseQuest
