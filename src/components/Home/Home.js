import React from 'react';
import logo from "../../assets/img/logo.png";
import HeroItem from './Hero';
import image2 from '../../assets/img/img2.jpg'
import home from "../../assets/img/home.jpg"
import ContentArea from './ContentArea';
import TestimonialArea from './TestimonialArea';
import icon1 from "../../assets/img/icon1.png";
import "./home.css";
import FeatureItem from './Feature';

const Home=()=>{
    return(
        <>
        <header className="d-flex align-items-center">
            <div className="container text-center">
                <a href="/"><img src={logo} className="img-fluid" alt="" /></a>
            </div>
        </header>
        <div className="hero_area d-flex align-items-center home" style={{backgroundImage: `url(${home})`}}>
            <HeroItem />
        </div>

        {/* feature product area */}
        <div className="feature_product overflow-hidden">
            <FeatureItem />
        </div>

        {/* feature image */}
        <div className="feature_img" style={{backgroundImage: `url(${image2})`}}></div>

        {/* content area */}
        <ContentArea />

        {/* testimonial area */}

        <div className="testi_area">
            <div className="container">
                <div className="row form-row">
                    <div className="col-12">
                        <p className="testi_title">See what our customers have to say</p>
                    </div>
                    <TestimonialArea 
                        testimonialImage={icon1} 
                        name="First Name Last Name" 
                        about="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem." 
                        review="Read full review"/>
                    <TestimonialArea 
                        testimonialImage={icon1} 
                        name="First Name Last Name" 
                        about="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem." 
                        review="Read full review"/>
                    <TestimonialArea 
                        testimonialImage={icon1} 
                        name="First Name Last Name" 
                        about="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem." 
                        review="Read full review"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;