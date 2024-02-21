"use client";

import { Modal } from "antd";
import { useEffect, useState } from "react";
import { FacebookEmbed } from "react-social-media-embed";

export default function AlertVideoModal({ isModalOpen, handleCancel }: any) {
  const [isClient, setIsClient] = useState(false);
  const [index, setIndex] = useState(0);

  const videos = [
    "https://www.facebook.com/adilfood/videos/3672837609704014",
    "https://www.facebook.com/adilfood/videos/872236184374751/",
    "https://www.facebook.com/100085933763432/videos/755660086424755",
    "https://www.facebook.com/100085933763432/videos/1089688089147874",
    "https://facebook.com/100085933763432/videos/7153958487965310",
    "https://www.facebook.com/100085933763432/videos/1053780352455047",
    "",
  ];

  useEffect(() => {
    setIsClient(true);

    const index = Math.floor(Math.random() * 7);

    if (index > 0 && index <= videos.length) {
      setIndex(index);
    }
  }, []);

  return (
    isClient && (
      <>
        <Modal
          style={{ position: "relative", zIndex: 9999 }}
          open={isModalOpen}
          onOk={handleCancel}
          onCancel={handleCancel}
        >
          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <FacebookEmbed url={videos[index]} width={"100%"} />
          </div>
        </Modal>
      </>
    )
  );
}
