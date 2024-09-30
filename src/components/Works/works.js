import React from 'react';
import './works.css';
import work1 from '../../assets/workImg1.png'
import work2 from '../../assets/workImg2.png'
import work3 from '../../assets/workImg3.png'
import work4 from '../../assets/workImg4.png'
import work5 from '../../assets/workImg5.png'
import work6 from '../../assets/workImg6.png'

const Works = () => {
    return (
        <section id='works'>
            <h2 className="worksTitle">My Projects</h2>
            <span className="worksDesc">
            </span>
            <div className="worksImgs">
                <img src={work1} alt="" className="workImg" />
                <img src={work2} alt="" className="workImg" />
                <img src={work3} alt="" className="workImg" />
                <img src={work4} alt="" className="workImg" />
                <img src={work5} alt="" className="workImg" />
                <img src={work6} alt="" className="workImg" />

            </div>
            {/* <button className="workBtn">See More</button> */}
        </section>

    );
}

export default Works;