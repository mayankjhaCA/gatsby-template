import React from 'react';
import Star from '../star/star';

const CategoryArea=(props)=>{
    const {name,sellPrice,accPrice,imgUrl} = props
    return(
        <div className="col-6 col-md-4 col-lg-3 mt_15">
            <div className="product_box v2 mt-3">
                {/* add category product images pass url/path in Category file  */}
                <img src={imgUrl} className="product_img" alt="" />
                <div className="product_details">
                    <a href="!#"><h5>{name}</h5></a>
                    <p className="price">
                        <span>{sellPrice}</span>
                        <del>{accPrice}</del>
                    </p>
                    <Star />
                </div>
            </div>
        </div>
                    
    )
}
export default CategoryArea;