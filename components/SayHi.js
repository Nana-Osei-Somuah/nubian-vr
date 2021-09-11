import React from 'react'

const SayHi = () => {
    return (
        <div>
            <img className="sayHiImage" src='/SayHiImage.png' />
            <h1 style={{textAlign:'center'}}>Say Hi</h1>
            <p style={{textAlign:'center'}}>
                Have an idea for a solution that marries Interactivity &amp;
                Immersion <br></br> with Learning &amp;  Training? Or a cool VR or AR app 
                or game <br></br> concept? Drop us a note and we will get in touch.
            </p>
            <form>
                <input type="text" name="#" placeholder="Name" className="form"></input>
                <br></br>
                <input type="email" placeholder="Email*" name="#"  className="form"></input>
                <br></br>
                <select name="#" id="#" className="form">
  	                <option disabled selected value>I am a(n)</option>
                    <option value="#">School</option>
                    <option value="#">Parent</option>
                    <option value="#">Enterprise</option>
                    <option value="#">Non-Profit</option>
                </select>
                <br></br>
                <select name="#" id="#" className="form">
  	                <option disabled selected value>I want to discuss</option>
                    <option value="#">Enterprise Quest</option>
                    <option value="#">Catapult Quest</option>
                    <option value="#">Discuss a campaign solution</option>
                    <option value="#">Something else</option>
                </select>
                <br></br>
                <textarea rows="4" cols="50" className="textarea" placeholder="Message"></textarea>
            </form>
            <button className="butt sayhibutt">Send Hi!</button>
        </div>
    )
}

export default SayHi
