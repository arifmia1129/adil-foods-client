import AllProducts from "@/component/AllProducts";
import AllProduct from "@/component/AllProducts";
import BestSellingProduct from "@/component/BestSellingProduct";
import CustomCarousel from "@/component/Carousel";

const Home = () => {
  return (
    <>
      <CustomCarousel />
      <BestSellingProduct />
      <AllProducts />
    </>
  );
};

export default Home;
