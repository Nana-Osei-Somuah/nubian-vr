import React from 'react'
import { Carousel } from 'react-bootstrap'

const KnowUsMore = () => {
    return (
        <div>
            <h1>Know Us More</h1>

            <Carousel>
                <Carousel.Item>
                <iframe className="d-block w-100" src="https://www.youtube.com/embed/SLno0C9Nwuw">
</iframe>
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <iframe className="d-block w-100" src="https://www.youtube.com/embed/9sc2F5XKTtM">
</iframe>

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    
                    
                    <iframe className="d-block w-100" src="https://www.youtube.com/embed/-wG3OvLJ1Tg">
</iframe>

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default KnowUsMore
