"use client";

import { useState } from "react";
import BuilderSidebar from "../components/BuilderSidebar";
import TopBar from "../components/TopBar";
import StatusPreview from "../components/StatusPreview";
import { motion, Variants } from "framer-motion";

export default function GeneratePage() {
    const [title, setTitle] = useState("You've Found a Secret Place!");
    const [message, setMessage] = useState("This page doesn't exist, but at least you found this cool unicorn 🦄");
    const [emoji, setEmoji] = useState("🦄");
    const [bgColor, setBgColor] = useState("bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100");
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [showButton, setShowButton] = useState(true);
    const [buttonText, setButtonText] = useState("Back to Reality");
    const isCustomColor = bgColor.startsWith("#");

    const pageVariants: Variants = {
        hidden: { opacity: 0, scale: 0.98 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="min-h-screen bg-slate p-4 md:p-6 flex items-center justify-center">
            <motion.div
                className="w-full max-w-7xl bg-white/80 backdrop-blur-sm border border-black shadow-[0_8px_30px_rgba(99,102,241,0.3)] flex flex-col h-[90vh]"
                variants={pageVariants}
                initial="hidden"
                animate="visible"
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
                    className={`flex flex-col md:flex-row flex-1 min-h-0 transition-colors duration-300 ${!isCustomColor ? bgColor : ''}`}
                    style={{ backgroundColor: isCustomColor ? bgColor : undefined }}
                >
                    <div
                        className={`transition-all duration-500 ease-in-out border-r border-black overflow-y-auto bg-white ${isFullscreen ? "max-w-0 opacity-0 border-r-0" : "w-full md:max-w-sm opacity-100"
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
            </motion.div>
        </div>
    );
}
