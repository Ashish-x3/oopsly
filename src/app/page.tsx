/* eslint-disable react/no-unescaped-entities */
// app/page.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      
      {/* Simple Header */}
      <motion.header 
        className="p-6 flex justify-between items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-xl font-medium">Oopsly</h1>
        <nav className="hidden sm:flex gap-8 text-sm">
          <Link href="/examples" className="text-slate-600 hover:text-slate-900">Examples</Link>
          <Link href="/about" className="text-slate-600 hover:text-slate-900">About</Link>
        </nav>
      </motion.header>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        
        <motion.p 
          className="text-7xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          🦄🧙💔⚠️🧭
        </motion.p>
        
        
        <motion.h2 
          className="text-5xl md:text-6xl font-bold leading-tight mb-8 text-slate-900"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Build 404s that<br />
          <span className="bg-yellow-200 px-3 py-1 -rotate-1 inline-block transform">don't suck</span>
        </motion.h2>
        
        <motion.p 
          className="text-xl text-slate-600 mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
         Craft a better 404 page in seconds. Customize the vibe with emojis and colors, and export developer-ready code. Give your users a better dead end.

        </motion.p>

        {/* CTA */}
        <motion.div 
          whileHover={{ scale: 1.02 }} 
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link 
            href="/generate"
            className="inline-block bg-slate-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-slate-800 transition-colors shadow-lg text-lg"
          >
            Try it free →
          </Link>
        </motion.div>
        <motion.p 
          className="text-sm text-slate-500 mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          no signup needed
        </motion.p>

        {/* ✨ Redesigned Quick Points Section */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6 mt-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div 
            whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" }} 
            className="p-6 bg-slate-50/50 rounded-xl"
          >
            <div className="text-4xl mb-3">🎨</div>
            <h3 className="font-semibold mb-2 text-slate-800">Live visual editor</h3>
            <p className="text-slate-600 text-sm">See your changes instantly</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" }} 
            className="p-6 bg-slate-50/50 rounded-xl"
          >
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-semibold mb-2 text-slate-800">Export clean code</h3>
            <p className="text-slate-600 text-sm">Ready-to-use React component</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" }} 
            className="p-6 bg-slate-50/50 rounded-xl"
          >
            <div className="text-4xl mb-3">😊</div>
            <h3 className="font-semibold mb-2 text-slate-800">Users actually smile</h3>
            <p className="text-slate-600 text-sm">Instead of bouncing</p>
          </motion.div>
        </motion.div>

        {/* Examples */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <p className="text-slate-600 mb-6">
            What people are making:
          </p>
          
          <div className="flex justify-center gap-4 text-5xl mb-6">
            <motion.span 
              className="cursor-pointer"
              whileHover={{ scale: 1.2, rotate: 10 }} 
              transition={{ duration: 0.2 }}
            >🚀</motion.span>
            <motion.span 
              className="cursor-pointer"
              whileHover={{ scale: 1.2, rotate: -10 }} 
              transition={{ duration: 0.2 }}
            >🎯</motion.span>
            <motion.span 
              className="cursor-pointer"
              whileHover={{ scale: 1.2, y: -5 }} 
              transition={{ duration: 0.2 }}
            >🎪</motion.span>
            <motion.span 
              className="cursor-pointer"
              whileHover={{ scale: 1.2, rotate: 15 }} 
              transition={{ duration: 0.2 }}
            >🎮</motion.span>
          </div>
          
          <Link 
            href="/examples" 
            className="text-slate-600 hover:text-slate-900 underline underline-offset-4"
          >
            See the gallery →
          </Link>
        </motion.div>

        {/* Personal touch */}
        <motion.div 
          className="mt-20 p-6 bg-blue-50 rounded-lg border border-blue-100 text-left max-w-lg mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex gap-3">
            <div className="text-2xl">👨‍💻</div>
            <div>
              <p className="text-slate-700 text-sm leading-relaxed">
                "I got tired of coding the same simple error pages over and over. So I built this to make it fast, easy, and fun" 
              </p>
              <p className="text-slate-600 text-xs mt-2">— Ashish</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
       <footer className="border-t border-slate-200 py-8 text-center">
        <p className="text-sm text-slate-500">
          Built with ❤️ using Next.js, Framer Motion, and Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}
