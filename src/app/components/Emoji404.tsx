"use client";

import { useRouter } from "next/navigation";

export default function Emoji404({
  title,
  message,
  emoji,
  emojiAnim,
  bgColor,
}: {
  title: string;
  message: string;
  emoji: string;
  emojiAnim?: string;
  bgColor?: string;
}) {
  const router = useRouter();

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${bgColor || "bg-white"} p-4`}>
      <div className={`text-7xl ${emojiAnim || ""}`}>{emoji}</div>
      <h1 className="text-3xl font-bold mt-4">{title}</h1>
      <p className="text-lg text-gray-700 mt-2 text-center max-w-md">{message}</p>

      <button
        onClick={() => router.push("/generate")}
        className="mt-6 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
      >
        Back to Generator
      </button>
    </div>
  );
}
