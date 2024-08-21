"use client";
import { createContext, useState, useEffect, ReactNode } from "react";
import { WordResponse } from "@/interfaces";

interface FavoriteWordsProvider{
  favoriteWords: WordResponse[] | null
  updateWord: (wordInfo:WordResponse[]) => void
}

export const FavoriteWordsContext = createContext<FavoriteWordsProvider>({
  favoriteWords: null,
  updateWord: (wordInfo:WordResponse[]) => {}
});

export function FavoriteWordsProvider({children}:{children:ReactNode}){
  const [favoriteWords, setFavoriteWords] = useState<WordResponse[] | null>(null);

  useEffect(() => {
    const favoriteWords = localStorage.getItem("favoriteWords");
    if (!favoriteWords) return;
    setFavoriteWords(JSON.parse(favoriteWords));
  },[]);

  useEffect(() => {
    localStorage.setItem("favoriteWords", JSON.stringify(favoriteWords));
  }, [favoriteWords]);

  function updateWord(wordInfo:WordResponse[]){
    setFavoriteWords(wordInfo);
  }

  return(
    <FavoriteWordsContext.Provider value={{favoriteWords, updateWord}}>
      {children}
    </FavoriteWordsContext.Provider>
  )
}