import React from "react";
import Slider from "react-slick";

const Hero = () => {
  let bannerData = [
    {
      src: "./assets/images/banners/banner-1.png",
      subtitle: "Best Furniture For Your Castle....",
      heroText: "New Furniture Collection Trends in 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna inest adipiscing in phasellus non in justo.",
    },
    {
      src: "./assets/images/banners/banner-2.png",
      subtitle: "Best Furniture For Your Castle....",
      heroText: "New Furniture Collection Trends in 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna inest adipiscing in phasellus non in justo.",
    },
    {
      src: "./assets/images/banners/banner-3.png",
      subtitle: "Best Furniture For Your Castle....",
      heroText: "New Furniture Collection Trends in 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna inest adipiscing in phasellus non in justo.",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {bannerData.map((el) => {
          return (
            <>
              <div
                className="h-[764px] w-full bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('${el.src}')`,
                }}
              >
                <div className="container flex h-full  flex-col justify-center">
                  <p className="pb-4 font-lato font-bold text-customPink">
                    {el.subtitle}
                  </p>
                  <h2 className="w-[660px] pb-4 font-josefin text-[53px] font-bold leading-tight tracking-wide">
                    {el.heroText}
                  </h2>
                  <p className="w-[560px] font-lato font-bold text-[#8A8FB9]">
                    {el.description}
                  </p>
                  <button className="btn mt-7 h-[50px] w-[163px]">
                    Shop Now
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </div>
  );
};

export default Hero;
