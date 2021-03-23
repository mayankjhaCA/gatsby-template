import React from 'react';
import StarTwo from '../star/star2';

const HorizontalProduct=(props)=>{
    const {name,sellPrice,accPrice,imgUrl} = props
    return(
        <div className="col-lg-6 mt_15">
            <div className="product_box v2 mt-3">
                {/* add horizontal product images pass url/path in Category file  */}
                <img src={imgUrl} className="product_img" alt="" />
                <div className="product_details">
                    <a href="!#"><h5>{name}</h5></a>
                    <StarTwo />
                    <p className="price">
                        <span>{sellPrice}</span>
                        <del>{accPrice}</del>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HorizontalProduct;