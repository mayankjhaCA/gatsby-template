import React from 'react';
import Star from '../star/star';

const SimilarProduct=(props)=>{
    const {name,sellprice,accprice,productImg} = props
    return(
        <div className="col-6 col-md-4 col-lg-3 mt_15">
            <div className="product_box v2">
                <img src={productImg} className="product_img" alt="" />
                <div className="product_details">
                    <a href="!#"><h5>{name}</h5></a>
                    <p className="price">
                        <span>{sellprice}</span>
                        <del>{accprice}</del>
                    </p>
                    <Star />
                </div>
            </div>
        </div>
    )
}
export default SimilarProduct;