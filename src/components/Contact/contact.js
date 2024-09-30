import React, {useRef} from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import web_development from '../../assets/web_development.jpeg'
import Linkedin from '../../assets/Linkedin.png'
import github from '../../assets/github.png'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_gwtdmur', 'template_seve3d6', form.current, '_qIRF9YTBGma4P_2p')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent!');
            },
            (error) => {
              console.log(error.text);
            },
          );
      };

    return (
        <section id="contactPage">
            <div id="services">
                <h1 className="contactPageTitle">My Services</h1>
                <p className="serviceDesc"></p>

                <p>I offer comprehensive web development services that include creating responsive and user-friendly web designs, developing dynamic and interactive web applications using HTML, CSS, and JavaScript, and building robust backend systems with C# and the .NET framework. Additionally, I am proficient in integrating APIs and third-party services to enhance functionality, ensuring cross-browser compatibility and optimizing for performance, implementing best practices in SEO to improve search engine rankings, and using version control systems like Git for efficient project management.</p>
                <div className="serviceImgs">
                <img src={web_development} alt="" className="serviceImg" />
                </div>
            </div>
            <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='You Name' name="from_name" />
                <input type="email" className="email" placeholder='Your Email' name="reply_to" />
                <textarea className='msg' name="message" rows="5" placeholder='You Message'></textarea>
                <button type='submit' value='Send' className="submitBtn">Submit</button>
                <div className="links">
                        <a href="https://www.linkedin.com/in/vandelise-schumack/" target="_blank" rel="noopener noreferrer">
                            <img src={Linkedin} alt="Linkedin" className="link" />
                        </a>
                        <a href="https://github.com/Vandelise" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="Github" className="link" />
                        </a>
                    </div>
            </form>

            </div>
        </section>

    )
}

export default Contact