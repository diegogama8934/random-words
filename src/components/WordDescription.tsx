"use client";

import { useContext } from "react";
import { WordContext } from "@/contexts/WordContext";

export function WordDescription(){
  const { word } = useContext(WordContext);

  return(
    <div className="p-16 flex flex-col gap-8 items-center">
      <h1 className="w-fit font-bold text-3xl bg-gradient-to-r from-violet-600 to-indigo-600 gradient-text capitalize">{word?.word}</h1>

      <main className="flex justify-center flex-wrap gap-8">
        {
          word?.results.map(({definition, partOfSpeech, synonyms, typeOf}, index) => (
            <div key={index} className="flex flex-col gap-4 p-4 rounded-md border-2 border-zinc-100 w-[400px]">
              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <span className="font-bold">Definition</span>
                  <p className="text-zinc-500">{definition[0].toUpperCase() + definition.slice(1)}</p>
                </div>
                <span className="capitalize text-zinc-500">{partOfSpeech}</span>
              </div>              
              <div className="flex flex-col gap-2">
                <span>Synonyms</span>
                <div className="flex flex-wrap gap-4">
                  {
                    synonyms?.map((synonym, index) => (
                      <div key={index} className="px-2 py-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full">
                        <span className="bg-gradient-to-r from-amber-200 to-yellow-400 gradient-text capitalize font-bold">{synonym}</span>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          ))
        }
      </main>
    </div>
  );
}