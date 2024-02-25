"use client";

import React, { useContext, useState } from "react";
import { MainContext } from "../layout";
import { Avatar, Button, Col, Input, Row, Select, Table } from "antd";
import { handleStoreRemoveProduct, quantityChange } from "@/utils/functions";

export default function Cart() {
  const [isDeliveryInfo, setIsDeliveryInfo] = useState(false);

  const { storedProducts, isLoading, handleRetrievedStoredProducts } =
    useContext(MainContext);

  const columns = [
    {
      title: "Item",
      render: (data: any) => {
        return (
          <Row align={"middle"}>
            <Col style={{ marginBottom: 10 }}>
              <Avatar
                size={64}
                src={<img src={data?.imageUrl} alt="avatar" />}
              />
            </Col>
            <Col style={{ marginBottom: 10 }}>
              <p style={{ marginLeft: 10 }}>{data?.name}</p>
            </Col>
          </Row>
        );
      },
    },
    {
      title: "Price",
      render: (data: any) => {
        return data?.price;
      },
    },
    {
      title: "Quantity",
      render: (data: any) => {
        return (
          <Row align={"middle"}>
            <Col style={{ marginBottom: 10 }}>
              <Button
                onClick={() => {
                  quantityChange("decrease", data?.id);
                  handleRetrievedStoredProducts();
                }}
              >
                <p>-</p>
              </Button>
            </Col>
            <Col style={{ marginBottom: 10 }}>
              <p style={{ marginLeft: 10, marginRight: 10 }}>
                {data?.quantity}
              </p>
            </Col>
            <Col style={{ marginBottom: 10 }}>
              <Button
                onClick={() => {
                  quantityChange("increase", data?.id);
                  handleRetrievedStoredProducts();
                }}
              >
                <p>+</p>
              </Button>
            </Col>
          </Row>
        );
      },
    },
    {
      title: "Total Price",
      render: (data: any) => {
        return Number(data?.price) * Number(data?.quantity);
      },
    },
    {
      title: "Action",
      render: (data: any) => {
        return (
          <>
            <Button
              onClick={() => {
                handleStoreRemoveProduct(data);
                // isProductStored(product);
                handleRetrievedStoredProducts();
              }}
              style={{ margin: "5px" }}
              type="primary"
              danger
            >
              <p style={{ color: "#fff" }}>Remove</p>
            </Button>
          </>
        );
      },
    },
  ];

  const totalPrice = storedProducts?.reduce((acc: number, current: any) => {
    return acc + Number(current?.price) * Number(current?.quantity);
  }, 0);

  return (
    <div
      style={{
        maxWidth: 1280,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 20,
      }}
    >
      {!isDeliveryInfo ? (
        <div>
          <p style={{ fontSize: 30, textAlign: "center", marginBottom: 20 }}>
            You have added total {storedProducts?.length} items on cart
          </p>
          <Table
            scroll={{ x: 700 }}
            sticky
            loading={isLoading}
            columns={columns}
            dataSource={storedProducts}
            pagination={false}
          />

          <div style={{ borderTop: "2px solid gray" }}>
            <div
              style={{
                maxWidth: 820,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p>Items total:</p>
                <p>Delivery:</p>
                <p style={{ fontSize: 16, fontWeight: "bold" }}>Total:</p>
              </div>
              <div>
                <p style={{ textAlign: "right" }}>{totalPrice}</p>
                <p style={{ textAlign: "right" }}>{100}</p>
                <p style={{ textAlign: "right" }}>{totalPrice + 100}</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {isDeliveryInfo ? (
        <div>
          <p
            style={{
              fontSize: 30,
              textAlign: "center",
              marginBottom: 10,
              marginTop: 30,
            }}
          >
            Your delivery information
          </p>
          <Row gutter={20}>
            <Col style={{ marginBottom: 10 }} xs={24} sm={24} md={12} lg={8}>
              <label htmlFor="name">Name</label>
              <Input placeholder="Write your name" />
            </Col>
            <Col style={{ marginBottom: 10 }} xs={24} sm={24} md={12} lg={8}>
              <label htmlFor="phone">Phone</label>
              <Input placeholder="Write your phone number" />
            </Col>
            <Col style={{ marginBottom: 10 }} xs={24} sm={24} md={12} lg={8}>
              <label htmlFor="email">Email</label>
              <Input placeholder="Write your email" />
            </Col>
            <Col style={{ marginBottom: 10 }} xs={24} sm={24} md={12} lg={8}>
              <label htmlFor="payment-method">Payment Method</label>
              <Select
                defaultValue="bkash"
                style={{ width: "100%" }}
                // onChange={handleChange}
                options={[
                  { value: "bkash", label: "Bkash" },
                  { value: "rocket", label: "Rocket" },
                  { value: "nagad", label: "Nagad" },
                  { value: "cod", label: "Cash on delivery" },
                ]}
              />
            </Col>
            <Col style={{ marginBottom: 10 }} xs={24} sm={24} md={12} lg={8}>
              <label htmlFor="tnx">Transaction ID</label>
              <Input placeholder="Write your transaction ID" />
            </Col>
            <Col style={{ marginBottom: 10 }} xs={24} sm={24} md={12} lg={8}>
              <label htmlFor="address">Address</label>
              <Input placeholder="Write your address here" />
            </Col>
          </Row>
        </div>
      ) : null}

      <Row justify={"center"}>
        <Button
          onClick={() => {
            if (!isDeliveryInfo) {
              setIsDeliveryInfo(true);
            }
          }}
          style={{ marginTop: 50 }}
          type="primary"
        >
          {!isDeliveryInfo ? "Next" : "Submit"}
        </Button>
      </Row>
    </div>
  );
}
