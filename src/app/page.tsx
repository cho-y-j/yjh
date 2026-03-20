"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950 -z-20" />
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-rose-400/20 dark:bg-rose-500/10 blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-400/20 dark:bg-blue-500/10 blur-3xl -z-10 animate-pulse delay-1000" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
            className="mb-6 inline-flex items-center justify-center p-3 sm:p-4 bg-white/80 dark:bg-slate-900/80 rounded-2xl shadow-xl backdrop-blur-md border border-white/20 dark:border-slate-800/50"
          >
            <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-rose-500 fill-rose-500" />
          </motion.div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
            <span className="block">사랑이 넘치는</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">
              연정환 가족
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-10 mx-auto leading-relaxed">
            서로를 아끼고 존중하며 함께 성장하는 우리 가족의 소중한 이야기와 추억을 담은 특별한 공간입니다.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <Link
              href="/family"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/20 dark:shadow-white/10"
            >
              <span className="relative z-10 flex items-center gap-2">
                가족 만나보기
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-rose-500 to-orange-400 group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 hidden md:block"
      >
        <Sparkles className="w-8 h-8 text-yellow-400/60" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 hidden md:block"
      >
        <Sparkles className="w-6 h-6 text-blue-400/60" />
      </motion.div>
    </div>
  );
}
