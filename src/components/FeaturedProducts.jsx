let chairs = [
  {
    thumbnail: "https://via.placeholder.com/178x178",
    name: "Cantilever chair",
    code: "Y523201",
    price: 42.0,
  },
  {
    thumbnail: "https://via.placeholder.com/178x178",
    name: "Boratly chair",
    code: "GT23201",
    price: 48.0,
  },
  {
    thumbnail: "https://via.placeholder.com/178x178",
    name: "Macoratt chair",
    code: "S223201",
    price: 50.0,
  },
  {
    thumbnail: "https://via.placeholder.com/178x178",
    name: "Sollam chair",
    code: "ZY3201",
    price: 39.0,
  },
];

const FeaturedProducts = () => {
  return (
    <div className="flex gap-10 justify-center mt-10">
      {chairs.map((el) => {
        return (
          <div className="w-64 h-96 relative">
            <div className="w-64 h-96 left-0 top-0 absolute bg-white shadow" />
            <div className="w-64 h-60 left-0 top-0 absolute bg-slate-50" />
            <div className="left-[71px] top-[251px] absolute text-customPink text-lg font-bold font-['Lato']">
              {el.name}
            </div>
            <div className="w-12 h-1 left-[110px] top-[285px] absolute">
              <div className="w-3.5 h-1 left-0 top-0 absolute bg-teal-400 rounded-lg" />
              <div className="w-3.5 h-1 left-[19px] top-0 absolute bg-pink-500 rounded-lg" />
              <div className="w-3.5 h-1 left-[38px] top-0 absolute bg-blue-900 rounded-lg" />
            </div>
            <div className="left-[92px] top-[301px] absolute text-violet-950 text-sm font-normal font-['Josefin Sans']">
              Code - {el.code}
            </div>
            <div className="left-[115px] top-[327px] absolute text-violet-950 text-sm font-normal font-['Lato']">
              ${el.price}.00
            </div>
            <img
              className="w-44 h-44 left-[40px] top-[46px] absolute"
              src={el.thumbnail}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedProducts;
