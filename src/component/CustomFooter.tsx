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
        marginTop: 200,
      }}
    >
      <Row>
        <Col xs={24} sm={24} md={12} lg={8}>
          <Row style={{ width: "100%" }} justify="center">
            <div>
              <h2>OUR OFFICE</h2>
              <iframe
                style={{ width: "100%", height: 300 }}
                id="gmap_canvas"
                src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Dhaka+(Gaibandha)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              />
              <h3 style={{ textAlign: "start", color: "gray" }}>01740388925</h3>
              <h3 style={{ textAlign: "start", color: "gray" }}>
                Bogura, Bangladesh
              </h3>
            </div>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
              <h2>SUBSCRIBE US</h2>
              <p style={{ textAlign: "start", color: "gray" }}>
                If you interested to contact us for any reason. Fill free write
                us with
              </p>
              <h3 style={{ textAlign: "start", color: "gray" }}>
                adilfood@gmail.com
              </h3>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
              <h2>SAY HELLO</h2>
              <Row>
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
              <div style={{ margin: "20px", width: "100%" }}>
                <Input placeholder="Write your email" />
                <Row style={{ marginTop: 10 }}>
                  <Button type="primary" size="large">
                    Send
                  </Button>
                </Row>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
