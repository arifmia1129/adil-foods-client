import { Col, Row } from "antd";
import { primaryColor } from "@/utils/color";

const TopHeader = () => {
  return (
    <Row
      style={{
        minWidth: "100%",
        backgroundColor: primaryColor,
        height: "100%",
        padding: 10,
        color: "#fff",
        fontWeight: "bold",
      }}
      justify="center"
      align="middle"
    >
      <Col xs={24} sm={24} md={8} lg={8}>
        <h3 style={{ textAlign: "center" }}>Contact with us: 01740388925</h3>
      </Col>
      <Col xs={24} sm={24} md={8} lg={8}>
        <h3 style={{ textAlign: "center" }}>Best Food, Healthy Life..</h3>
      </Col>
      <Col xs={24} sm={24} md={8} lg={8}>
        <h3 style={{ textAlign: "center" }}>Visit our Facebook</h3>
      </Col>
    </Row>
  );
};

export default TopHeader;
