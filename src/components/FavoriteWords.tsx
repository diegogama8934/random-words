"use client";
import { useContext } from "react";
import { FavoriteWordsContext } from "@/contexts/FavoriteWordsContext";

export function FavoriteWords() {
  const { favoriteWords } = useContext(FavoriteWordsContext);

  return (
    <div className="mt-12 p-16 gap-16 flex flex-col">
      <h2 className="text-center text-2xl font-bold gradient-text bg-gradient-to-r from-violet-600 to-indigo-600">Your favorite words</h2>
      {
        favoriteWords ? (
          <div>
            
          </div>
        ) : (
          <span className="text-zinc-400 text-center">Any favorite words yet</span>
        )
      }
    </div>
  );
}