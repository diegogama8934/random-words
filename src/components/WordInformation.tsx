"use client";
import { useState } from "react";

interface Props {
  definition: string
  partOfSpeech?: string
  synonyms?: string[]
}

export function WordInformation({ definition, partOfSpeech, synonyms }: Props) {
  
  const [isOpen, setIsOpen] = useState(false);

  function toggleSynonyms(){
    if(!synonyms) return;
    setIsOpen(!isOpen);
  }

  return (
    <div className="flex flex-col gap-8 w-full p-8 rounded-md border-2 border-zinc-100 transition-all">
      <div className="flex gap-8 cursor-pointer hover:bg-zinc-50" onClick={toggleSynonyms}>
        <p className="text-zinc-800 flex-1">{definition[0].toUpperCase() + definition.slice(1)}</p>
        <span className="capitalize text-zinc-400">{partOfSpeech}</span>
      </div>
      <div className={`transition-all opacity-100 flex flex-wrap gap-4 ${!isOpen && "!opacity-0 !hidden"}`}>
        {
          synonyms?.map((syn, index) => <div key={index} className="py-1 px-4 border-2 rounded-full border-zinc-100 text-zinc-400 ">{syn[0].toUpperCase() + syn.slice(1)}</div>)
        }
      </div>
    </div>
  );
}