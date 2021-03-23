import React from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import "./product.css"
import slider from "../../assets/img/slider.jpg";



const ProductSlider=()=>{
    const image=[slider,slider,slider,slider,slider]
    var settings = {
        dots:true,
        autoplay:true,
        autoplaySpeed: 2000,
        slidesToShow:1,
        initialSlide: 1,
        arrows:false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              dots:true,
              autoplay:true,
              autoplaySpeed: 2000,
              slidesToShow: 1,
              infinite:true,
            }
          }
        ]
      };

    return(
        <div className="container">
            <Slider {...settings}>
                {image.map((items,index)=>(
                    <div class='item' key={index}>
                        <img src={items} alt="..." className="slider_image" style={{width:"100%"}}/>
                    </div>
                    ))
                }
            </Slider>
        </div>
    )
}
export default ProductSlider
