import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';
import Slide from './Slide/Slide';

/**
 * Carousel
 * @param  {object} props [description]
 * @return {[type]}       [description]
 */
const carousel = props => {
    // Carousel settings
    const settings = {
        arrows: false,
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    // Définition des slides
    const slides = props.slides.map((slide, index) => (
        <Slide
            key={index}
            slideSrcset={slide.slideSrcset}
            slideMedia={slide.slideMedia}
            slideImgSrc={slide.slideImgSrc}
            slideImgTitle={slide.slideImgTitle}
            slideCategories={slide.slideCategories}
            slideCategoriesLink={slide.slideCategoriesLink}
            slideTitle={slide.slideTitle}
            slideLink={slide.slideLink}
            slideDate={slide.slideDate}
        />
    ));
    return (
        <Slider className="carousel" {...settings}>
            {slides}
        </Slider>
    );
}

export default carousel;
