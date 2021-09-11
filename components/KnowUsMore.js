import React from 'react'
import { Carousel } from 'react-bootstrap'

const KnowUsMore = () => {
    return (
        <div>
            <h1 style={{textAlign:'center', marginTop:-200}}>Know Us More</h1>
            <div >
                <img className="knowUsImages unicef" src='/unicef.webp' style={{ marginRight:20}} />
                <img className="knowUsImages" src='/squid.webp' style={{ marginRight:20}} />
                <img className="knowUsImages" src='/technova.webp' style={{ marginRight:20}}/>
            </div>

            <Carousel className="carousel" >
                <Carousel.Item >
                <iframe className="d-block w-100 iframeItem"   src="https://www.youtube.com/embed/SLno0C9Nwuw"></iframe>
                    <Carousel.Caption className="caption">
                        <h3 >Virtual Reality Fire Drill Simulation of a petrol station. </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item >
                    <iframe className="d-block w-100 iframeItem"  src="https://www.youtube.com/embed/9sc2F5XKTtM"></iframe>
                    <Carousel.Caption style={{color:'orangered'}} className="caption">
                        <h3>Animated video lesson on Capacitors. It was designed as part of a VR interactive module to teach Basic Electronics</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    
                    
                    <iframe className="d-block w-100 iframeItem" src="https://www.youtube.com/embed/-wG3OvLJ1Tg"></iframe>
                    <Carousel.Caption className="caption">
                    <h3>Virtual Reality interactive module to teach Basic Electronics to Highschool students</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default KnowUsMore
