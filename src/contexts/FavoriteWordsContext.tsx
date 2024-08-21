"use client";
import { createContext, useState ,ReactNode } from "react";
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

  function updateWord(wordInfo:WordResponse[]){
    setFavoriteWords(wordInfo);
  }
  return(
    <FavoriteWordsContext.Provider value={{favoriteWords, updateWord}}>
      {children}
    </FavoriteWordsContext.Provider>
  )
}