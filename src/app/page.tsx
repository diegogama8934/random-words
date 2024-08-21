"use client";
import { FavoriteWords, FormSearchWord } from "@/components";

export default function Home() {

  return (
    <div>
      <div className="flex flex-col h-[300px] items-center justify-center relative bg-gradient-to-r from-violet-600 to-indigo-600">
        <h1 className="text-5xl font-bold text-white bg-gradient-to-r from-amber-200 to-yellow-400 gradient-text">Search a WORD</h1>
        <FormSearchWord />
      </div>
      {<FavoriteWords />}
    </div>
  );
}