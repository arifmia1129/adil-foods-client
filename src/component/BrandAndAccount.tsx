import { Col, Row } from "antd";
import logo from "../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import Search from "antd/es/input/Search";
import {
  UserOutlined,
  QuestionCircleOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";

const BrandAndAccount = () => {
  return (
    <Row
      align="middle"
      justify="center"
      style={{ padding: "0 10px" }}
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
    >
      <Col className="gutter-row" lg={4} md={8} sm={24}>
        <Link href="/">
          <Image src={logo} alt="" width={100} height={100} />
        </Link>
      </Col>
      <Col className="gutter-row" lg={8} md={8} sm={24}>
        <Search
          placeholder="Search anything"
          allowClear
          //   onSearch={onSearch}
          size="large"
        />
      </Col>
      <Col className="gutter-row" lg={12} md={8} sm={24}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col
            lg={7}
            style={{
              border: "2px solid gray",
              padding: 2,
              borderRadius: 10,
              margin: "5px",
            }}
          >
            <Link href="/">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <UserOutlined height={500} width={500} />
              </div>
              <h4 style={{ textAlign: "center" }}>My Account</h4>
            </Link>
          </Col>
          <Col
            lg={7}
            style={{
              border: "2px solid gray",
              padding: 2,
              borderRadius: 10,
              margin: "5px",
            }}
          >
            <Link href="/">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <QuestionCircleOutlined />
              </div>
              <h4 style={{ textAlign: "center" }}>Customer Help</h4>
            </Link>
          </Col>
          <Col
            lg={7}
            style={{
              border: "2px solid gray",
              padding: 2,
              borderRadius: 10,
              margin: "5px",
            }}
          >
            <Link href="/">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <RightCircleOutlined />
              </div>
              <h4 style={{ textAlign: "center" }}>Checkout</h4>
            </Link>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default BrandAndAccount;
