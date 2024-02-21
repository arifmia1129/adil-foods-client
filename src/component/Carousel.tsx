import { Carousel } from "antd";
import Image from "next/image";
import banner1 from "../assets/banner/1.jpg";
import banner2 from "../assets/banner/2.jpg";
import banner3 from "../assets/banner/3.jpg";

const CustomCarousel = () => (
  <Carousel style={{ padding: 0 }} autoplay arrows draggable>
    <div>
      <Image
        src={banner1}
        height={400}
        alt=""
        width={1200}
        style={{ width: "100%", height: "70vh" }}
      />
    </div>
    <div>
      <Image
        src={banner2}
        height={800}
        alt=""
        width={1200}
        style={{ width: "100%", height: "70vh" }}
      />
    </div>
    <div>
      <Image
        src={banner3}
        height={800}
        alt=""
        width={1200}
        style={{ width: "100%", height: "70vh" }}
      />
    </div>
  </Carousel>
);

export default CustomCarousel;
