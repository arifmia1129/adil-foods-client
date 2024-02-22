"use client";

import { Button, Card, Col, Row } from "antd";
import products from "../data/products.json";
import Image from "next/image";
import { primaryColor } from "@/utils/color";
import Meta from "antd/es/card/Meta";
import { useEffect, useState } from "react";
import { handleStoreRemoveProduct } from "@/utils/functions";

export default function AllProducts() {
  const [storedProducts, setStoredProducts] = useState<any>([]);

  const handleRetrievedStoredProducts = () => {
    const products = localStorage.getItem("cart");

    if (products) {
      const parsedProducts = JSON.parse(products);

      if (Array.isArray(parsedProducts) && parsedProducts.length) {
        setStoredProducts(parsedProducts);
      }
    }
  };

  useEffect(() => {
    handleRetrievedStoredProducts();
  }, []);
  return (
    <div style={{ marginTop: 50 }}>
      <h1 style={{ fontSize: 30, textAlign: "center", marginBottom: 20 }}>
        All Products
      </h1>
      <Row justify="center">
        {products?.map((product) => (
          <Col xs={24} sm={24} md={8} lg={6} key={product?.id}>
            <Row justify="center">
              <Card
                style={{ width: "90%", margin: "10px 0" }}
                cover={
                  <Image
                    width={500}
                    height={200}
                    alt="example"
                    src={product?.imageUrl}
                  />
                }
                actions={[
                  <Button
                    key={product?.id}
                    type="primary"
                    size="large"
                    onClick={() => {
                      handleStoreRemoveProduct(product);
                      // isProductStored(product);
                      handleRetrievedStoredProducts();
                    }}
                    style={{
                      backgroundColor: storedProducts.find(
                        (storedProduct: any) => product.id === storedProduct.id
                      )
                        ? "red"
                        : primaryColor,
                      borderRadius: 10,
                    }}
                  >
                    {storedProducts.find(
                      (storedProduct: any) => product.id === storedProduct.id
                    )
                      ? "Remove To Cart"
                      : " Add To Cart"}
                  </Button>,
                ]}
              >
                <Meta
                  title={product?.name}
                  description={`৳${product?.price}/${product?.unit}`}
                />
              </Card>
            </Row>
          </Col>
        ))}
      </Row>
    </div>
  );
}
