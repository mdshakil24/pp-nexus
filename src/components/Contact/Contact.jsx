import './Contact.css'
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
    return (
        <div className="pp-contact-area">
            <div className="container">
                <div className="pp-contact-content">

                    <div className="pp-left-contact-content">
                        <div className="similar-heading">
                            <span><img src="/assets/images/icons/dot.png" alt="dot" /> Contact Us</span>
                            <h2>PP+ Nexus Help Center </h2>
                            <h4>Everything you need to get started on PP+ Nexus</h4>
                        </div>
                        <div className="pp-left-contact-mail">
                            <div className='pp-left-contact-mail-icon'>
                                <MdOutlineMail />
                            </div>
                            <div className="pp-left-contact-mail-text">
                                <p>Email</p>
                                <a href="mailto:helpcenter@gmail.com">helpcenter@gmail.com</a>
                            </div>
                        </div>
                    </div>

                    <div className="pp-right-contact-content">
                        <form action="">

                            {/* single field  */}
                            <div className="pp-single-field">
                                <label htmlFor="name">Your name <span>(required)</span></label>
                                <input type="text" id="name" placeholder='Your name' />
                            </div>
                            {/* single field  */}

                            {/* single field  */}
                            <div className="pp-single-field">
                                <label htmlFor="cname">Company name <span>(optional)</span></label>
                                <input type="text" id="cname" placeholder='Company name' />
                            </div>
                            {/* single field  */}

                            {/* single field  */}
                            <div className="pp-single-field">
                                <label htmlFor="email">Your email address <span>(required)</span></label>
                                <input type="email" id="email" placeholder='Email address' />
                            </div>
                            {/* single field  */}

                            {/* single field  */}
                            <div className="pp-single-field">
                                <label htmlFor="subject">Subject <span>(required)</span></label>
                                <input type="text" id="subject" placeholder='Subject' />
                            </div>
                            {/* single field  */}

                            {/* single field  */}
                            <div className="pp-single-field">
                                <label htmlFor="message">Message <span>(required)</span></label>
                                <textarea id="message" placeholder='Message'></textarea>
                            </div>
                            {/* single field  */}

                            <button type='submit' className='similar-btn'>Submit</button>


                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;