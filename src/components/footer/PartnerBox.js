import React from 'react'

const ProductBox=(props)=>{
    const {src} = props
    return(
        <div className="col col-lg-4">
            <div className="partner_box">
                {/* partner logo image pass in footer file */}
                <img src={src} className="img-fluid" alt="" />
            </div>
        </div>
    )
}

export default ProductBox