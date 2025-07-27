import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { Dispatch, SetStateAction, useState } from "react";
import { motion, Variants } from "framer-motion";
import presets from "@/app/_data/presets.json";

interface BuilderSidebarProps {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  setEmoji: Dispatch<SetStateAction<string>>;
  background: string;
  setBackground: Dispatch<SetStateAction<string>>;
  showButton: boolean;
  setShowButton: Dispatch<SetStateAction<boolean>>;
  buttonText: string;
  setButtonText: Dispatch<SetStateAction<string>>;
}

export default function BuilderSidebar({
  title,
  setTitle,
  message,
  setMessage,
  setEmoji,
  background,
  setBackground,
  showButton,
  setShowButton,
  buttonText,
  setButtonText,
}: BuilderSidebarProps) {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const palettes = [
    "bg-white", "bg-gray-100", "bg-yellow-100",
    "bg-blue-100", "bg-pink-100", "bg-green-100",
    "bg-purple-100", "bg-red-100", "bg-indigo-100",
    "bg-orange-100", "bg-teal-100", "bg-lime-100",
    "bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100",
    "bg-gradient-to-r from-yellow-100 via-red-100 to-pink-100",
    "bg-gradient-to-bl from-indigo-100 via-blue-100 to-teal-100"
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const errorEmojis = ["😿", "🤖", "🧐", "🔍", "🤔", "🚧", "🤷", "🧭", "❓", "💔", "⚠️", "🚨"];

  return (
    <motion.aside
      className="w-full max-w-sm bg-white border-r border-black p-4 space-y-6 shadow-sm"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Presets Dropdown */}
      <motion.div variants={itemVariants} className="mb-4">
        <label className="text-sm font-semibold text-gray-800 mb-2 block">Presets</label>
        <select
          onChange={(e) => {
            const selected = presets.find(p => p.id === e.target.value);
            if (selected) {
              setTitle(selected.title);
              setMessage(selected.message);
              setEmoji(selected.emoji);
              setBackground(selected.background);
              setShowButton(selected.showButton);
              setButtonText(selected.buttonText);
            }
          }}
          defaultValue=""
          className="w-full p-3 border border-black rounded-lg bg-white text-sm"
        >
          {presets.map((preset) => (
            <option key={preset.id} value={preset.id}>
              {preset.name}
            </option>
          ))}
        </select>
      </motion.div>

      {/* Title */}
      <motion.div variants={itemVariants} className="mb-2">
        <label className="text-sm font-semibold text-gray-800 mb-2 block">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your 404 title..."
          className="w-full p-3 border border-black rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
        />
        <div className="text-xs text-gray-500 mt-1 text-right">
          {title.length}/60
        </div>
      </motion.div>

      {/* Message */}
      <motion.div variants={itemVariants} className="mb-2">
        <label className="text-sm font-semibold text-gray-800 mb-2 block">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe what happened..."
          rows={3}
          className="w-full p-3 border border-black rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 resize-none"
        />
        <div className="text-xs text-gray-500 text-right">
          {message.length}/200
        </div>
      </motion.div>
      
      {/* Emoji Selector */}
      <motion.div variants={itemVariants}>
        <label className="text-sm font-semibold text-gray-800 mb-2 block">Emoji</label>
        <div className="grid grid-cols-6 gap-2 mb-3">
          {errorEmojis.map((e) => (
            <button
              key={e}
              onClick={() => setEmoji(e)}
              className="text-2xl p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {e}
            </button>
          ))}
        </div>
        <button
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          className="w-full p-2 text-sm border border-black rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          {showEmojiPicker ? "Hide Emoji Picker" : "Show More Emojis"}
        </button>
        {showEmojiPicker && (
          <div className="mt-3 border border-black rounded-lg overflow-hidden">
            <Picker data={data} onEmojiSelect={(e: { native: string }) => {
              setEmoji(e.native);
              setShowEmojiPicker(false);
            }} />
          </div>
        )}
      </motion.div>

      {/* ✨ FIX: Restored missing Button section */}
      <motion.div variants={itemVariants}>
        <label className="text-sm font-semibold text-gray-800 mb-3 block">Button</label>
        <div className="space-y-3">
          <label className="flex items-center gap-3">
            <input type="checkbox" checked={showButton} onChange={() => setShowButton(!showButton)} className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black" />
            <span className="text-sm text-gray-700">Show Back to Home button</span>
          </label>
          {showButton && (
            <input
              value={buttonText}
              onChange={(e) => setButtonText(e.target.value)}
              placeholder="Button text..."
              className="w-full p-3 border border-black rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
            />
          )}
        </div>
      </motion.div>

      {/* Backgrounds */}
      <motion.div variants={itemVariants}>
        <label className="text-sm font-semibold text-gray-800 mb-3 block">Background</label>
        <div className="grid grid-cols-6 gap-2">
          {palettes.map((p) => (
            <div
              key={p}
              onClick={() => setBackground(p)}
              className={`w-8 h-8 rounded-lg cursor-pointer border-2 border-black/20 hover:scale-105 transition-transform duration-200 ${background === p ? "ring-2 ring-black ring-offset-1" : ""} ${p.includes("gradient") ? p + " bg-cover" : p}`}
            />
          ))}
        </div>
      </motion.div>

      {/* Reset */}
      <motion.div variants={itemVariants} className="pt-4 border-t border-black">
        <button
           onClick={() => {
            setTitle("You've Found a Secret Place!");
            setMessage("This page doesn't exist, but at least you found this cool unicorn 🦄");
            setEmoji("🦄");
            setBackground("bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100");
            setShowButton(true);
            setButtonText("Back to Reality");
          }}
          className="w-full p-2 text-sm text-black border border-black rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          Reset to Default
        </button>
      </motion.div>
    </motion.aside>
  );
}
