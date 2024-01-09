import { ProductCard } from "./common/ProductCard";
let chairs = [
  {
    thumbnail: "./assets/images/chairs/image1.svg",
    name: "Cantilever chair",
    code: "Y523201",
    price: 42.0,
  },
  {
    thumbnail: "./assets/images/chairs/image2.svg",
    name: "Boratly chair",
    code: "GT23201",
    price: 48.0,
  },
  {
    thumbnail: "./assets/images/chairs/image3.svg",
    name: "Macoratt chair",
    code: "S223201",
    price: 50.0,
  },
  {
    thumbnail: "./assets/images/chairs/image4.svg",
    name: "Sollam chair",
    code: "ZY3201",
    price: 39.0,
  },
];

const FeaturedProducts = () => {
  return (
    <ul className="container mt-20 grid place-items-center gap-16 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {chairs.map((product) => {
        return (
          <ProductCard
            name={product.name}
            price={product.price}
            thumbnail={product.thumbnail}
            code={product.code}
          />
        );
      })}
    </ul>
  );
};

export default FeaturedProducts;
