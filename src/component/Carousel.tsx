import React from "react";
import { Carousel } from "antd";
import Image from "next/image";

const CustomCarousel = () => (
  <Carousel autoplay>
    <div>
      <Image
        src="https://adil-foods.vercel.app/assets/banner_5-1e671a2c.jpg"
        height={400}
        alt=""
        width={1200}
        style={{ width: "100%", height: "60vh" }}
      />
    </div>
    <div>
      <Image
        src="https://scontent.fdac134-1.fna.fbcdn.net/v/t39.30808-6/382416921_274473148760475_5683970042324919020_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=49d041&_nc_ohc=mKo_QtK19KUAX8sP1J5&_nc_ht=scontent.fdac134-1.fna&oh=00_AfB3c5UHx97pGEs8srn5NBcRHG9JkQ09f0lk5NmYBngFJA&oe=651F2CA9"
        height={800}
        alt=""
        width={1200}
        style={{ width: "100%", height: "60vh" }}
      />
    </div>
  </Carousel>
);

export default CustomCarousel;
