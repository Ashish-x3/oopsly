"use client";

import { useState } from "react";
import BuilderSidebar from "../components/BuilderSidebar";
import TopBar from "../components/TopBar";
import StatusPreview from "../components/StatusPreview";

export default function GeneratePage() {
    const [title, setTitle] = useState("Oops! Page Not Found");
    const [message, setMessage] = useState("The page you're looking for doesn't exist or has been moved.");
    const [emoji, setEmoji] = useState("😿");
    const [animate, setAnimate] = useState(false);
    const [bgColor, setBgColor] = useState("bg-white");
    const [isFullscreen, setIsFullscreen] = useState(false); // 🆕

    return (
        <div className="min-h-screen bg-slate p-4 md:p-6 flex items-center justify-center rounded-2xl">
            <div className="w-full max-w-7xl bg-white/80 backdrop-blur-sm rounded-3xl shadow-[0_8px_30px_rgba(99,102,241,0.3)] flex flex-col transition-all duration-300">
                <TopBar
                    title={title}
                    message={message}
                    emoji={emoji}
                    animate={animate}
                    background={bgColor}
                    isFullscreen={isFullscreen}
                    setIsFullscreen={setIsFullscreen}
                />

                <div className="flex flex-col md:flex-row flex-1 rounded-2xl min-h-[500px] transition-all ease-in-out">
                    <div
                        className={`transition-all duration-500 ease-in-out overflow-hidden ${isFullscreen ? "max-w-0 opacity-0" : "max-w-md opacity-100"
                            }`}
                    >
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
                    </div>

                    <div className={`flex-1 min-h-full flex flex-col items-center justify-center ${bgColor || "bg-white"} p-4`}>

                        <StatusPreview
                            title={title}
                            message={message}
                            emoji={emoji}
                            animate={animate}
                            background={bgColor}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}
