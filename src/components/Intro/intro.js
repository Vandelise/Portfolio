import React from 'react';
import './intro.css';
import {Link} from 'react-scroll';
import bg from '../../assets/image.png';



const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello</span>
                <span className="introText">I am <span className="introName">Vandelise Schumack</span><br />Software Engineer</span>
                <p className="introPara">I am a programming student at Centennial College enrolled in the <br />
                Software Engineering Technician course</p>
            </div>
            <img src={bg} alt="Profile" className="bg" />

        </section>
    );
    
}

export default Intro;