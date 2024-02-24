"use client";

import React, { useContext } from "react";
import { MainContext } from "../layout";
import { Avatar, Button, Col, Row, Table } from "antd";
import { handleStoreRemoveProduct, quantityChange } from "@/utils/functions";

export default function cart() {
  const { storedProducts, isLoading, handleRetrievedStoredProducts } =
    useContext(MainContext);

  const columns = [
    {
      title: "Item",
      render: (data: any) => {
        return (
          <Row align={"middle"}>
            <Col>
              <Avatar
                size={64}
                src={<img src={data?.imageUrl} alt="avatar" />}
              />
            </Col>
            <Col>
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
            <Col>
              <Button
                onClick={() => {
                  quantityChange("decrease", data?.id);
                  handleRetrievedStoredProducts();
                }}
              >
                <p>-</p>
              </Button>
            </Col>
            <Col>
              <p style={{ marginLeft: 10, marginRight: 10 }}>
                {data?.quantity}
              </p>
            </Col>
            <Col>
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
  );
}