import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { Dispatch, SetStateAction, useState } from "react";

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
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [animationType, setAnimationType] = useState("bounce");

  const palettes = [
    "bg-gray-100", "bg-white", "bg-yellow-100",
    "bg-blue-100", "bg-pink-100", "bg-green-100",
    "bg-purple-100", "bg-red-100", "bg-indigo-100",
    "bg-orange-100", "bg-teal-100", "bg-lime-100",
  ];

  const gradients = [
    "bg-gradient-to-br from-blue-50 to-indigo-100",
    "bg-gradient-to-br from-pink-50 to-rose-100", 
    "bg-gradient-to-br from-yellow-50 to-orange-100",
    "bg-gradient-to-br from-green-50 to-emerald-100",
    "bg-gradient-to-br from-purple-50 to-violet-100",
    "bg-gradient-to-br from-gray-50 to-slate-100",
  ];

  const animations = [
    { name: "Bounce", value: "animate-bounce" },
    { name: "Pulse", value: "animate-pulse" },
    { name: "Ping", value: "animate-ping" },
    { name: "Spin", value: "animate-spin" },
    { name: "Wiggle", value: "animate-wiggle" },
    { name: "Float", value: "animate-float" },
  ];

  const templates = [
    {
      name: "Friendly",
      emoji: "😊",
      title: "Oops! You're lost",
      message: "Don't worry, it happens to the best of us. Let's get you back on track!",
      bg: "bg-blue-100"
    },
    {
      name: "Funny",
      emoji: "🤖",
      title: "404: Page.exe not found",
      message: "Our robots are working hard to fix this. Please try turning it off and on again.",
      bg: "bg-purple-100"
    },
    {
      name: "Professional",
      emoji: "📋",
      title: "Page Not Found",
      message: "The requested page could not be located. Please check the URL and try again.",
      bg: "bg-gray-100"
    },
    {
      name: "Creative",
      emoji: "🎨",
      title: "Looks like you found our secret void!",
      message: "This page is playing hide and seek. Want to go back and try again?",
      bg: "bg-pink-100"
    }
  ];

  const loadTemplate = (template: typeof templates[0]) => {
    setEmoji(template.emoji);
    setTitle(template.title);
    setMessage(template.message);
    setBackground(template.bg);
  };

  return (
    <aside className="w-full max-w-sm bg-white border-r p-4 space-y-6 shadow-sm h-full overflow-y-auto">
      
      {/* Templates */}
      <div>
        <label className="text-sm font-semibold text-gray-800 mb-3 block">Quick Templates</label>
        <div className="grid grid-cols-2 gap-2">
          {templates.map((template) => (
            <button
              key={template.name}
              onClick={() => loadTemplate(template)}
              className="p-3 text-left border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all duration-200 group"
            >
              <div className="text-lg mb-1">{template.emoji}</div>
              <div className="text-xs font-medium text-gray-700 group-hover:text-gray-900">
                {template.name}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Title */}
      <div>
        <label className="text-sm font-semibold text-gray-800 mb-2 block">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your 404 title..."
          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        />
        <div className="text-xs text-gray-500 mt-1">
          {title.length}/60 characters
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="text-sm font-semibold text-gray-800 mb-2 block">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe what happened..."
          rows={3}
          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
        />
        <div className="text-xs text-gray-500 mt-1">
          {message.length}/200 characters
        </div>
      </div>

      {/* Background Colors */}
      <div>
        <label className="text-sm font-semibold text-gray-800 mb-3 block">Background</label>
        
        {/* Solid Colors */}
        <div className="mb-3">
          <div className="text-xs text-gray-600 mb-2">Solid Colors</div>
          <div className="grid grid-cols-6 gap-2">
            {palettes.map((p) => (
              <button
                key={p}
                onClick={() => setBackground(p)}
                className={`${p} w-8 h-8 rounded-lg cursor-pointer border-2 hover:scale-105 transition-transform duration-200 ${
                  background === p ? "ring-2 ring-blue-500 ring-offset-1" : "border-gray-200"
                }`}
                title={p.replace('bg-', '').replace('-100', '')}
              />
            ))}
          </div>
        </div>

        {/* Gradients */}
        <div>
          <div className="text-xs text-gray-600 mb-2">Gradients</div>
          <div className="grid grid-cols-3 gap-2">
            {gradients.map((g) => (
              <button
                key={g}
                onClick={() => setBackground(g)}
                className={`${g} w-full h-8 rounded-lg cursor-pointer border-2 hover:scale-105 transition-transform duration-200 ${
                  background === g ? "ring-2 ring-blue-500 ring-offset-1" : "border-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Emoji Selection */}
      <div>
        <label className="text-sm font-semibold text-gray-800 mb-2 block">Emoji</label>
        
        {/* Quick Emoji Options */}
        <div className="grid grid-cols-6 gap-2 mb-3">
          {["😿", "🤖", "😊", "🎨", "📋", "🚀", "🎯", "🎪", "🎮", "💔", "🔍", "⚠️"].map((e) => (
            <button
              key={e}
              onClick={() => setEmoji(e)}
              className="text-2xl p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {e}
            </button>
          ))}
        </div>

        {/* Emoji Picker Toggle */}
        <button
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          className="w-full p-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
        >
          {showEmojiPicker ? "Hide Emoji Picker" : "Show More Emojis"}
        </button>

        {showEmojiPicker && (
          <div className="mt-3 border border-gray-200 rounded-lg overflow-hidden">
            <Picker
              data={data}
              onEmojiSelect={(e: { native: string }) => {
                setEmoji(e.native);
                setShowEmojiPicker(false);
              }}
              theme="light"
              set="native"
              previewPosition="none"
              skinTonePosition="none"
            />
          </div>
        )}
      </div>

      {/* Animation */}
      <div>
        <label className="text-sm font-semibold text-gray-800 mb-3 block">Animation</label>
        
        <div className="space-y-3">
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={animate}
              onChange={() => setAnimate(!animate)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">Enable Animation</span>
          </label>

          {animate && (
            <div>
              <div className="text-xs text-gray-600 mb-2">Animation Type</div>
              <div className="grid grid-cols-2 gap-2">
                {animations.map((anim) => (
                  <button
                    key={anim.name}
                    onClick={() => setAnimationType(anim.value)}
                    className={`p-2 text-xs border rounded-lg transition-all duration-200 ${
                      animationType === anim.value
                        ? "bg-blue-100 border-blue-300 text-blue-800"
                        : "border-gray-200 hover:border-gray-300 text-gray-700"
                    }`}
                  >
                    {anim.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Reset Button */}
      <div className="pt-4 border-t border-gray-200">
        <button
          onClick={() => {
            setTitle("Oops! Page Not Found");
            setMessage("The page you're looking for doesn't exist or has been moved.");
            setEmoji("😿");
            setBackground("bg-white");
            setAnimate(false);
            setAnimationType("bounce");
          }}
          className="w-full p-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
        >
          Reset to Default
        </button>
      </div>
    </aside>
  );
}