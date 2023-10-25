import React from "react";
import { Menu } from "antd";
import Link from "next/link";
import { primaryColor } from "@/utils/color";

const MenuItems = () => {
  const menuItems = [
    {
      key: "1",
      label: "Home",
    },
  ];
  return (
    <Menu
      mode="horizontal"
      defaultSelectedKeys={["2"]}
      items={menuItems}
      style={{ width: "100%", backgroundColor: primaryColor, color: "#fff" }}
    />
  );
};

export default MenuItems;
