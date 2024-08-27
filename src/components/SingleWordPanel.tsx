"use client";
import { WordResponse } from "@/interfaces";
import { WordInformation } from "./WordInformation";

export function SingleWordPanel({ wordInformation }: { wordInformation: WordResponse }) {

  return (
    <div className="p-16 flex flex-col gap-8 items-center">
      <h1 className="w-fit font-bold text-3xl bg-gradient-to-r from-violet-600 to-indigo-600 gradient-text capitalize">{wordInformation.word}</h1>
      <main className="flex justify-center flex-col gap-8">
        {wordInformation.results.map((singleConcept, index) => <WordInformation key={index} {...singleConcept} />)}
      </main>
    </div>
  );
}