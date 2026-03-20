"use server";

export type Message = {
  id: string;
  author: string;
  content: string;
  createdAt: number;
};

// Vercel Serverless 환경에서는 영구 보존되지 않지만 기능 시험을 위해 글로벌 메모리에 저장합니다.
const globalMemory = globalThis as unknown as { messages: Message[] };
globalMemory.messages = globalMemory.messages || [];

export async function getMessages() {
  return [...globalMemory.messages].sort((a, b) => b.createdAt - a.createdAt);
}

export async function addMessage(formData: FormData) {
  const author = formData.get("author")?.toString();
  const password = formData.get("password")?.toString();
  const content = formData.get("content")?.toString();

  if (!author || !password || !content) {
    return { success: false, error: "모든 칸을 입력해주세요." };
  }

  if (password !== "1111") {
    return { success: false, error: "비밀번호가 틀렸습니다." };
  }

  const newMessage: Message = {
    id: crypto.randomUUID(),
    author,
    content,
    createdAt: Date.now(),
  };

  globalMemory.messages.push(newMessage);
  return { success: true };
}
