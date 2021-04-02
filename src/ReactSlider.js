import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChocMilk from './images/choc-milk-img.jpg';
import WhiteMilk from './images/white-milk-img.jpg';
import IceCream from './images/ice-cream-img.jpg';
import SourCream from './images/sour-cream-pic.jpg';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      arrows:true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
          <div className="p-10 mb-20">
        
        <Slider className="p-1 center-align align-center" {...settings}>
          <div>
            
            <img className="mx-auto pb-2" src={ChocMilk} alt=""></img>
            <h2 className="text-center text-xl">Chocolate Milk</h2>
            <p className="text-center">$7.99</p>
            <p className="text-center">★★★★<span class="starOne">★</span></p>
          </div>
          <div className="shadow-1xl">
          <img className="mx-auto pb-3" src={IceCream} alt=""></img>
          <h2 className="text-center text-xl">Ice Cream</h2>
          <p className="text-center">$7.99</p>
          <p className="text-center">★★★★<span class="starOne">★</span></p>
          </div>
          <div className="shadow-1xl">
          <img className="mx-auto pb-2" src={WhiteMilk} alt=""></img>
          <h2 className="text-center text-xl">White Milk</h2>
          <p className="text-center">$2.59</p>
          <p className="text-center">★★★★<span class="starOne">★</span></p>
          </div>
          <div className="shadow-1xl">
          <img className="mx-auto mt-5 pb-4" src={SourCream} alt=""></img>
          <h2 className="text-center mt-4 text-xl">Sour Cream</h2>
          <p className="text-center">$4.29</p>
          <p className="text-center">★★★★<span class="starOne">★</span></p>
          </div>
          
        </Slider>
        </div>
      </div>
    );
  }
}