import { primaryColor } from "@/utils/color";
import React from "react";
import Marquee from "react-fast-marquee";

export default function CustomerReviews() {
  const reviews = [
    {
      customer: "Md. Arif Mia",
      comment:
        "If you want to get good foods for your health then you can chose Adil Foods. Because they provide natural organic products.",
    },
    {
      customer: "Md. Hasan Mahmud",
      comment:
        "If you want to get good foods for your health then you can chose Adil Foods. Because they provide natural organic products.",
    },
    {
      customer: "Shuvo Talukdar",
      comment:
        "If you want to get good foods for your health then you can chose Adil Foods. Because they provide natural organic products.",
    },
    {
      customer: "Naim",
      comment:
        "If you want to get good foods for your health then you can chose Adil Foods. Because they provide natural organic products.",
    },
  ];

  return (
    <div>
      <h1
        style={{
          fontSize: 30,
          textAlign: "center",
          marginBottom: 20,
          marginTop: 30,
        }}
      >
        Customer Reviews
      </h1>
      <Marquee gradient={false}>
        {reviews?.map((review, index) => (
          <div
            key={index}
            style={{
              width: 400,
              marginRight: 100,
              border: "4px solid #00b96b",
              borderColor: primaryColor,
              padding: 10,
              borderRadius: 10,
            }}
          >
            <p
              style={{
                fontSize: 25,
                textAlign: "justify",
                borderBottom: "2px solid",
              }}
            >
              Review from{" "}
              <small style={{ fontSize: 18 }}>{review.customer}</small>
            </p>
            <p style={{ fontSize: 14, textAlign: "justify" }}>
              Review from {review.comment}
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
