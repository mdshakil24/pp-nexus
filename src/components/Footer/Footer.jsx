import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='pp-footer-area'>
            <div className="container">
                <div className="pp-footer-content">
                    <div className="pp-footer-left-content">
                        <div className="pp-footer-left-heading">
                            <a href="#"><img src="/assets/images/logo/logo.png" alt="footerLogo" /></a>
                            <p>Our brands stand for Pavalec & Pavalec or Person Plus or People Plus, while the “+” symbolize additional value or other service, which will grow by the time</p>
                        </div>
                        <div className="pp-footer-left-social">
                            <p>Follow Us on Social Media</p>
                            <ul>
                                <li><a href="#"><img src="/assets/images/icons/socials/ins.png" alt="Instagram" /></a></li>
                                <li><a href="#"><img src="/assets/images/icons/socials/facebook.png" alt="Instagram" /></a></li>
                                <li><a href="#"><img src="/assets/images/icons/socials/threads.png" alt="Instagram" /></a></li>
                                <li><a href="#"><img src="/assets/images/icons/socials/youtube.png" alt="Instagram" /></a></li>
                                <li><a href="#"><img src="/assets/images/icons/socials/x.png" alt="Instagram" /></a></li>
                                <li><a href="#"><img src="/assets/images/icons/socials/in.png" alt="Instagram" /></a></li>
                            </ul>
                        </div>
                    </div>

                    {/* single footer item  */}
                    <div className="single-pp-footer-content">
                        <h5>About Us</h5>
                        <ul>
                            <li><a href="#">Who We are</a></li>
                            <li><a href="#">Our Mission</a></li>
                            <li><a href="#">Testimonials</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Partners & Sponsors</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Term & Condition</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">GDPR</a></li>
                        </ul>
                    </div>
                    {/* single footer item  */}


                    {/* single footer item  */}
                    <div className="single-pp-footer-content">
                        <h5>Community</h5>
                        <ul>
                            <li><a href="#">Service</a></li>
                            <li><a href="#">Causes</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Volunteer</a></li>
                        </ul>
                    </div>
                    {/* single footer item  */}







                    {/* single footer item  */}
                    <div className="single-pp-footer-content">
                        <h5>Jobs</h5>
                        <ul>
                            <li><a href="#">Search Job</a></li>
                            <li><a href="#">Search Companies</a></li>
                            <li><a href="#">Agencies</a></li>
                            <li><a href="#">Career Advice</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    {/* single footer item  */}




                    {/* single footer item  */}
                    <div className="single-pp-footer-content">
                        <h5>Cars</h5>
                        <ul>
                            <li><a href="#">New Cars</a></li>
                            <li><a href="#">Used Cars</a></li>
                            <li><a href="#">Dealers</a></li>
                            <li><a href="#">Sell My Cars</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    {/* single footer item  */}



                    {/* single footer item  */}
                    <div className="single-pp-footer-content">
                        <h5>Properties</h5>
                        <ul>
                            <li><a href="#">Search Properties</a></li>
                            <li><a href="#">Agencies</a></li>
                            <li><a href="#">Buy Properties</a></li>
                            <li><a href="#">Sell My Properties</a></li>
                            <li><a href="#">Rent Properties</a></li>
                        </ul>
                    </div>
                    {/* single footer item  */}


                </div>
            </div>
            <div className="pp-footer-copyright text-center">
                <p>Paper Plus Media Limeted © Copyright 2023. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;