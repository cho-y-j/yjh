"use client";

import { motion } from "framer-motion";
import { User, Heart, Star, Zap, Shield, Sparkles } from "lucide-react";

export default function FamilyPage() {
  const familyMembers = [
    {
      role: "아빠",
      name: "연동주 (예시)",
      description: "우리 가족의 든든한 버팀목이자 항상 지혜로운 조언을 해주시는 아빠입니다.",
      icon: Shield,
      gradient: "from-blue-500 to-cyan-400",
      delay: 0.1,
    },
    {
      role: "엄마",
      name: "아름다운 엄마",
      description: "따뜻한 사랑과 배려로 언제나 가족을 포근하게 감싸주시는 우리 엄마입니다.",
      icon: Heart,
      gradient: "from-rose-500 to-pink-400",
      delay: 0.2,
    },
    {
      role: "큰아들",
      name: "듬직한 장남",
      description: "책임감이 강하고 동생을 잘 챙기는 멋진 큰아들. 항상 노력하는 모습이 빛납니다.",
      icon: Star,
      gradient: "from-amber-500 to-orange-400",
      delay: 0.3,
    },
    {
      role: "작은아들",
      name: "귀여운 막내",
      description: "집안의 활력소이자 비타민. 특유의 밝은 에너지로 온 가족에게 웃음을 줍니다.",
      icon: Zap,
      gradient: "from-emerald-500 to-teal-400",
      delay: 0.4,
    },
  ];

  return (
    <div className="min-h-screen pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto pt-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 mb-4 bg-rose-50 dark:bg-rose-500/10 rounded-full">
            <Sparkles className="w-6 h-6 text-rose-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            우리 가족을 <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">소개합니다</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
            각자의 개성과 매력을 가진 우리 네 식구의 이야기를 들려드릴게요.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {familyMembers.map((member, idx) => {
            const Icon = member.icon;
            return (
              <motion.div
                key={member.role}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: member.delay, type: "spring", stiffness: 100 }}
                className="group relative bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors overflow-hidden flex flex-col items-center text-center"
              >
                {/* Background decorative glow on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <div className={`relative mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br ${member.gradient} text-white shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300`}>
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {member.role}
                  <span className="block text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                    {member.name}
                  </span>
                </h3>

                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-2">
                  {member.description}
                </p>

                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r rounded-b-3xl w-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: member.delay + 0.2 }}
                  style={{
                    backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                  }}
                >
                  <div className={`w-full h-full bg-gradient-to-r ${member.gradient}`} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
