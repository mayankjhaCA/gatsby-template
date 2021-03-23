import React from 'react';
import star from '../../assets/img/star.png'
import './star.css';

const Star =()=>{
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
export default Star;