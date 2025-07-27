"use client";

import { useState } from "react";
import BuilderSidebar from "../components/BuilderSidebar";
import TopBar from "../components/TopBar";
import StatusPreview from "../components/StatusPreview";

export default function GeneratePage() {
    const [title, setTitle] = useState("Oops! Page Not Found");
    const [message, setMessage] = useState("The page you're looking for doesn't exist or has been moved.");
    const [emoji, setEmoji] = useState("😿");
    const [bgColor, setBgColor] = useState("bg-white");
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [showButton, setShowButton] = useState(true);
    const [buttonText, setButtonText] = useState("Back to Home");

    const isCustomColor = bgColor.startsWith("#");

    return (
        <div className="min-h-screen bg-slate p-4 md:p-6 flex items-center justify-center rounded-2xl">
            {/* ✨ FIX: Removed motion.div wrapper to eliminate page-level animation */}
            <div 
              className="w-full max-w-7xl bg-white/80 backdrop-blur-sm border border-black shadow-[0_8px_30px_rgba(99,102,241,0.3)] flex flex-col"
            >
                <TopBar
                    title={title}
                    message={message}
                    emoji={emoji}
                    background={bgColor}
                    isFullscreen={isFullscreen}
                    setIsFullscreen={setIsFullscreen}
                    showButton={showButton}
                    buttonText={buttonText}
                />

                <div 
                    className={`flex flex-col md:flex-row flex-1 rounded-2xl min-h-[500px] transition-colors duration-300 ${!isCustomColor ? bgColor : ''}`}
                    style={{ backgroundColor: isCustomColor ? bgColor : undefined }}
                >
                    <div
                        className={`transition-all duration-500 ease-in-out overflow-hidden border-r border-black ${isFullscreen ? "max-w-0 opacity-0 border-r-0" : "max-w-md opacity-100"
                            }`}
                    >
                        <BuilderSidebar
                            title={title}
                            setTitle={setTitle}
                            message={message}
                            setMessage={setMessage}
                            setEmoji={setEmoji}
                            background={bgColor}
                            setBackground={setBgColor}
                            showButton={showButton}
                            setShowButton={setShowButton}
                            buttonText={buttonText}
                            setButtonText={setButtonText}
                        />
                    </div>

                    <div
                        className={`flex-1 flex items-center justify-center p-4 ${isFullscreen ? "h-[80dvh]" : ""}`}
                    >
                        <StatusPreview
                            title={title}
                            message={message}
                            emoji={emoji}
                            showButton={showButton}
                            buttonText={buttonText}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}
