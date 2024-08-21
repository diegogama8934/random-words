"use client";
import { useState, useRef, useContext } from "react";
import { WordContext } from "@/contexts/WordContext";
import { WordResponse } from "@/interfaces";
import { useRouter } from "next/navigation";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { updateWord } = useContext(WordContext);
  const [favoriteWords, setFavoriteWords] = useState<WordResponse[]>([]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inputRef.current && inputRef.current.value == "") return;

    const resBody = await fetch(`https://wordsapiv1.p.rapidapi.com/words/${inputRef.current?.value}`, {
      method: "GET",
      headers: {
        'x-rapidapi-key': `${process.env.NEXT_PUBLIC_X_RAPID_API_KEY}`,
        'x-rapidapi-host': `${process.env.NEXT_PUBLIC_X_RAPID_API_HOST}`
      }
    })
      .then(res => res.json())
      .catch(err => console.error(err));

    updateWord(resBody);
    router.push(`/${inputRef.current?.value}`);
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
      <div className="mt-16 px-32 transition-all flex flex-col items-center gap-8">
        <h2 className="w-fit font-bold text-3xl bg-gradient-to-r from-violet-600 to-indigo-600 gradient-text">Searched word</h2>
        <span className="text-zinc-500">Some information of &quot;word&quot;</span>
      </div>
    </div>
  );
}