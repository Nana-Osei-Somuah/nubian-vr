import React from 'react'
import { Carousel } from 'react-bootstrap'

const NubianLabs = () => {
    return (
        <div className="headerMargin">
            <div className="row">
                <h1 className="whatWeDoText whatWeDoh1">Nubian Labs</h1>
                <p className="whatWeDoText textsize">Interactivity &amp; Immersion are greatly altering our <br></br> digital experience. Nubian Labs explores <br></br> experimental concepts on this frontier that have <br></br> product viability.</p>
            </div>

            <div className="row" style={{marginTop:-350}}>
                <div className="column">
                    <Carousel fade className="whatWeDoImage lifeskillsImage nLabsCarousel" >
                        <Carousel.Item className="backgroundItem">
                            <img
                            className="d-block backgroundItem"
                            src="/backgroundImage.webp"
                            alt="First slide"
                            />
                            <Carousel.Caption classname="labName" style={{color:'orange'}}>
                                <h3 >Learning Camp</h3>
                                <img src='/games.webp'  className="gameIcon"/>
                                <h4 className="h4font"><b>Online Course:</b>Introduction to 2D Game Development</h4>
                                <p><b>A 4-week virtual course designed for kids 13+. It seeks to introduce learners to the theory &amp; practice of 2D Game Development while also nurturing the necessary soft skills required to embark on personal &amp; collaborative game development projects.</b></p>
                                <div>
                                    <button className="butt1">Apply</button>
                                    <button className="butt1">Pay</button>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="backgroundItem">
                            <img
                            className="d-block  backgroundItem"
                            src="/backgroundImage.webp"
                            alt="Second slide"
                            />

                            <Carousel.Caption classname="labName" style={{color:'orange', font:'bold'}}>
                                <h3 >Catapult Quest</h3>
                                <img src='/games.webp' className="gameIcon"/>
                                <p><b>Catapult Quest is an Adventure game in which a character uses his/her slingshotting skills to explore the landscape of the Sahel Savannah.  Armed with only his slingshot and stones of many potent powers, if our character is to survive in the Sahel, he must become a master of his slingshot.</b></p>
                                <button className="butt sayhibutt butt1">Learn More</button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default NubianLabs
