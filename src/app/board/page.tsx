"use client";

import { useState, useEffect } from "react";
import { getMessages, addMessage, type Message } from "@/app/actions";
import { motion } from "framer-motion";
import { MessageSquarePlus, MessageCircle, AlertCircle } from "lucide-react";

export default function BoardPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorText, setErrorText] = useState("");

  const refreshMessages = async () => {
    const data = await getMessages();
    setMessages(data);
    setLoading(false);
  };

  useEffect(() => {
    refreshMessages();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorText("");
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const result = await addMessage(formData);

    if (result.success) {
      e.currentTarget.reset();
      refreshMessages();
    } else {
      setErrorText(result.error || "오류가 발생했습니다.");
    }
    
    setIsSubmitting(false);
  }

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <div className="inline-flex p-3 bg-blue-50 dark:bg-blue-900/20 rounded-full mb-4">
          <MessageCircle className="w-8 h-8 text-blue-500" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          가족 게시판
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          가족들에게 전하고 싶은 따뜻한 메시지를 남겨주세요.
        </p>
      </motion.div>

      {/* 작성 폼 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-6 sm:p-8 mb-12"
      >
        <h2 className="text-xl font-bold flex items-center gap-2 mb-6 text-slate-900 dark:text-white">
          <MessageSquarePlus className="w-5 h-5 text-rose-500" /> 방명록 남기기
        </h2>

        {errorText && (
          <div className="mb-6 flex items-center gap-2 p-4 text-sm text-red-600 bg-red-50 dark:bg-red-500/10 dark:text-red-400 rounded-xl">
            <AlertCircle className="w-4 h-4" />
            {errorText}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="author"
              required
              placeholder="작성자 이름"
              className="flex-1 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500 transition-shadow"
            />
            <input
              type="password"
              name="password"
              required
              placeholder="비밀번호 (1111)"
              className="flex-1 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500 transition-shadow"
            />
          </div>
          <textarea
            name="content"
            required
            placeholder="따뜻한 글귀를 적어주세요!"
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500 transition-shadow resize-none"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl hover:bg-slate-800 dark:hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? "등록 중..." : "글 등록하기"}
          </button>
        </form>
      </motion.div>

      {/* 메시지 목록 */}
      <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">최근 남긴 글</h3>
      {loading ? (
        <div className="text-center text-slate-500 py-10">목록을 불러오는 중...</div>
      ) : messages.length === 0 ? (
        <div className="text-center text-slate-500 dark:text-slate-400 py-12 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
          아직 작성된 글이 없습니다. 첫 번째 글을 남겨보세요!
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((msg, idx) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-slate-900 dark:text-white">{msg.author}</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {new Date(msg.createdAt).toLocaleString("ko-KR", { dateStyle: "long", timeStyle: "short" })}
                </span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 whitespace-pre-wrap leading-relaxed">
                {msg.content}
              </p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
