import React from "react";
import { Menu } from "antd";
import Link from "next/link";

const MenuItems = () => {
  const menuItems = [
    {
      key: "1",
      label: "Home",
    },
  ];
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["2"]}
      items={menuItems}
      style={{ width: "100%" }}
    />
  );
};

export default MenuItems;
