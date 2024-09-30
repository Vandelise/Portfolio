import React from 'react';
import './skills.css';
import UIDesign from '../../assets/uxui.png';
import c_sharp from '../../assets/c_sharp.png';
import js from '../../assets/js.png';
import java from '../../assets/java.png';
import python from '../../assets/python.png';
import database from '../../assets/database.png';


const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">About Me</span>
            <span className="skillDesc">I am passionate about programming and technology. Since I started my learning journey, I have managed to acquire good knowledge to feel that I am ready to enter the job market, even though I am aware that there is a long road ahead. So below are the skills that I got a good knowledge of.
            </span>
            <div className="skillBars">
                <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UX/UI design</h2>
                    <p>Skilled in user research, wireframing, prototyping, and usability testing to enhance user experience.</p>
                    </div>
                </div>
                <div className="skillBar">
                <img src={c_sharp} alt="c_sharp" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>C# Object Oriented</h2>
                    <p>Strong understanding of C# and object-oriented programming principles for developing robust applications.</p>
                    </div>
                </div>
                <div className="skillBar">
                <img src={js} alt="js" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>JavaScrip</h2>
                    <p>Knowledgeable in modern JavaScript (ES6+), including frameworks like React for building dynamic web applications.</p>
                </div>
                </div>
                <div className="skillBar">
                    <img src={java} alt="java" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Java</h2>
                        <p>Proficient in Java, with expertise in building scalable, high-performance applications using advanced features and frameworks.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={python} alt="python" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Python</h2>
                        <p>Experienced in Python, specializing in data analysis, machine learning, and automation using libraries like pandas and scikit-learn.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={database} alt="database" className="skillBarImg" />
                    <div className="skillBarText">
                    <h2>Database Management</h2>
                    <p>Proficient in database design, optimization, and management using both relational (SQL) and NoSQL (MongoDB) databases, ensuring efficient data handling and storage solutions.</p>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Skills;