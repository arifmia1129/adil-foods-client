"use client";

import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import MenuItems from "../Menu/MenuItems";
import TopHeader from "../TopHeader";
import BrandAndAccount from "../BrandAndAccount";
import { primaryColor } from "@/utils/color";
import CustomFooter from "../CustomFooter";
import Marquee from "react-fast-marquee";

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
      <Marquee
        gradient={false}
        style={{ position: "sticky", top: 0, zIndex: 9999 }}
      >
        <p>
          প্রিয় আদিল ফুডস এর শুভাকাঙ্খী, আপনাদের সেবার মান কে উন্নয়নের লক্ষ্যে
          আমরা ওয়েবসাইট তৈরির কাজ করে যাচ্ছি....। খুব শীঘ্রই সকল ফিচার আপডেট করা
          হবে। আদিল ফুডস এর সঙ্গে থাকার জন্য আন্তরিক ধন্যবাদ।
        </p>
      </Marquee>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">{children}</div>
      </Content>
      <CustomFooter />
    </Layout>
  );
};

export default CustomRootLayout;
