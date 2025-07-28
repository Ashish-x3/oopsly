"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

interface TopBarProps {
  title: string;
  message: string;
  emoji: string;
  background: string;
  isFullscreen: boolean;
  setIsFullscreen: (value: boolean) => void;
  showButton: boolean;
  buttonText: string;
}

export default function TopBar({
  title,
  message,
  emoji,
  background,
  isFullscreen,
  setIsFullscreen,
  showButton,
  buttonText,
}: TopBarProps) {
  const [jsxBlockCode, setJsxBlockCode] = useState("");
  const [jsxComponentCode, setJsxComponentCode] = useState("");
  const [copied, setCopied] = useState<null | 'block' | 'component'>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const isCustomColor = background.startsWith("#");
    const bgStyle = isCustomColor ? `style={{ backgroundColor: "${background}" }}` : "";
    const bgClass = !isCustomColor ? ` ${background}` : "";

    const buttonHtml = showButton
      ? `\n    <a href="/" className="mt-8 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors shadow-md">\n      ${buttonText}\n    </a>`
      : "";

    const blockCode = `
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-4${bgClass}" ${bgStyle}>
          <div className="text-8xl md:text-9xl mb-6">${emoji}</div>
          <h1 className="text-3xl font-bold mt-4">${title}</h1>
          <p className="text-lg text-gray-600 mt-2">${message}</p>${buttonHtml}
        </div>
    `.trim();

    const componentCode = `
        import React from 'react';

        export default function NotFoundPage() {
          return (
            ${blockCode.replace(/\n/g, '\n    ')}
          );
        }
    `.trim();

    setJsxBlockCode(blockCode);
    setJsxComponentCode(componentCode);

  }, [title, message, emoji, background, showButton, buttonText]);

  const copyToClipboard = (type: 'block' | 'component') => {
    const codeToCopy = type === 'block' ? jsxBlockCode : jsxComponentCode;
    navigator.clipboard.writeText(codeToCopy).then(() => {
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <header className="w-full px-4 py-3 border-b border-black flex items-center justify-between bg-white rounded-t-2xl">
      <h1 className="text-xl font-semibold">Oopsly Builder</h1>

      <div className="flex gap-3">
        <Link href="/" className="text-sm px-3 py-1 rounded-md border border-black hover:bg-gray-100 flex items-center">
          Home
        </Link>
        <Link href="/about" className="text-sm px-3 py-1 rounded-md border border-black hover:bg-gray-100 flex items-center">
          About
        </Link>
        <button
          onClick={() => setIsFullscreen(!isFullscreen)}
          className="text-sm px-3 py-1 rounded-md border border-black hover:bg-gray-100"
        >
          {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
        </button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button className="text-sm px-3 py-1 rounded-md bg-black text-white hover:bg-gray-800">
              Export
            </button>
          </DialogTrigger>
          <AnimatePresence>
            {open && (
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Export Your Component</DialogTitle>
                </DialogHeader>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <p className="text-sm text-gray-600 mb-4 py-2">
                    Copy the full React component or just the JSX block to use in your project.
                  </p>
                  <textarea
                    readOnly
                    value={jsxComponentCode}
                    className="w-full h-64 p-4 border border-black/10 bg-gray-50 rounded-lg font-mono text-xs focus:ring-2 focus:ring-black"
                  />
                  {/* ✨ Added a note about Tailwind CSS dependency */}
                  <p className="text-xs text-gray-800 mt-2">
                    Note: This code uses Tailwind CSS classes for styling.
                  </p>
                  <div className="flex justify-end items-center mt-4 gap-3">
                    <button
                      onClick={() => copyToClipboard('block')}
                      className="text-sm px-4 py-2 rounded-md border border-black hover:bg-gray-100 transition-colors"
                    >
                      {copied === 'block' ? "Copied!" : "Copy Block"}
                    </button>
                    <button
                      onClick={() => copyToClipboard('component')}
                      className="text-sm px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800 transition-colors"
                    >
                      {copied === 'component' ? "Copied!" : "Copy Component"}
                    </button>
                  </div>
                </motion.div>
              </DialogContent>
            )}
          </AnimatePresence>
        </Dialog>
      </div>
    </header>
  );
}
