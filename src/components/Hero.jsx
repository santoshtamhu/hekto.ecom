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
            <div>
              <div
                className="h-64 w-full bg-center bg-no-repeat md:h-96 lg:h-[464px] 2xl:h-[764px]"
                style={{
                  backgroundImage: `url('${el.src}')`,
                }}
              >
                <div className="container flex h-full flex-col items-center justify-center p-3 text-center lg:max-xl:gap-4 2xl:items-start 2xl:text-left">
                  <p className="pb-1 pt-4 font-lato text-[12px] font-bold text-customPink lg:pb-2 lg:text-[16px]">
                    {el.subtitle}
                  </p>
                  <h2 className="pb-1 font-josefin text-2xl font-bold leading-tight tracking-wide md:w-[450px] md:text-4xl lg:w-[660px] lg:pb-2 lg:max-xl:text-5xl xl:w-[660px] xl:text-[53px] xl:leading-tight">
                    {el.heroText}
                  </h2>
                  <p className="w-64 font-lato text-[10px] font-bold text-[#8A8FB9] md:w-96 md:text-[16px] xl:w-[460px]">
                    {el.description}
                  </p>
                  <button className="btn mt-3 w-24 text-[10px] md:w-28 lg:mt-5 lg:text-lg xl:h-[50px] xl:w-[163px]">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Hero;
