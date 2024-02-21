"use client";

import StyledComponentsRegistry from "@/lib/AntdRegistry";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CustomRootLayout from "@/component/layout/RootLayout";

import "./globals.css";
import { ConfigProvider } from "antd";
import AlertVideoModal from "@/component/AlertVideoModal";
import { useState } from "react";

// export const metadata: Metadata = {
//   title: "Adil Foods BD",
//   description: "অর্গানিক খাদ্যের সমাহার",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState(true);

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
            <CustomRootLayout>{children}</CustomRootLayout>
          </ConfigProvider>
          <AlertVideoModal
            isModalOpen={isModalOpen}
            handleCancel={() => setIsModalOpen(false)}
          />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
