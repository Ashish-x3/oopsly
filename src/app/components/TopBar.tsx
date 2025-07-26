"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface TopBarProps {
  title: string;
  message: string;
  emoji: string;
  animate: boolean;
  background: string;
  isFullscreen: boolean; // 🆕
  setIsFullscreen: (value: boolean) => void; // 🆕
}

export default function TopBar({
  title,
  message,
  emoji,
  animate,
  background,
  isFullscreen,
  setIsFullscreen
}: TopBarProps) {
  const [jsxCode, setJsxCode] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const code = `
<div className="flex flex-col items-center justify-center h-screen text-center space-y-4 ${
      animate ? "animate-bounce" : ""
    }" style={{ background: "${background}" }}>
  <div className="text-6xl">${emoji}</div>
  <h1 className="text-3xl font-bold">${title}</h1>
  <p className="text-lg">${message}</p>
</div>
    `.trim();
    setJsxCode(code);
  }, [title, message, emoji, animate, background]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(jsxCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <header className="w-full px-4 py-3 border-b flex items-center justify-between bg-white rounded-t-2xl">
      <h1 className="text-xl font-semibold">Oopsly Builder</h1>

      <div className="flex gap-3">
        <Dialog>
          <DialogTrigger asChild>
            <button className="text-sm px-3 py-1 rounded-md bg-black text-white hover:bg-gray-800">
              Export JSX
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Export JSX</DialogTitle>
            </DialogHeader>

            <textarea
              readOnly
              value={jsxCode}
              className="w-full h-64 p-3 border rounded-md font-mono text-sm bg-gray-100"
            />

            <div className="flex justify-end items-center mt-3 gap-3">
              {copied && (
                <span className="text-green-600 text-sm font-medium transition-opacity duration-300">
                 ✅ Copied!
                </span>
              )}
              <button
                onClick={copyToClipboard}
                className="text-sm px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800"
              >
                Copy to Clipboard
              </button>
            </div>
          </DialogContent>
        </Dialog>

        <button
  onClick={() => setIsFullscreen(!isFullscreen)}
  className="text-sm px-3 py-1 rounded-md border hover:bg-gray-100"
>
  {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
</button>

      </div>
    </header>
  );
}
