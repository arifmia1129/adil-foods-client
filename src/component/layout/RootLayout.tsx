"use client";

import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import MenuItems from "../Menu/MenuItems";
import TopHeader from "../TopHeader";
import BrandAndAccount from "../BrandAndAccount";
import { primaryColor } from "@/utils/color";

const { Header, Content, Footer } = Layout;

const CustomRootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout className="layout">
      <TopHeader />
      <BrandAndAccount />
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 100,
          backgroundColor: primaryColor,
        }}
      >
        <div className="demo-logo" />
        <MenuItems />
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        {new Date().getFullYear()} &copy; All rights reserved by Adil Foods BD
      </Footer>
    </Layout>
  );
};

export default CustomRootLayout;
