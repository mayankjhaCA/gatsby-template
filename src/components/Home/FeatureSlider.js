import React from "react"

// import all feture product image
import sliderimg1 from "../../assets/img/img1.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import "./home.css";


const FeatureSlider=()=>{
  /* product image store in a array */
    const image=[sliderimg1,sliderimg1,sliderimg1,sliderimg1,sliderimg1,sliderimg1,sliderimg1,sliderimg1,sliderimg1,sliderimg1]
    
    var settings = {
        autoplay:true,
        autoplaySpeed: 3000,
        initialSlide:4,
        slidesToShow:6,
        slidesToScroll:4,
        arrows:false,
        infinite: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 7,
              slidesToScroll:4,
              infinite: true,
            }
          },
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 5,
              slidesToScroll:3,
              infinite: true,
            }
          },
          {
            breakpoint: 780,
            settings: {
              slidesToShow: 4,
              slidesToScroll:3,
              infinite:true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll:2,
              infinite:true,
            }
          },
          {
            breakpoint: 420,
            settings: {
              slidesToShow:2,
              initialSlide:2,
              autoplaySpeed:3000,
              infinite:true,
            }
          },
          {
            breakpoint: 380,
            settings: {
              slidesToShow:1,
              initialSlide:1,
              autoplaySpeed:5000,
              infinite:true,
            }
          },
        ]
      };

    return(
        <div>
            <Slider {...settings}>
                {image.map((items,index)=>(
                    <div className="product_box" key={index}>
                        <img src={items} alt="..." style={{width:"100%"}}/>
                        <div className="product_details">
                            <p>Sed ut perspiciatis</p>
                            <a href="!#" className="button">Join Today</a>
                        </div>
                    </div>

                    ))
                }
            </Slider>
        </div>
    )
}
export default FeatureSlider
