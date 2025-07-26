import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { Dispatch, SetStateAction } from "react";

interface BuilderSidebarProps {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  setEmoji: Dispatch<SetStateAction<string>>;
  animate: boolean;
  setAnimate: Dispatch<SetStateAction<boolean>>;
  background: string;
  setBackground: Dispatch<SetStateAction<string>>;
}

export default function BuilderSidebar({
  title,
  setTitle,
  message,
  setMessage,
  setEmoji,
  animate,
  setAnimate,
  background,
  setBackground,
}: BuilderSidebarProps) {
  const palettes = [
    "bg-gray-100",
    "bg-white",
    "bg-yellow-100",
    "bg-blue-100",
    "bg-pink-100",
    "bg-green-100",
  ];

  return (
    <aside className="w-full max-w-sm bg-white border-r p-4 space-y-5">
      <div>
        <label className="text-sm font-medium">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mt-1 p-2 border rounded-md"
        />
      </div>

      <div>
        <label className="text-sm font-medium">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full mt-1 p-2 border rounded-md"
        />
      </div>

      <div>
        <label className="text-sm font-medium">Emoji</label>
        <div className="mt-1">
          <Picker
            data={data}
            onEmojiSelect={(e: { native: string }) => setEmoji(e.native)}
            theme="light"
          />
        </div>
        <div className="mt-2">
          <label className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              checked={animate}
              onChange={() => setAnimate(!animate)}
            />
            Animate Emoji
          </label>
        </div>
      </div>

      <div>
        <label className="text-sm font-medium">Background</label>
        <div className="flex gap-2 mt-2">
          {palettes.map((p) => (
            <button
              key={p}
              onClick={() => setBackground(p)}
              className={`${p} w-8 h-8 rounded-full border ${
                background === p ? "ring-2 ring-black" : ""
              }`}
            ></button>
          ))}
        </div>
      </div>
    </aside>
  );
}
