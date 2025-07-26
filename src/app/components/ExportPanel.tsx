"use client";
import { useState } from "react";

interface ExportPanelProps {
  title: string;
  message: string;
  emoji: string;
  animate: boolean;
  background: string;
}

export default function ExportPanel({
  title,
  message,
  emoji,
  animate,
  background,
}: ExportPanelProps) {
  const [copied, setCopied] = useState(false);

  const jsxCode = `
<div className="min-h-screen flex flex-col items-center justify-center ${background} p-8 text-center">
  <div className="text-6xl ${animate ? "animate-bounce" : ""}">${emoji}</div>
  <h1 className="text-3xl font-bold mt-4">${title}</h1>
  <p className="text-gray-600 mt-2">${message}</p>
</div>
`.trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(jsxCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-6 border-t pt-4 px-4">
      <p className="text-sm font-medium mb-2">Export JSX</p>
      <pre className="bg-gray-100 rounded-md p-3 text-xs overflow-x-auto whitespace-pre-wrap">
        {jsxCode}
      </pre>
      <button
        onClick={handleCopy}
        className="mt-3 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
      >
        {copied ? "Copied!" : "Copy JSX"}
      </button>
    </div>
  );
}
