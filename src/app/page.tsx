"use client";
import { useState, useRef } from "react";
import { WordResponse } from "@/interfaces";
import { useRouter } from "next/navigation";
import { FavoriteWords } from "@/components/FavoriteWords";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [favoriteWords, setFavoriteWords] = useState<WordResponse[]>([]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(`/${inputRef.current?.value}`);
  }

  async function handleLookForARandomWord() {
    const resBody = await fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true", {
      method: "GET",
      headers: {
        'x-rapidapi-key': `${process.env.NEXT_PUBLIC_X_RAPID_API_KEY}`,
        'x-rapidapi-host': `${process.env.NEXT_PUBLIC_X_RAPID_API_HOST}`
      }
    })
      .then(res => res.json())
      .catch(err => console.log(err))

    router.push(`/${resBody.word}`);
  }

  return (
    <div>
      <div className="flex flex-col h-[300px] items-center justify-center relative bg-gradient-to-r from-violet-600 to-indigo-600">
        <h1 className="text-5xl font-bold text-white bg-gradient-to-r from-amber-200 to-yellow-400 gradient-text">Search a WORD</h1>
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
      </div>

      {<FavoriteWords />}
    </div>
  );
}