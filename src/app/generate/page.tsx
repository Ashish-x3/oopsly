"use client";

import { useState } from "react";
import BuilderSidebar from "../components/BuilderSidebar";
import TopBar from "../components/TopBar";
import StatusPreview from "../components/StatusPreview";

export default function GeneratePage() {
  const [title, setTitle] = useState<string>("Oops! Page Not Found");
  const [message, setMessage] = useState<string>(
    "The page you're looking for doesn't exist or has been moved."
  );
  const [emoji, setEmoji] = useState<string>("😿");
  const [animate, setAnimate] = useState<boolean>(false);
  const [bgColor, setBgColor] = useState<string>("bg-white");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <TopBar />
      <div className="flex flex-col md:flex-row flex-1">
        <BuilderSidebar
          title={title}
          setTitle={setTitle}
          message={message}
          setMessage={setMessage}
          setEmoji={setEmoji}
          animate={animate}
          setAnimate={setAnimate}
          background={bgColor}
          setBackground={setBgColor}
        />

        <StatusPreview
          title={title}
          message={message}
          emoji={emoji}
          animate={animate}
          background={bgColor}
        />
      </div>
    </div>
  );
}
