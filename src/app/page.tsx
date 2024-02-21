import AllProducts from "@/component/AllProducts";
import AllProduct from "@/component/AllProducts";
import BestSellingProduct from "@/component/BestSellingProduct";
import CustomCarousel from "@/component/Carousel";
import CustomerReviews from "@/component/CustomerReviews";

const Home = () => {
  return (
    <>
      <CustomCarousel />
      <BestSellingProduct />
      <AllProducts />
      <CustomerReviews />
    </>
  );
};

export default Home;
