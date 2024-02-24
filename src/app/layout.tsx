"use client";

import StyledComponentsRegistry from "@/lib/AntdRegistry";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CustomRootLayout from "@/component/layout/RootLayout";

import "./globals.css";
import { ConfigProvider } from "antd";
import AlertVideoModal from "@/component/AlertVideoModal";
import { createContext, useEffect, useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { primaryColor } from "@/utils/color";
import Link from "next/link";

// export const metadata: Metadata = {
//   title: "Adil Foods BD",
//   description: "অর্গানিক খাদ্যের সমাহার",
// };

export const MainContext = createContext<any>({});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [storedProducts, setStoredProducts] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleRetrievedStoredProducts = () => {
    setIsLoading(true);
    try {
      if (typeof window !== "undefined") {
        const products = localStorage.getItem("cart");

        if (products) {
          const parsedProducts = JSON.parse(products);

          if (Array.isArray(parsedProducts) && parsedProducts.length) {
            setStoredProducts(parsedProducts);
          }
        }
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleRetrievedStoredProducts();
  }, []);

  const value = {
    handleRetrievedStoredProducts,
    storedProducts,
    isLoading,
  };

  return (
    <html lang="en">
      <body
        style={{
          maxWidth: "99vw",
          marginLeft: "auto",
          marginRight: "auto",
          overflowX: "hidden",
        }}
      >
        <StyledComponentsRegistry>
          <ConfigProvider
            theme={{
              token: {
                // Seed Token
                colorPrimary: "#00b96b",
                borderRadius: 2,

                // Alias Token
                colorBgContainer: "#f6ffed",
              },
            }}
          >
            <MainContext.Provider value={value as any}>
              <CustomRootLayout>{children}</CustomRootLayout>
            </MainContext.Provider>
          </ConfigProvider>
          {/* <AlertVideoModal
            isModalOpen={isModalOpen}
            handleCancel={() => setIsModalOpen(false)}
          /> */}
          <Link href={"/cart"}>
            <div
              style={{
                position: "fixed",
                bottom: 50,
                right: 50,
                zIndex: 9999,
                backgroundColor: primaryColor,
                padding: 10,
                borderRadius: "100%",
                width: 70,
                height: 70,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  position: "absolute",
                  right: 10,
                  top: 10,
                  color: "#fff",
                }}
              >
                {storedProducts?.length}
              </p>
              <ShoppingCartOutlined
                style={{ fontSize: 32, padding: 5, color: "#fff" }}
              />
            </div>
          </Link>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
