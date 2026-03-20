import Link from "next/link";
import { ArrowLeft, User } from "lucide-react";

export default async function FamilyMemberPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const dataMap = {
    dad: {
      role: "아빠",
      name: "연정환",
      fullDesc: "가족을 위해 항상 헌신하시는 우리 가족의 기둥입니다. 취미는 독서와 등산이며, 가족들과 함께하는 주말 식사 시간을 가장 소중하게 생각하십니다.",
      gradient: "from-blue-500 to-cyan-400 text-blue-500",
      bgLight: "bg-blue-50 dark:bg-blue-950/30",
    },
    mom: {
      role: "엄마",
      name: "아름다운 엄마",
      fullDesc: "우리 가족의 따뜻한 안식처이자 요리사. 꽃과 식물을 사랑하시며 언제나 밝은 웃음으로 집안 분위기를 환하게 만들어 주시는 수호천사입니다.",
      gradient: "from-rose-500 to-pink-400 text-rose-500",
      bgLight: "bg-rose-50 dark:bg-rose-950/30",
    },
    son1: {
      role: "큰아들",
      name: "듬직한 장남",
      fullDesc: "어릴 적부터 호기심이 많고 책임감이 남달랐던 큰아들. 프로그래밍과 게임 개발에 관심이 많아 훗날 멋진 개발자가 되는 것을 꿈꾸고 있습니다.",
      gradient: "from-amber-500 to-orange-400 text-amber-500",
      bgLight: "bg-amber-50 dark:bg-amber-950/30",
    },
    son2: {
      role: "작은아들",
      name: "귀여운 막내",
      fullDesc: "천진난만하고 웃음이 많은 집안의 귀염둥이 막내. 노래 부르기와 춤추기를 좋아하며 에너지가 넘쳐 온 가족을 미소 짓게 합니다.",
      gradient: "from-emerald-500 to-teal-400 text-emerald-500",
      bgLight: "bg-emerald-50 dark:bg-emerald-950/30",
    },
  };

  const member = dataMap[id as keyof typeof dataMap];

  if (!member) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">가족을 찾을 수 없습니다.</h2>
        <Link href="/family" className="text-rose-500 hover:underline">
          가족 소개 페이지로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-white dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/family" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          가족 목록으로 돌아가기
        </Link>

        <div className={`rounded-3xl p-8 sm:p-12 border border-slate-100 dark:border-slate-800 ${member.bgLight} transition-colors duration-300`}>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className={`flex-shrink-0 w-32 h-32 rounded-full flex items-center justify-center bg-white dark:bg-slate-900 shadow-xl overflow-hidden`}>
              <User className={`w-16 h-16 ${member.gradient}`} />
            </div>
            
            <div className="text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {member.role}
              </h1>
              <p className={`text-xl font-medium mt-2 bg-clip-text text-transparent bg-gradient-to-r ${member.gradient}`}>
                {member.name}
              </p>
              
              <div className="mt-6 h-px w-full bg-slate-200 dark:bg-slate-700/50" />
              
              <p className="mt-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                {member.fullDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
