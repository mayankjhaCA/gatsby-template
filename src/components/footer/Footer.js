import React from 'react'
import Subheading from './SubHeading'
import ProductBox from './PartnerBox'

// import partner icon here and pass as a props into component
import icon from "../../assets/img/icon2.png"
import icon1 from "../../assets/img/icon3.png"
import icon2 from "../../assets/img/icon4.png"
import icon3 from "../../assets/img/icon5.png"
import "./footer.css"


import BackToTopItem from './BackToTopItem'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-3 mt_10">
                                <h4>Lorem ipsum dolor</h4>
                                <p>Amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                <form action="#">
                                    <input type="email" className="mt_10" placeholder="Enter your Email address" />
                                    <button type="submit" className="button mt_10">Submit</button>
                                </form>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 mt_10">
                                <Subheading subheading="MENU SUB-HEADING 1" sublink1="sub link" sublink2="sub link" sublink3="sub link" sublink4="sub link"/>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 mt_10">
                                <Subheading subheading="MENU SUB-HEADING 2" sublink1="sub link" sublink2="sub link" sublink3="sub link" sublink4="sub link"/>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 mt_10">
                                <div className="social_icons">
                                    <span>Follow us:</span><br/>
                                    <a href="!#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="!#"><i className="fab fa-twitter"></i></a>
                                    <a href="!#"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="!#"><i className="fab fa-instagram"></i></a>
                                </div>
                                <div className="row form-row">
                                    <ProductBox src={icon} />
                                    <ProductBox src={icon1} />
                                    <ProductBox src={icon2} />
                                    <ProductBox src={icon3} />
                                    <ProductBox/> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <ul>
                                    <li><a href="!#">Privacy Policy</a></li>
                                    <li><a href="!#">Cookies Policy</a></li>
                                    <li><a href="!#">Returns Policy</a></li>
                                    <li><a href="!#">Terms and Conditions</a></li>
                                </ul>
                                <p>© Photo, Inc. 2019. We love our users!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer><br/>
            <BackToTopItem />
        </>
    )
}
export default Footer;