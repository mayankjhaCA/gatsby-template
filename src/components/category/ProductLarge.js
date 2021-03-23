import React from 'react';
import StarTwo from '../star/star2';

const ProductLarge=(props)=>{
    const {name,sellPrice,accPrice,imgUrl} = props
    return(
        <div className="col-md-6 mt_15">
            <div className="product_box v2 mt-3">
                {/* add large product images pass url/path in Category file  */}
                <img src={imgUrl} className="product_img" alt="..." />
                <div className="product_details">
                    <a href="!#"><h5>{name}</h5></a>
                    <p className="price">
                        <span>{sellPrice}</span>
                        <del>{accPrice}</del>
                    </p>
                    <StarTwo />
                </div>
            </div>
        </div>
    )
}

export default ProductLarge;