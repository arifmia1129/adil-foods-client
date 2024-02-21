import { Button, Card, Col, Row } from "antd";
import products from "../data/products.json";
import Image from "next/image";
import { primaryColor } from "@/utils/color";
import Meta from "antd/es/card/Meta";

export default function BestSellingProduct() {
  return (
    <div style={{ marginTop: 50 }}>
      <h1 style={{ fontSize: 30, textAlign: "center", marginBottom: 20 }}>
        Our Best Selling Products
      </h1>
      <Row justify="center">
        {products?.slice(0, 4)?.map((product) => (
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
                    style={{ backgroundColor: primaryColor, borderRadius: 10 }}
                  >
                    Add To Cart
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
