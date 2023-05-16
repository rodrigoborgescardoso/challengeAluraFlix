import React from "react";
import Slider from "react-slick";
import VideoCard from "components/VideoCard";

const Carousel = ({ data }) => {

    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 360,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
    return (
        <div>
            <Slider {...settings} >
                { data.map( video =>
                    <VideoCard key={video.id} id={video.id} urlVideo={video.attributes.urlVideo} urlThumbnail={video.attributes.urlThumbnail} title={video.attributes.title} description={video.attributes.description} />
                ) }
            </Slider>
        </div>
    );
};

export default Carousel;