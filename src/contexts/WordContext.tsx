"use client";
import { createContext, useState ,ReactNode } from "react";
import { WordResponse } from "@/interfaces";

interface WordProvider{
  word: WordResponse | null
  updateWord: (wordInfo:WordResponse) => void
}

export const WordContext = createContext<WordProvider>({
  word: null,
  updateWord: (wordInfo:WordResponse) => {}
});

export function WordProvider({children}:{children:ReactNode}){
  const [word, setWord] = useState<WordResponse | null>(null);

  function updateWord(wordInfo:WordResponse){
    setWord(wordInfo);
  }

  return(
    <WordContext.Provider value={{word, updateWord}}>
      {children}
    </WordContext.Provider>
  )
}