import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import { LatestProducts } from "../components/LatestProducts";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <LatestProducts />
    </>
  );
}

export default Home;
