import React from 'react';
import star from '../../assets/img/star2.png'
import './star2.css';

const StarTwo =()=>{
    return(
        <div className="rating">
            <img src={star} alt="..." />
            <img src={star} alt="..." />
            <img src={star} alt="..." />
            <img src={star} alt="..." />
            <img src={star} alt="..." />
        </div>
    )
}
export default StarTwo;