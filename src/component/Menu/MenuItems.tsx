import React from "react";
import { Menu } from "antd";
import Link from "next/link";
import { primaryColor } from "@/utils/color";

const MenuItems = () => {
  const menuItems = [
    {
      key: "/",
      label: "Home",
    },
  ];
  return (
    <Menu
      mode="horizontal"
      defaultSelectedKeys={["home"]}
      style={{ width: "100%" }}
    >
      <Menu.Item key="home">
        <Link href={"/"}>Home</Link>
      </Menu.Item>
      <Menu.Item key="cart">
        <Link href={"/cart"}>Cart</Link>
      </Menu.Item>
    </Menu>
  );
};

export default MenuItems;
