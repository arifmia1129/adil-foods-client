import { Button, Col, Input, Row } from "antd";
import {
  FacebookOutlined,
  YoutubeOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
export default function CustomFooter() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: 50,
      }}
    >
      <Row style={{ width: "100%" }}>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Row style={{ width: "100%" }} justify="center">
            <div>
              <h2 style={{ fontSize: 30 }}>Our Office</h2>
              <h3 style={{ textAlign: "center", color: "gray" }}>
                Bogura, Bangladesh
              </h3>
              <iframe
                style={{ width: "80vw", height: "30vh", maxWidth: 1280 }}
                scrolling="no"
                src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Bogra,%20Bangladesh+(Adil%20Foods)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <Row style={{ width: "100vw" }} justify={"center"}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div>
                <h2>Stay Connected</h2>
                <Row justify={"center"}>
                  <Col>
                    <FacebookOutlined style={{ fontSize: 32, padding: 5 }} />
                  </Col>
                  <Col>
                    <YoutubeOutlined style={{ fontSize: 32, padding: 5 }} />
                  </Col>
                  <Col>
                    <TwitterOutlined style={{ fontSize: 32, padding: 5 }} />
                  </Col>
                </Row>
                <p style={{ marginBottom: 10 }}>
                  Adil Foods &copy; 2023-{new Date().getFullYear()}
                </p>
              </div>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
