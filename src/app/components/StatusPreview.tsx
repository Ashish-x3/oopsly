"use client";

import { motion } from "framer-motion";

interface StatusPreviewProps {
  title: string;
  message: string;
  emoji: string;
  showButton: boolean;
  buttonText: string;
}

export default function StatusPreview({
  title,
  message,
  emoji,
  showButton,
  buttonText,
}: StatusPreviewProps) {
  return (
    <div className="flex-1 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md text-center"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
          className={`text-8xl md:text-9xl mb-6`}
        >
          {emoji}
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="text-3xl font-bold text-slate-800 dark:text-white"
        >
          {title}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="text-lg text-slate-600 dark:text-slate-300 mt-2"
        >
          {message}
        </motion.p>
        
        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            <button
              className="mt-8 bg-black dark:bg-white dark:text-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white"
            >
              {buttonText}
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
