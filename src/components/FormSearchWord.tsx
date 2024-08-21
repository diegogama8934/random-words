"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export function FormSearchWord() {

  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(`/${inputRef.current?.value}`);
  }

  return (
    <form
      className="flex gap-2 items-center bg-gray-100 absolute -bottom-8 rounded-lg w-[600px] py-2 px-4 hover:scale-105 transition-all"
      onSubmit={handleSubmit}
    >
      <span
        className="material-symbols-rounded !text-2xl"
      >
        search
      </span>
      <input
        type="text"
        className="p-2 w-full bg-transparent focus-visible:outline-none"
        placeholder="Search a word"
        ref={inputRef}
      />
    </form>
  );
}