import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto py-8 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 text-center flex flex-col items-center justify-center gap-2">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1">
          Made with <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" /> for Yeon's Family
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-500">
          © {new Date().getFullYear()} 연정환 가족. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
