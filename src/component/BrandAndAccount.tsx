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
    <Row style={{ padding: 10 }} align="middle" justify="center">
      <Col xs={12} sm={12} md={8} lg={8}>
        <Link href="/">
          <Image src={logo} alt="" width={100} height={100} />
        </Link>
      </Col>
      <Col xs={12} sm={12} md={8} lg={8}>
        <Search
          placeholder="Search anything"
          allowClear
          //   onSearch={onSearch}
          size="large"
        />
      </Col>
      <Col xs={24} sm={24} md={8} lg={8}>
        <Row align="middle">
          <Col span={8}>
            <Link href="/">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <UserOutlined style={{ fontSize: 30, color: "black" }} />
              </div>
              <h3 style={{ textAlign: "center", color: "black" }}>
                My Account
              </h3>
            </Link>
          </Col>
          <Col span={8}>
            <Link href="/">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <QuestionCircleOutlined
                  style={{ fontSize: 30, color: "black" }}
                />
              </div>
              <h3 style={{ textAlign: "center", color: "black" }}>
                Customer Help
              </h3>
            </Link>
          </Col>
          <Col span={8}>
            <Link href="/">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <RightCircleOutlined style={{ fontSize: 30, color: "black" }} />
              </div>
              <h3 style={{ textAlign: "center", color: "black" }}>Checkout</h3>
            </Link>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default BrandAndAccount;
