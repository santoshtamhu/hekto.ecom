const Hero = () => {
  return (
    <div>
      <img src="../src/banners/banner-1.png" alt="banner2" />
      <div className="absolute top-[340px] left-44">
        <div className="">
          <p className="pb-4 text-customPink font-lato font-bold">
            Best Furniture For Your Castle....
          </p>
          <p className="pb-4 font-josefin font-bold text-[53px] leading-tight tracking-wide">
            New Furniture Collection <br /> Trends in 2020
          </p>
          <p className="font-lato font-bold text-[#8A8FB9]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing
            <br />
            in phasellus non in justo.
          </p>
        </div>
        <button className="mt-7 btn w-[163px] h-[50px]">Shop Now</button>
      </div>
    </div>
  );
};

export default Hero;
