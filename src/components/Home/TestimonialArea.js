import React from 'react';

const TestimonialArea =(props)=>{
    const {testimonialImage,name,about,review} = props
    return(
        <div className="col-4 testi_box">
            <img src={testimonialImage} alt="..." />
            <h6 className="emp_name">{name}</h6>
            <p className="about_emp">{about}</p>
            <a href="!#" className="emp_review">{review}</a>
        </div>
    )
}

export default TestimonialArea;